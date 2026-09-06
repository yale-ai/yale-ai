// Pre-flight for a real send. Is the sending domain verified in Resend, and do
// SPF, DKIM, and DMARC resolve? Prints one line per check.
//
//   node scripts/check.js
//   node scripts/check.js --campaign kickoff-2026-27
//
// With --campaign it also reports what that campaign will send: the subject,
// which asset files exist on disk, and how many addresses are already in the
// campaign ledger.
import "dotenv/config";
import { Resend } from "resend";
import { promises as dns } from "node:dns";
import { loadCampaign, listCampaigns } from "../lib/campaign.js";
import { loadAssets } from "../lib/assets.js";
import { loadSent, loadUnsubscribed } from "../lib/recipients.js";

// ---- args -------------------------------------------------------------------
const args = process.argv.slice(2);
let campaignName = null;
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--campaign") campaignName = args[++i];
  else {
    console.error(`unknown arg: ${args[i]}`);
    process.exit(2);
  }
}

// ---- campaign summary (no API key needed) -----------------------------------
if (campaignName) {
  let campaign;
  try {
    campaign = await loadCampaign(campaignName);
  } catch (e) {
    console.error(e.message);
    process.exit(2);
  }
  const assets = loadAssets(campaign.assets, campaign.assetsDir);
  const missing = campaign.assets.filter((a) => !assets.some((b) => b.file === a.file));
  console.log(`campaign: ${campaign.id}  (tag ${campaign.tag})`);
  console.log(`subject:  ${campaign.subject}`);
  console.log(`assets:   ${assets.map((a) => a.file).join(", ") || "(none)"}`);
  if (missing.length) console.log(`missing:  ${missing.map((a) => a.file).join(", ")}`);
  console.log(`ledger:   ${loadSent(campaign.dir).size} address(es) already sent`);
  console.log("");
} else {
  console.log(`campaigns: ${listCampaigns().join(", ") || "(none)"}`);
}
console.log(`unsubscribed: ${loadUnsubscribed().size} address(es) permanently skipped`);
console.log("");

// ---- domain -----------------------------------------------------------------
const from = process.env.EMAIL_FROM || "Yale AI <hello@yale-ai.org>";
const domain = (from.match(/@([^>\s]+)/) || [])[1];
console.log(`from:    ${from}`);
console.log(`domain:  ${domain}`);

const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) {
  console.error("missing RESEND_API_KEY in marketing/.env; skipping the Resend domain checks");
} else {
  const resend = new Resend(apiKey);
  const { data, error } = await resend.domains.list();
  if (error) {
    console.error("resend domains.list failed:", error.message || error);
    process.exit(1);
  }
  const d = (data?.data || []).find((x) => x.name === domain);
  if (!d) {
    console.log(`resend:  ${domain} is NOT added to this Resend account`);
  } else {
    console.log(`resend:  ${domain} status=${d.status} region=${d.region}`);
    const { data: full } = await resend.domains.get(d.id);
    for (const r of full?.records || []) {
      console.log(`  ${String(r.record).padEnd(5)} ${String(r.type).padEnd(4)} ${r.name} -> ${r.status}`);
    }
  }
}

// ---- DNS --------------------------------------------------------------------
async function txt(name) {
  try {
    const recs = await dns.resolveTxt(name);
    return recs.map((r) => r.join(""));
  } catch {
    return [];
  }
}
const spf = (await txt(domain)).filter((t) => t.startsWith("v=spf1"));
console.log(`spf:     ${spf[0] || "(none)"}`);
const dmarc = (await txt(`_dmarc.${domain}`)).filter((t) => t.startsWith("v=DMARC1"));
console.log(`dmarc:   ${dmarc[0] || "(none)  <- add a DMARC record; Google wants one for bulk senders"}`);
