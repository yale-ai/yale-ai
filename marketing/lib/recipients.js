// Recipient parsing, list loading, the unsubscribe file, and the per-campaign
// sent ledger.
//
// List files (recipients/*.txt) hold one recipient per line. A line is either a
// bare address or a display form:
//
//   ada.lovelace@yale.edu
//   Ada Lovelace <ada.lovelace@yale.edu>
//   "Ada Lovelace" <ada.lovelace@yale.edu>
//
// Blank lines and lines starting with # are ignored. When a name is present the
// first token becomes firstName, which the templates use for the greeting.
//
// The sent ledger lives at campaigns/<name>/sent.tsv, one line per successful
// send, tab separated: email, Resend message id, ISO timestamp. Addresses in
// the ledger are skipped on the next run, so a rerun never double-sends and a
// crashed run resumes where it stopped.
import { existsSync, readFileSync, appendFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Non-empty, non-comment lines of a text file. */
function lines(file) {
  if (!existsSync(file)) return [];
  return readFileSync(file, "utf8")
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith("#"));
}

/**
 * Parse one recipient line.
 * @param {string} s
 * @returns {{email:string, firstName:string|undefined, display:string}}
 */
export function parseRecipient(s) {
  const m = s.match(/^\s*(?:"?([^"<]*?)"?\s*)?<([^>]+)>\s*$/);
  if (m) {
    const name = (m[1] || "").trim();
    return {
      email: m[2].trim(),
      firstName: name ? name.split(/\s+/)[0] : undefined,
      display: s.trim(),
    };
  }
  return { email: s.trim(), firstName: undefined, display: s.trim() };
}

/**
 * Load a recipient list file. A bare name resolves against recipients/, so
 * `--list yale-college-2027-2030.txt` and a full path both work.
 */
export function loadList(file) {
  const candidates = [file, join(root, "recipients", file), join(root, file)];
  const found = candidates.find((p) => existsSync(p));
  if (!found) throw new Error(`recipient list not found: ${file}`);
  return lines(found).map(parseRecipient);
}

/** Everyone who asked to stop hearing from us. Honored across every campaign. */
export function loadUnsubscribed() {
  return new Set(lines(join(root, "recipients", "unsubscribed.txt")).map((l) => l.toLowerCase()));
}

/** Addresses already sent for this campaign, from campaigns/<name>/sent.tsv. */
export function loadSent(campaignDir) {
  return new Set(
    lines(join(campaignDir, "sent.tsv"))
      .map((l) => l.split("\t")[0].trim().toLowerCase())
      .filter(Boolean),
  );
}

/** Append one successful send to the campaign ledger. */
export function appendSent(campaignDir, email, messageId) {
  appendFileSync(
    join(campaignDir, "sent.tsv"),
    `${email.toLowerCase()}\t${messageId}\t${new Date().toISOString()}\n`,
  );
}

/** Drop repeats within a single run, keeping the first occurrence. */
export function dedupe(recipients) {
  const seen = new Set();
  return recipients.filter((r) => {
    const k = r.email.toLowerCase();
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}
