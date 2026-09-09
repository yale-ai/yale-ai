// Generates the QR codes the deck embeds, from links.json, plus assets/links.js
// which the deck reads to print the redeem link on the slide.
// Run: npm install --no-save qrcode && node qr.mjs
// An empty link produces a dashed placeholder so the slide still lays out.
import { readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
const QRCode = createRequire(import.meta.url)("qrcode");
const links = JSON.parse(readFileSync(new URL("./links.json", import.meta.url)));
const placeholder = (label) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="4" y="4" width="92" height="92" rx="8" fill="none" stroke="#a77dfd" stroke-width="3" stroke-dasharray="6 5"/><text x="50" y="47" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" font-size="9" font-weight="700" fill="#a77dfd">${label}</text><text x="50" y="60" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" font-size="6" fill="#a77dfd">paste the link in links.json</text></svg>`;
for (const [name, url] of Object.entries(links)) {
  if (name === "redeemCode") continue;
  const out = new URL(`./assets/qr-${name}.svg`, import.meta.url).pathname;
  if (!url) { writeFileSync(out, placeholder(name.toUpperCase() + " QR")); console.log("placeholder", name); continue; }
  const svg = await QRCode.toString(url, { type: "svg", errorCorrectionLevel: "M", margin: 0, color: { dark: "#000000", light: "#0000" } });
  writeFileSync(out, svg); console.log("qr", name, url.length, "chars");
}
writeFileSync(new URL("./assets/links.js", import.meta.url).pathname, "window.LINKS = " + JSON.stringify(links, null, 2) + ";\n");
