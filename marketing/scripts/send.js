// Send a campaign through Resend.
//
//   node scripts/send.js --campaign kickoff-2026-27 --to you@yale.edu
//   node scripts/send.js --campaign kickoff-2026-27 --to a@yale.edu --to b@yale.edu
//   node scripts/send.js --campaign kickoff-2026-27 --list yale-college-2027-2030.txt
//   node scripts/send.js --campaign kickoff-2026-27 --list yale-college-2027-2030.txt --dry-run
//   node scripts/send.js --campaign kickoff-2026-27 --list yale-college-2027-2030.txt --limit 500
//   node scripts/send.js --campaign kickoff-2026-27 --to you@yale.edu --inline-images
//   node scripts/send.js --campaign kickoff-2026-27 --to you@yale.edu --force
//
// Each recipient gets their own message: no exposed lists, no BCC blast, and a
// personalised greeting when the list line carries a name. Lists go through
// Resend's batch endpoint, 100 messages per request, with a short pause between
// batches. Every successful address is appended to campaigns/<name>/sent.tsv,
// and addresses already in that ledger are skipped on the next run, so a rerun
// never double-sends and a crashed run resumes where it stopped. --limit caps
// how many go out in one run, for sending in waves.
//
// recipients/unsubscribed.txt is always honored, even with --ignore-log.
//
// Exit codes: 0 all good, 1 one or more sends failed, 2 bad usage or missing
// config, 3 the send lock refused a recipient.
import "dotenv/config";
import { createHash } from "node:crypto";
import { Resend } from "resend";
import { loadCampaign, listCampaigns } from "../lib/campaign.js";
import { loadAssets, cidProps, hostedProps, attachments, HOSTED_BASE } from "../lib/assets.js";
import {
  parseRecipient,
  loadList,
  loadUnsubscribed,
  loadSent,
  appendSent,
  dedupe,
  EMAIL_RE,
} from "../lib/recipients.js";

// ---- send lock --------------------------------------------------------------
// Standing rule: nothing goes to a real Yale College list until a human flips
// this. While SEND_LOCK is true, any recipient outside LOCK_ALLOWED is refused
// loudly and the run exits 3. Add the rest of the board to LOCK_ALLOWED for
// board-only test blasts. Flip SEND_LOCK to false only when the copy is signed
// off and someone has said, out loud, to send it.
const SEND_LOCK = false;
const LOCK_ALLOWED = new Set([
  "filippo.fonseca@yale.edu",
  "filifonsecacagnazzo@gmail.com",
  // The 2026-27 board, for board-only test sends.
  "hari.viswanathan@yale.edu",
  "hanson.qin@yale.edu",
  "henry.ng@yale.edu",
  "addison.shea@yale.edu",
  "david.antwi@yale.edu",
  "aryan.agarwal@yale.edu",
  // Test recipients approved by Filippo.
  "emir.ahmed@yale.edu",
]);

// ---- args -------------------------------------------------------------------
const args = process.argv.slice(2);
let campaignName = null;
const tos = [];
let listFile = null;
let dryRun = false;
let inlineImages = false; // default: hosted https images; --inline-images switches to CID attachments
let force = false; // --force: resend even if identical content already went out
let limit = Infinity; // --limit N: send at most N this run
let ignoreLog = false; // --ignore-log: do not skip addresses found in the ledger
let subjectPrefix = ""; // --subject-prefix "[TEST] ": a test lands in its own thread
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--campaign") campaignName = args[++i];
  else if (args[i] === "--to") tos.push(args[++i]);
  else if (args[i] === "--list") listFile = args[++i];
  else if (args[i] === "--dry-run") dryRun = true;
  else if (args[i] === "--inline-images") inlineImages = true;
  else if (args[i] === "--force") force = true;
  else if (args[i] === "--limit") limit = Number(args[++i]);
  else if (args[i] === "--ignore-log") ignoreLog = true;
  else if (args[i] === "--subject-prefix") subjectPrefix = args[++i] || "";
  else {
    console.error(`unknown arg: ${args[i]}`);
    process.exit(2);
  }
}
const usage =
  "usage: node scripts/send.js --campaign <name> (--to <email> [--to <email>] | --list <file>) " +
  "[--dry-run] [--limit N] [--inline-images] [--force] [--ignore-log] [--subject-prefix S]";
if (!campaignName) {
  console.error(usage);
  console.error(`campaigns: ${listCampaigns().join(", ") || "(none)"}`);
  process.exit(2);
}

