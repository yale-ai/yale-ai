// Render a campaign to out/<campaign>.html and out/<campaign>.txt for a
// browser preview. Images are embedded as data URIs so the file is
// self-contained; real sends use hosted https URLs or CID attachments.
//
//   node scripts/preview.js --campaign kickoff-2026-27
//
// A second file, out/<campaign>-personalised.html, renders the same email with
// a first name so the greeting can be eyeballed both ways.
import "dotenv/config";
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadCampaign, listCampaigns } from "../lib/campaign.js";
import { loadAssets, dataUriProps } from "../lib/assets.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

// ---- args -------------------------------------------------------------------
const args = process.argv.slice(2);
let campaignName = null;
let sampleName = "Filippo";
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--campaign") campaignName = args[++i];
  else if (args[i] === "--name") sampleName = args[++i];
  else {
    console.error(`unknown arg: ${args[i]}`);
    process.exit(2);
  }
}
if (!campaignName) {
  console.error(`usage: node scripts/preview.js --campaign <name> [--name <first name>]`);
  console.error(`campaigns: ${listCampaigns().join(", ") || "(none)"}`);
  process.exit(2);
}

// ---- render -----------------------------------------------------------------
let campaign;
try {
  campaign = await loadCampaign(campaignName);
} catch (e) {
  console.error(e.message);
  process.exit(2);
}
const assets = loadAssets(campaign.assets, campaign.assetsDir);
const props = dataUriProps(assets);

const { subject, html, text } = campaign.render({ ...props });
const personalised = campaign.render({ ...props, firstName: sampleName });

const outDir = join(root, "out");
mkdirSync(outDir, { recursive: true });
const htmlPath = join(outDir, `${campaign.id}.html`);
const txtPath = join(outDir, `${campaign.id}.txt`);
const personalisedPath = join(outDir, `${campaign.id}-personalised.html`);
writeFileSync(htmlPath, html);
writeFileSync(txtPath, text);
writeFileSync(personalisedPath, personalised.html);

const kb = (s) => `${(s.length / 1024).toFixed(1)} KB`;
console.log(`campaign: ${campaign.id}  (tag ${campaign.tag})`);
console.log(`subject:  ${subject}`);
console.log(`assets:   ${assets.map((a) => a.file).join(", ") || "(none found)"}`);
console.log(`wrote out/${campaign.id}.html (${kb(html)})`);
console.log(`wrote out/${campaign.id}.txt (${kb(text)})`);
console.log(`wrote out/${campaign.id}-personalised.html (${kb(personalised.html)}, greeting for "${sampleName}")`);
