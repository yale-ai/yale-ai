// Campaign loader.
//
// A campaign is a directory under campaigns/ holding:
//   email.js    exports CAMPAIGN = { id, tag }, SUBJECT, PREHEADER, ASSETS,
//               and renderEmail(props) -> { subject, html, text }
//   assets/     images referenced by ASSETS
//   sent.tsv    the per-campaign send ledger
//   README.md   what this campaign is and when it goes out
//
// Every script takes --campaign <name>, so adding a campaign means adding a
// folder. Nothing else in marketing/ needs to change.
import { existsSync, readdirSync, statSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
export const CAMPAIGNS_DIR = join(root, "campaigns");

/** Campaign folder names that look loadable. */
export function listCampaigns() {
  if (!existsSync(CAMPAIGNS_DIR)) return [];
  return readdirSync(CAMPAIGNS_DIR)
    .filter((n) => !n.startsWith("."))
    .filter((n) => statSync(join(CAMPAIGNS_DIR, n)).isDirectory())
    .filter((n) => existsSync(join(CAMPAIGNS_DIR, n, "email.js")))
    .sort();
}

/**
 * Load campaigns/<name>/email.js.
 * @param {string} name
 * @returns {Promise<{id:string, tag:string, subject:string, preheader:string,
 *   render:Function, assets:Array, dir:string, assetsDir:string, module:object}>}
 */
export async function loadCampaign(name) {
  if (!name) {
    throw new Error(`--campaign is required. Available: ${listCampaigns().join(", ") || "(none)"}`);
  }
  const dir = join(CAMPAIGNS_DIR, name);
  const entry = join(dir, "email.js");
  if (!existsSync(entry)) {
    throw new Error(
      `no campaign "${name}" (looked for ${entry}). Available: ${listCampaigns().join(", ") || "(none)"}`,
    );
  }
  const mod = await import(pathToFileURL(entry).href);
  const meta = mod.CAMPAIGN || {};
  const render = mod.renderEmail;
  if (typeof render !== "function") {
    throw new Error(`campaigns/${name}/email.js must export renderEmail()`);
  }
  return {
    id: meta.id || name,
    tag: meta.tag || meta.id || name,
    subject: mod.SUBJECT || "",
    preheader: mod.PREHEADER || "",
    render,
    assets: mod.ASSETS || [],
    dir,
    assetsDir: join(dir, "assets"),
    module: mod,
  };
}