let campaign;
let recipients;
try {
  campaign = await loadCampaign(campaignName);
  recipients = tos.map(parseRecipient);
  if (listFile) recipients = recipients.concat(loadList(listFile));
} catch (e) {
  console.error(e.message);
  process.exit(2);
}
if (recipients.length === 0) {
  console.error(usage);
  process.exit(2);
}

// ---- send lock (checked first, before anything else can fail) ---------------
if (SEND_LOCK && !dryRun) {
  const blocked = recipients.filter((r) => !LOCK_ALLOWED.has(r.email.trim().toLowerCase()));
  if (blocked.length) {
    console.error(
      `SEND LOCK is on: refusing ${blocked.length} recipient(s) outside the board allowlist ` +
        `(e.g. ${blocked[0].email}). Flip SEND_LOCK in scripts/send.js only when the send is approved.`,
    );
    process.exit(3);
  }
}

// ---- env --------------------------------------------------------------------
const need = (k) => {
  const v = process.env[k];
  if (!v) {
    console.error(`missing ${k} in marketing/.env (see README.md for the full list)`);
    process.exit(2);
  }
  return v;
};
const apiKey = dryRun ? process.env.RESEND_API_KEY || "" : need("RESEND_API_KEY");
// Sender on the verified yale-ai.org domain. Override with EMAIL_FROM / REPLY_TO
// (comma-separated) in marketing/.env.
const from = process.env.EMAIL_FROM || "YaleAI Association <info@yale-ai.org>";
const replyTo = (process.env.REPLY_TO || "yaleaiassociation@gmail.com, aryan.agarwal@yale.edu, addison.shea@yale.edu, filippo.fonseca@yale.edu")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

// Resend's sandbox sender only ever delivers to your own account address.
if (/resend\.dev/.test(from)) {
  console.warn("WARNING: sandbox sender; delivers only to your own Resend account email.");
  if ((listFile || recipients.length > 1) && !dryRun) {
    console.error("refusing to send a list from the sandbox sender; set EMAIL_FROM to an address on yale-ai.org");
    process.exit(2);
  }
}

const lumaUrl = process.env.LUMA_URL || undefined; // undefined lets the campaign default win
const siteUrl = process.env.SITE_URL || undefined;

// ---- recipients -------------------------------------------------------------
const bad = recipients.filter((r) => !EMAIL_RE.test(r.email));
if (bad.length) {
  console.error("invalid addresses:", bad.slice(0, 10).map((b) => b.display).join(", "));
  process.exit(2);
}
recipients = dedupe(recipients);

const unsubscribed = loadUnsubscribed();
const unsubSkipped = recipients.filter((r) => unsubscribed.has(r.email.toLowerCase())).length;
recipients = recipients.filter((r) => !unsubscribed.has(r.email.toLowerCase()));

const alreadySent = ignoreLog ? new Set() : loadSent(campaign.dir);
const skipped = recipients.filter((r) => alreadySent.has(r.email.toLowerCase())).length;
recipients = recipients.filter((r) => !alreadySent.has(r.email.toLowerCase()));

if (recipients.length > limit) recipients = recipients.slice(0, limit);

// ---- payload ----------------------------------------------------------------
const assets = loadAssets(campaign.assets, campaign.assetsDir);
const imageProps = inlineImages ? cidProps(assets) : hostedProps(assets, campaign.id);
const resend = new Resend(apiKey || "re_dry_run");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

console.log(`campaign: ${campaign.id}  (tag ${campaign.tag})`);
console.log(`from:     ${from}`);
console.log(`reply-to: ${replyTo.join(", ") || "(none)"}`);
console.log(`subject:  ${campaign.subject}`);
console.log(
  `assets:   ${assets.map((a) => a.file).join(", ") || "(none)"} ` +
    `(${inlineImages ? "inline CID" : `hosted at ${HOSTED_BASE}/${campaign.id}`})`,
);
console.log(
  `to:       ${recipients.length} recipient(s)${dryRun ? " [dry run]" : ""}` +
    `${skipped ? `, ${skipped} already in sent.tsv and skipped` : ""}` +
    `${unsubSkipped ? `, ${unsubSkipped} unsubscribed and skipped` : ""}` +
    `${Number.isFinite(limit) ? `, limit ${limit}` : ""}`,
);
if (SEND_LOCK) console.log(`lock:     SEND_LOCK is ON (allowlist of ${LOCK_ALLOWED.size})`);

// Google and Yahoo require one-click unsubscribe headers from bulk senders.
const unsubMailto = `mailto:${replyTo[0] || "info@yale-ai.org"}?subject=unsubscribe`;

