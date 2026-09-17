// Image assets for a campaign email.
//
// Every campaign owns an `assets/` directory next to its email.js and declares
// an ASSETS list describing what lives there. Each entry is optional: if the
// file is missing from disk the campaign template simply gets an empty prop and
// omits that element (or falls back to text, as the Yale AI wordmark does).
//
// An entry looks like:
//   { key: "posterSrc", cid: "poster", file: "poster.jpg", type: "image/jpeg" }
//
//   key   the prop name handed to renderEmail()
//   cid   the Content-ID used when images are attached inline
//   file  the filename inside the campaign's assets/ directory
//   type  the MIME type, used for data URIs and attachments
//
// Three ways to reference the same files, depending on where the HTML is going:
//   dataUriProps  browser preview (self-contained file, no network)
//   hostedProps   real sends (plain https URLs, no attachments, no paperclip)
//   cidProps      real sends with --inline-images (CID attachments)
//
// A campaign can also declare FILES: plain attachments (a flyer PDF, say) that
// go out with every send, whatever the image mode. An entry looks like:
//   { file: "flyer.pdf", filename: "Perplexity x YaleAI Recruiting Flyer.pdf", type: "application/pdf" }
//
//   file      the filename inside the campaign's assets/ directory
//   filename  what the recipient sees
//   type      the MIME type
//
// Unlike images, a missing FILES entry is an error: if the campaign says the
// flyer is attached, it is attached.
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Assets that actually exist on disk, with their bytes read in.
 * @param {Array<{key:string,cid:string,file:string,type:string}>} list  the campaign's ASSETS
 * @param {string} dir  absolute path to the campaign's assets/ directory
 */
export function loadAssets(list, dir) {
  return list
    .filter((a) => existsSync(join(dir, a.file)))
    .map((a) => ({ ...a, content: readFileSync(join(dir, a.file)) }));
}

/** Template props using CID references (inline attachments). */
export function cidProps(assets) {
  return Object.fromEntries(assets.map((a) => [a.key, `cid:${a.cid}`]));
}

/** Template props using data URIs (self-contained browser preview). */
export function dataUriProps(assets) {
  return Object.fromEntries(
    assets.map((a) => [a.key, `data:${a.type};base64,${a.content.toString("base64")}`]),
  );
}

/**
 * Public base URL where the same files are hosted. Set ASSET_BASE_URL in .env
 * once the assets are deployed somewhere (a static Vercel project works).
 */
export const HOSTED_BASE = process.env.ASSET_BASE_URL || "https://yale-ai-email-assets.vercel.app";

/**
 * Template props using hosted https URLs. Preferred for sending: nothing is
 * attached, so Gmail does not show a paperclip and the message stays small.
 * Files are namespaced per campaign so two campaigns can both ship a poster.jpg.
 */
export function hostedProps(assets, campaignId) {
  const base = campaignId ? `${HOSTED_BASE}/${campaignId}` : HOSTED_BASE;
  return Object.fromEntries(assets.map((a) => [a.key, `${base}/${a.file}`]));
}

/**
 * Campaign FILES with their bytes read in. Throws if any file is missing.
 * @param {Array<{file:string,filename?:string,type?:string}>} list  the campaign's FILES
 * @param {string} dir  absolute path to the campaign's assets/ directory
 */
export function loadFiles(list, dir) {
  return list.map((f) => {
    const path = join(dir, f.file);
    if (!existsSync(path)) throw new Error(`campaign file not found: ${path}`);
    return { ...f, filename: f.filename || f.file, content: readFileSync(path) };
  });
}

/** Resend attachment entries for plain file attachments (base64 content). */
export function fileAttachments(files) {
  return files.map((f) => ({
    filename: f.filename,
    content: f.content.toString("base64"),
    contentType: f.type,
  }));
}

/** Resend attachment entries for the inline (CID) image mode. */
export function attachments(assets) {
  return assets.map((a) => ({
    filename: a.file,
    content: a.content,
    contentType: a.type,
    contentId: a.cid,
  }));
}