function buildPayload(r) {
  const { subject: baseSubject, html, text } = campaign.render({
    firstName: r.firstName,
    ...(lumaUrl ? { lumaUrl } : {}),
    ...(siteUrl ? { siteUrl } : {}),
    ...imageProps,
  });
  const subject = subjectPrefix + baseSubject;
  return {
    from,
    to: [r.display],
    replyTo,
    subject,
    html,
    text,
    headers: {
      "List-Unsubscribe": `<${unsubMailto}>`,
      "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
    },
    // Hosted images by default: no attachments, no paperclip in Gmail. No .ics
    // either, since a calendar attachment makes Gmail render this as an invite.
    attachments: inlineImages ? attachments(assets) : [],
    tags: [{ name: "campaign", value: campaign.tag }],
  };
}

function idemFor(r, payload) {
  const fingerprint =
    `${campaign.id}|${payload.subject}|${r.email}|${payload.html}` +
    `|${payload.attachments.map((a) => a.filename).join(",")}${force ? `|${Date.now()}` : ""}`;
  return `${campaign.id}-${createHash("sha256").update(fingerprint).digest("hex").slice(0, 48)}`;
}

function idemForBatch(chunk, payloads) {
  const fingerprint =
    `${campaign.id}|${payloads[0].subject}|${chunk.map((r) => r.email.toLowerCase()).join(",")}` +
    `|${payloads[0].html}${force ? `|${Date.now()}` : ""}`;
  return `${campaign.id}-batch-${createHash("sha256").update(fingerprint).digest("hex").slice(0, 40)}`;
}

let ok = 0;
let failed = 0;

if (dryRun) {
  for (const r of recipients) {
    console.log(`  would send -> ${r.display}${r.firstName ? `  (greeting: Hey ${r.firstName},)` : ""}`);
  }
  ok = recipients.length;
} else if (recipients.length === 1) {
  const r = recipients[0];
  const payload = buildPayload(r);
  try {
    const { data, error } = await resend.emails.send(payload, { idempotencyKey: idemFor(r, payload) });
    if (error) throw new Error(error.message || JSON.stringify(error));
    console.log(`  sent -> ${r.display}  id=${data.id}`);
    appendSent(campaign.dir, r.email, data.id);
    ok++;
  } catch (e) {
    console.error(`  FAILED -> ${r.display}: ${e.message}`);
    failed++;
  }
} else {
  // Batches of 100 (Resend's maximum per call). Inline CID attachments are not
  // allowed on the batch endpoint, so that mode falls back to one at a time.
  const BATCH = inlineImages ? 1 : 100;
  for (let i = 0; i < recipients.length; i += BATCH) {
    const chunk = recipients.slice(i, i + BATCH);
    const payloads = chunk.map(buildPayload);
    try {
      let ids = [];
      if (BATCH === 1) {
        const { data, error } = await resend.emails.send(payloads[0], {
          idempotencyKey: idemFor(chunk[0], payloads[0]),
        });
        if (error) throw new Error(error.message || JSON.stringify(error));
        ids = [data.id];
      } else {
        // One idempotency key per batch, derived from its contents, so a retry
        // after a timeout or 429 can never deliver the same batch twice.
        const key = idemForBatch(chunk, payloads);
        let last;
        for (let attempt = 1; attempt <= 3; attempt++) {
          try {
            const { data, error } = await resend.batch.send(payloads, { idempotencyKey: key });
            if (error) throw new Error(error.message || JSON.stringify(error));
            ids = (data?.data || data || []).map((d) => d.id);
            last = null;
            break;
          } catch (e) {
            last = e;
            console.error(`  batch ${Math.floor(i / BATCH) + 1} attempt ${attempt} failed: ${e.message}`);
            await sleep(3000 * attempt);
          }
        }
        if (last) throw last;
      }
      chunk.forEach((r, j) => appendSent(campaign.dir, r.email, ids[j] || "?"));
      ok += chunk.length;
      console.log(`  batch ${Math.floor(i / BATCH) + 1}: sent ${chunk.length} (${ok}/${recipients.length})`);
    } catch (e) {
      failed += chunk.length;
      console.error(
        `  batch ${Math.floor(i / BATCH) + 1} FAILED (${chunk.length} addresses, ` +
          `${chunk[0].email} ... ${chunk[chunk.length - 1].email}): ${e.message}`,
      );
    }
    await sleep(600);
  }
}

console.log(`done: ${ok} ok, ${failed} failed`);
process.exit(failed ? 1 : 0);
