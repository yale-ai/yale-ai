// Yale AI Association: 2026-27 kickoff email, version 2.
//
// Same audience and the same facts as kickoff-2026-27, in a new look: the
// structure and techniques of the Yale rover kickoff email (a black stage over
// engineering paper, a badge pill, a serif headline with one accent word,
// three short italic lines, one big glass event card with a shiny pill CTA,
// a polaroid strip, a backers strip), rebuilt in Yale AI's own colors, fonts,
// wordmark, and voice. Table-based and inline-styled (max width 640) so it
// survives Gmail, Apple Mail, and Outlook. Every image is hosted; nothing is
// attached.

export const BLACK = "#000000";
export const WHITE = "#ffffff";
export const LIME = "#d9e4a8";
export const LIME_DEEP = "#c4d485";
export const TEAL = "#4fd8c8";
export const BLUE = "#6ea8ff";

// The tag is what Resend analytics splits on, so v2 shares the original
// campaign's tag: same event, same audience, one bucket. Dedupe is unaffected
// (the ledger is per folder, and the idempotency key uses the id).
export const CAMPAIGN = { id: "kickoff-2026-27-v2", tag: "kickoff-2026-27" };

export const SUBJECT = "YaleAI Kickoff (sponsored by SpaceXAI): You don't want to miss this!";
export const PREHEADER =
  "Wednesday at Tsai CITY. A month of Cursor Pro+ for everyone, an exclusive Grok Bot demo, a competition for SpaceXAI credits, free boba.";

export const DEFAULT_LUMA_URL = "https://luma.com/o5g51mh0";
export const DEFAULT_SITE_URL = "https://yale-ai.org";
export const CONTACT_EMAIL = "filippo.fonseca@yale.edu";

export const EVENTS = {
  kickoff: {
    title: "Yale AI Association: Kickoff 2026-27",
    dayLine: "Wednesday, September 9",
    timeLine: "8:00 to 9:30 PM",
    where: "Tsai CITY, ground floor",
    startUtc: "20260910T000000Z",
    endUtc: "20260910T013000Z",
    location: "Tsai CITY, ground floor, New Haven, CT",
  },
};

// Files expected in campaigns/kickoff-2026-27-v2/assets/. Missing files are
// simply omitted by the template.
//
// mark.png is the graph-Y mark on its own black ground (mark-white.png sits on
// a white tile, which would punch a hole in the black stage). spacexai.png and
// mit-ibm-lab-2.png are the white-on-transparent marks; the "-black" and
// "-dark" variants are for the light email. mit-ibm-2-43.jpg is a 4:3 centre
// crop of mit-ibm-2-sq.jpg so the three polaroids share one height. grid.png
// is a 100px engineering-paper tile (20px minor lines, a lime major line) that
// sits behind the hero; clients that drop background images fall back to black.
export const ASSETS = [
  { key: "markSrc", cid: "mark", file: "mark.png", type: "image/png" },
  { key: "gridSrc", cid: "grid", file: "grid.png", type: "image/png" },
  { key: "sponsorLogoSrc", cid: "spacexai", file: "spacexai.png", type: "image/png" },
  { key: "photo1Src", cid: "photo1", file: "mit-ibm-1.jpg", type: "image/jpeg" },
  { key: "photo2Src", cid: "photo2", file: "mit-ibm-2-43.jpg", type: "image/jpeg" },
  { key: "photo3Src", cid: "photo3", file: "mit-ibm-3.jpg", type: "image/jpeg" },
  { key: "labLogoSrc", cid: "lablogo", file: "mit-ibm-lab-2.png", type: "image/png" },
  { key: "mitLogoSrc", cid: "mit", file: "mit.png", type: "image/png" },
  { key: "quoteAvatarSrc", cid: "rauch", file: "rauch.png", type: "image/png" },
];

// Compact pill row, straight off the poster. Kept for parity with v1.
export const PILLS = [
  "project teams",
  "Yale AI Fellowship",
  "research showcase",
  "biweekly workshops",
  "fireside chat",
  "spring company trip",
  "frontier AI companies",
  "AI &times; medicine",
  "AI &times; finance",
];

// The longer version of the same list, in the same order.
export const PROGRAM = [
  "Project teams that actually ship. Every team demos at our fall demo day.",
  "The Yale AI Fellowship: a structured, application-based program.",
  "Our research showcase. Last year it was 10 labs and 100 attendees.",
  "Biweekly hands-on workshops: coding agents, AI-native workflows, mini hackathons.",
  "A fireside chat with a climate-AI founder in November.",
  "A company trip in the spring.",
  "Connections to frontier AI companies.",
  "AI &times; medicine and AI &times; finance verticals.",
];

// The year, in order, as on the site.
export const THIS_YEAR = [
  ["Wed, Sep 9", "Kickoff, sponsored by SpaceXAI", "The night the year starts. Perks, a demo, and the plan for everything below."],
  ["Opens at the kickoff", "Yale AI Fellowship", "A structured cohort with a curriculum. Finish it with something real to show."],
  ["Fall", "Project teams and demo day", "Small teams, real builds, and a demo day to close the term."],
  ["Every other week", "Hands-on workshops", "Agents, AI-native workflows, mini hackathons."],
  ["Fall", "Fireside chats", "Founders and researchers in conversation, in partnership with Tsai CITY."],
  ["Fall", "Research showcase", "Yale labs and grad students presenting their work to undergrads."],
  ["Spring", "Trips", "Top companies and AI labs in New York City and Boston. All paid for."],
  ["May", "Yale AI Symposium", "Project teams on stage in front of the whole community."],
];

// The polaroid strip: the MIT-IBM Watson AI Lab trip, spring 2026.
export const PHOTOS = [
  { key: "photo1Src", caption: "MIT-IBM Watson AI Lab", alt: "A talk in the MIT-IBM Watson AI Lab auditorium" },
  { key: "photo2Src", caption: "Boston, spring 2026", alt: "Yale AI members outside the MIT-IBM Watson AI Lab" },
  { key: "photo3Src", caption: "The panel", alt: "A panel on stage at the MIT-IBM Watson AI Lab" },
];

export function gcalLink(ev, lumaUrl) {
  const p = new URLSearchParams({
    action: "TEMPLATE",
    text: ev.title,
    dates: `${ev.startUtc}/${ev.endUtc}`,
    location: ev.location,
    details:
      `Yale AI Association kickoff. Sponsored by SpaceXAI. Everyone who attends gets 1 month of Cursor Pro+ free, ` +
      `there is a competition for SpaceXAI credits, an exclusive Grok Bot demo, and free boba and snacks. All majors, all class years.\n\n` +
      `Capacity is limited, so RSVP for the kickoff: ${lumaUrl}\n\nyale-ai.org`,
  });
  return `https://calendar.google.com/calendar/render?${p.toString()}`;
}

const SERIF = "'Instrument Serif', Georgia, 'Times New Roman', Times, serif";
const SANS = "'Instrument Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif";

// Glass card: a dark rounded table with a hairline and a soft top light.
const CARD =
  "border-radius:20px;background:#121212;background-image:linear-gradient(180deg,rgba(255,255,255,0.09) 0%,rgba(255,255,255,0.03) 45%,rgba(255,255,255,0.02) 100%);border:1px solid rgba(255,255,255,0.12);";

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/**
 * Render the kickoff email, v2.
 * @param {object} o
 * @param {string} [o.firstName]       greeting name; omitted gives "Hey there,"
 * @param {string} [o.lumaUrl]         Luma RSVP link (the primary CTA)
 * @param {string} [o.siteUrl]         yale-ai.org
 * @param {string} [o.markSrc]         the graph-Y mark on black; empty falls back to text
 * @param {string} [o.gridSrc]         the engineering-paper tile behind the hero; empty gives plain black
 * @param {string} [o.sponsorLogoSrc]  the SpaceXAI wordmark, white; empty falls back to text
 * @param {string} [o.photo1Src]       MIT-IBM Watson AI Lab, the talk
 * @param {string} [o.photo2Src]       MIT-IBM Watson AI Lab, the group (4:3 crop)
 * @param {string} [o.photo3Src]       MIT-IBM Watson AI Lab, the panel
 * @param {string} [o.labLogoSrc]      the MIT-IBM Watson AI Lab lockup, white on transparent
 * @param {string} [o.mitLogoSrc]      the MIT logo, transparent
 * @param {string} [o.quoteAvatarSrc]  Guillermo Rauch's avatar; empty shows initials
 * @returns {{subject:string, html:string, text:string}}
 */
export function renderEmail({
  firstName,
  lumaUrl = DEFAULT_LUMA_URL,
  siteUrl = DEFAULT_SITE_URL,
  markSrc = "",
  gridSrc = "",
  sponsorLogoSrc = "",
  photo1Src = "",
  photo2Src = "",
  photo3Src = "",
  labLogoSrc = "",
  mitLogoSrc = "",
  quoteAvatarSrc = "",
} = {}) {
  const k = EVENTS.kickoff;
  const gcal = gcalLink(k, lumaUrl);
  const greeting = firstName ? `Hey ${esc(firstName)},` : "Hey there,";
  const unsubMailto = `mailto:${CONTACT_EMAIL}?subject=unsubscribe&body=${encodeURIComponent("Please take me off the Yale AI list.")}`;
  const photos = { photo1Src, photo2Src, photo3Src };
  const shots = PHOTOS.filter((p) => photos[p.key]);

  // Type styles. Instrument Serif ships one weight, so emphasis is italic and color, not bold.
  const italic = `font-family:${SERIF};font-style:italic;font-weight:400;font-size:20px;line-height:28px;color:${WHITE};`;
  const kicker = `font-family:${SANS};font-weight:700;font-size:11px;letter-spacing:3.5px;text-transform:uppercase;color:${LIME};line-height:16px;`;
  const capsLabel = `font-family:${SANS};font-weight:700;font-size:9px;letter-spacing:2.5px;text-transform:uppercase;line-height:14px;`;
  const bodySans = `font-family:${SANS};font-weight:400;font-size:15px;line-height:23px;color:#c9c9c9;`;

  // Sponsor wordmark, white, at three sizes.
  const sponsorMark = (w) =>
    sponsorLogoSrc
      ? `<img src="${sponsorLogoSrc}" width="${w}" height="${Math.round((w * 80) / 600)}" alt="SpaceXAI" style="width:${w}px;height:${Math.round((w * 80) / 600)}px;display:inline-block;vertical-align:middle;border:0;">`
      : `<span style="font-family:${SANS};font-weight:700;letter-spacing:0.2em;color:${WHITE};">SPACEXAI</span>`;

  // Shiny lime pill CTA: the site's .cta, with an Outlook fallback.
  const pill = (href, label, { small = false } = {}) => `
    <!--[if mso]>
    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${href}" style="height:${small ? 34 : 54}px;v-text-anchor:middle;width:${small ? 176 : 250}px;" arcsize="50%" stroke="f" fillcolor="${LIME}">
      <w:anchorlock/>
      <center style="color:${BLACK};font-family:Arial,sans-serif;font-size:${small ? 11 : 14}px;font-weight:bold;letter-spacing:2px;">${label.toUpperCase()}</center>
    </v:roundrect>
    <![endif]-->
    <!--[if !mso]><!-->
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center"><tr>
      <td align="center" bgcolor="${LIME}" style="border-radius:999px;background:${LIME};background-image:linear-gradient(180deg,#eef4d2 0%,${LIME} 55%,${LIME_DEEP} 100%);border:1px solid rgba(255,255,255,0.55);box-shadow:0 14px 34px -12px rgba(217,228,168,0.75),inset 0 1px 0 rgba(255,255,255,0.6);">
        <a href="${href}" target="_blank" class="btn" style="display:block;padding:${small ? "9px 16px" : "18px 32px"};font-family:${SANS};font-size:${small ? 11 : 14}px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${BLACK} !important;text-decoration:none;white-space:nowrap;border-radius:999px;">${label}${small ? "" : " &#8594;"}</a>
      </td>
    </tr></table>
    <!--<![endif]-->`;

  // Quiet outline pill, same height as the primary.
  const ghost = (href, label) => `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center"><tr>
      <td align="center" bgcolor="#1a1a1a" style="border-radius:999px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.18);">
        <a href="${href}" target="_blank" style="display:block;padding:17px 24px;font-family:${SANS};font-size:14px;font-weight:600;color:${WHITE};text-decoration:none;white-space:nowrap;border-radius:999px;">${label}</a>
      </td>
    </tr></table>`;

  // Yale AI lockup: the mark beside the wordmark.
  const wordmark = `<a href="${siteUrl}" target="_blank" style="text-decoration:none;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
      ${markSrc ? `<td valign="middle" style="padding:0 9px 0 0;"><img src="${markSrc}" width="36" height="36" alt="" style="width:36px;height:36px;display:block;border:0;border-radius:9px;"></td>` : ""}
      <td valign="middle">
        <div class="fg" style="font-family:${SANS};font-weight:700;font-size:20px;line-height:21px;letter-spacing:-0.5px;color:${WHITE};">Yale AI</div>
        <div style="font-family:${SANS};font-weight:600;font-size:8px;line-height:12px;letter-spacing:0.14em;text-transform:uppercase;color:#8a8a8a;">An Undergraduate Organization</div>
      </td>
    </tr></table></a>`;

  // The year in one glance: a caps date label on the left, the title and one line on the right.
  const yearRow = ([when, title, line], i) => {
    const last = i === THIS_YEAR.length - 1;
    const border = last ? "0" : "1px solid rgba(255,255,255,0.09)";
    return `
      <tr>
        <td class="ylab" valign="top" width="128" style="width:128px;padding:${last ? "13px 14px 0 0" : "13px 14px 13px 0"};border-bottom:${border};">
          <div class="lm" style="${capsLabel}color:${LIME};padding-top:4px;">${when}</div>
        </td>
        <td valign="top" style="padding:${last ? "13px 0 0" : "13px 0"};border-bottom:${border};">
          <div class="fg" style="font-family:${SANS};font-weight:700;font-size:15px;line-height:21px;color:${WHITE};">${title}</div>
          <div style="${bodySans}font-size:14px;line-height:21px;color:#a9a9a9;padding-top:2px;">${line}</div>
        </td>
      </tr>`;
  };

  // Three polaroids, 180px wide each on desktop, stacked on phones.
  const photoCell = (p) => `
        <td class="snap" align="center" valign="top" width="190" style="width:190px;padding:0 5px;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="180" bgcolor="#f4f4ef" style="width:180px;background:#f4f4ef;border-radius:3px;">
            <tr><td style="padding:7px 7px 0;line-height:0;font-size:0;"><img src="${photos[p.key]}" width="166" height="125" alt="${p.alt}" style="width:166px;height:125px;display:block;border-radius:1px;"></td></tr>
            <tr><td align="left" style="padding:9px 8px 9px;"><div style="${capsLabel}color:#2a2a2a;white-space:nowrap;overflow:hidden;">${p.caption}</div></td></tr>
          </table>
        </td>`;

  // Backers strip: SpaceXAI powers the kickoff; the MIT-IBM Watson AI Lab and MIT hosted us last spring.
  const backerCells = [
    sponsorLogoSrc ? `<td class="bk" align="center" valign="middle" style="padding:8px 14px;"><img src="${sponsorLogoSrc}" width="150" height="20" alt="SpaceXAI" style="width:150px;height:20px;display:block;opacity:0.85;border:0;"></td>` : "",
    labLogoSrc ? `<td class="bk" align="center" valign="middle" style="padding:8px 14px;"><img src="${labLogoSrc}" width="95" height="48" alt="MIT-IBM Watson AI Lab" style="width:95px;height:48px;display:block;opacity:0.85;border:0;"></td>` : "",
    mitLogoSrc ? `<td class="bk" align="center" valign="middle" style="padding:8px 14px;"><img src="${mitLogoSrc}" width="57" height="30" alt="MIT" style="width:57px;height:30px;display:block;opacity:0.85;border:0;"></td>` : "",
  ].filter(Boolean);

  const heroBg = gridSrc
    ? `background:${BLACK} url('${gridSrc}') repeat center top;background-image:url('${gridSrc}');`
    : `background:${BLACK};`;

  const html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="x-apple-disable-message-reformatting">
<meta name="color-scheme" content="dark">
<meta name="supported-color-schemes" content="dark">
<title>${SUBJECT}</title>
<!--[if mso]>
<xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml>
<style>table,td{font-family:Georgia,'Times New Roman',serif;}</style>
<![endif]-->
<style>
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Instrument+Sans:wght@400;500;600;700&display=swap');
  :root { color-scheme: dark; supported-color-schemes: dark; }
  html, body { margin:0 !important; padding:0 !important; background:${BLACK} !important; }
  body { -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; }
  table { border-collapse:separate !important; mso-table-lspace:0; mso-table-rspace:0; }
  img { border:0; line-height:100%; outline:none; text-decoration:none; -ms-interpolation-mode:bicubic; }
  a { color:${LIME}; }
  a.btn, a.btn:visited, a.btn:hover { color:${BLACK} !important; }
  @media (prefers-color-scheme: dark) {
    .bg { background-color:${BLACK} !important; }
    .fg { color:${WHITE} !important; }
    .lm { color:${LIME} !important; }
    .tl { color:${TEAL} !important; }
  }
  [data-ogsc] .bg { background-color:${BLACK} !important; }
  [data-ogsc] .fg { color:${WHITE} !important; }
  [data-ogsc] .lm { color:${LIME} !important; }
  [data-ogsc] .tl { color:${TEAL} !important; }
  [data-ogsc] a.btn, [data-ogsb] a.btn { color:${BLACK} !important; background:${LIME} !important; }
  @media only screen and (max-width:660px) {
    .wrap { width:100% !important; }
    .pad { padding-left:18px !important; padding-right:18px !important; }
    .cardpad { padding-left:20px !important; padding-right:20px !important; }
    .hero { font-size:40px !important; line-height:42px !important; }
    .sub { font-size:18px !important; line-height:25px !important; }
    .t1 { font-size:26px !important; line-height:32px !important; }
    .date { font-size:26px !important; line-height:31px !important; }
    .stack { display:block !important; width:100% !important; padding:0 0 10px 0 !important; }
    .badge { font-size:9px !important; letter-spacing:2px !important; white-space:normal !important; line-height:15px !important; }
    .snap { display:block !important; width:100% !important; padding:0 0 12px 0 !important; }
    .ylab { width:96px !important; padding-right:10px !important; }
    .topbtn { display:none !important; }
    .bk { padding:8px 6px !important; }
  }
</style>
</head>
<body class="bg" style="margin:0;padding:0;background:${BLACK};" bgcolor="${BLACK}">
<div style="display:none;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;color:${BLACK};">${PREHEADER}${"&#847;&zwnj;&nbsp;".repeat(40)}</div>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="bg" style="background:${BLACK};" bgcolor="${BLACK}">
<tr><td align="center" style="padding:0;">
<!--[if mso]><table role="presentation" width="640" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td><![endif]-->
<table role="presentation" width="640" cellpadding="0" cellspacing="0" border="0" align="center" class="wrap" style="width:640px;max-width:640px;background:${BLACK};" bgcolor="${BLACK}">

  <!-- hero on engineering paper: top bar, badge, headline, italic lines -->
  <tr><td class="bg" bgcolor="${BLACK}" style="${heroBg}padding:0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">

      <!-- top bar: lockup left, kickoff pill right -->
      <tr><td style="padding:28px 32px 0;" class="pad">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
          <td align="left" valign="middle">${wordmark}</td>
          <td align="right" valign="middle" class="topbtn">${pill(lumaUrl, "Kickoff &middot; Wednesday", { small: true })}</td>
        </tr></table>
      </td></tr>

      <!-- badge -->
      <tr><td align="center" style="padding:36px 32px 0;" class="pad">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center"><tr>
          <td bgcolor="#1c2011" align="center" style="border-radius:999px;background:#1c2011;background-image:linear-gradient(180deg,rgba(217,228,168,0.34) 0%,rgba(217,228,168,0.16) 55%,rgba(217,228,168,0.1) 100%);border:1px solid rgba(217,228,168,0.55);padding:8px 18px 7px 20px;">
            <div class="badge fg" style="font-family:${SANS};font-weight:700;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:${WHITE};line-height:14px;white-space:nowrap;">Yale Artificial Intelligence Association <span class="lm" style="color:${LIME};">&middot;</span> Kickoff 2026-27</div>
          </td>
        </tr></table>
      </td></tr>

      <!-- headline -->
      <tr><td align="center" style="padding:22px 32px 0;" class="pad">
        <div class="hero fg" style="font-family:${SERIF};font-weight:400;font-size:56px;line-height:58px;letter-spacing:-1px;color:${WHITE};">Want to build with AI <span class="tl" style="font-style:italic;color:${TEAL};">at Yale?</span></div>
      </td></tr>
      <tr><td align="center" style="padding:14px 32px 0;" class="pad">
        <div class="sub fg" style="${italic}font-size:22px;line-height:30px;">It&#8217;s simple. We&#8217;re the hub for AI at Yale, and we want you in.</div>
        <div class="sub" style="${italic}color:#cfcfcf;padding-top:2px;">Built by Yalies who ship. No AI experience required.</div>
        <div class="sub lm" style="${italic}color:${LIME};padding-top:2px;">All majors. All years. Builders, researchers, and the curious.</div>
        <div style="${italic}font-size:17px;line-height:24px;color:#9d9d9d;padding-top:12px;max-width:500px;margin:0 auto;">The people behind Cursor, Grok Bot, etc. are sponsoring our kickoff. <span class="fg" style="color:${WHITE};font-style:normal;font-weight:600;">And they want you there. Yes. You.</span></div>
      </td></tr>

      <tr><td style="padding:0 0 10px;font-size:0;line-height:0;">&nbsp;</td></tr>
    </table>
  </td></tr>

  <!-- greeting -->
  <tr><td style="padding:22px 32px 0;" class="pad">
    <div class="fg" style="${italic}font-size:19px;line-height:27px;">${greeting} here is the one thing to do this week:</div>
  </td></tr>

  <!-- kickoff card -->
  <tr><td style="padding:14px 32px 0;" class="pad">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#121212" style="${CARD}">
      <tr><td class="cardpad" align="center" style="padding:30px 32px 30px;">
        <div class="lm" style="${kicker}">Kickoff, sponsored by</div>
        <div style="padding-top:8px;line-height:0;">${sponsorMark(150)}</div>
        <div class="date fg" style="font-family:${SANS};font-weight:700;font-size:33px;line-height:39px;letter-spacing:-0.6px;color:${WHITE};padding-top:18px;">${k.dayLine}</div>
        <div class="date lm" style="font-family:${SANS};font-weight:700;font-size:33px;line-height:39px;letter-spacing:-0.6px;color:${LIME};">${k.timeLine}</div>
        <div class="fg" style="${italic}padding-top:6px;">${k.where}</div>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin-top:24px;"><tr>
          <td class="stack" style="padding:0 12px 0 0;">${pill(lumaUrl, "RSVP on Luma")}</td>
          <td class="stack">${ghost(gcal, "Add to calendar")}</td>
        </tr></table>
        <div class="fg" style="${italic}font-size:19px;line-height:27px;padding-top:22px;">
          <span class="lm" style="color:${LIME};font-style:normal;font-weight:600;">One month of Cursor Pro+</span> for everyone who attends. Cursor and Grok credits to win. Food. All majors, all class years. Capacity is limited, so RSVP.
        </div>
      </td></tr>
    </table>
  </td></tr>

  <!-- the year in one glance -->
  <tr><td style="padding:40px 32px 0;" class="pad">
    <div class="lm" style="${kicker}">The year in one glance</div>
    <div class="t1 fg" style="font-family:${SERIF};font-weight:400;font-size:32px;line-height:38px;color:${WHITE};padding-top:10px;">We&#8217;re a club with <span style="font-style:italic;color:${BLUE};">real outputs</span>, not just a mailing list.</div>
    <div style="${italic}font-size:17px;line-height:24px;color:#9d9d9d;padding-top:8px;">Everything below has a date, an owner on the board, and a way in. Fellowship and project-team applications open at the kickoff.</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:8px;">
${THIS_YEAR.map(yearRow).join("")}
    </table>
  </td></tr>

  ${shots.length ? `
  <!-- trip snaps -->
  <tr><td style="padding:40px 32px 0;" class="pad">
    <div class="lm" style="${kicker}">Trips</div>
    <div class="t1 fg" style="font-family:${SERIF};font-weight:400;font-size:32px;line-height:38px;color:${WHITE};padding-top:10px;">We get you in the rooms that matter. <span class="lm" style="font-style:italic;color:${LIME};">All paid for.</span></div>
  </td></tr>
  <tr><td align="center" style="padding:22px 32px 0;" class="pad">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center"><tr>
${shots.map(photoCell).join("\n")}
    </tr></table>
  </td></tr>
  <tr><td align="center" style="padding:16px 40px 0;" class="pad">
    <div style="${italic}font-size:18px;line-height:26px;color:#c9c9c9;">
      Last spring a bunch of us went to the <span class="fg" style="color:${WHITE};">MIT-IBM Watson AI Lab</span> in Boston, all expenses paid. This year: top companies and AI labs in <span class="fg" style="color:${WHITE};font-style:normal;font-weight:600;">New York City and Boston.</span> Travel, food, the lot. <span class="lm" style="color:${LIME};font-style:normal;font-weight:600;">All paid for.</span>
    </div>
  </td></tr>` : ""}

  <!-- the time is now -->
  <tr><td style="padding:40px 32px 0;" class="pad">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#121212" style="${CARD}">
      <tr><td class="cardpad" style="padding:28px 32px 30px;">
        <div class="lm" style="${kicker}">The time is now</div>
        <div style="${italic}font-size:17px;line-height:24px;color:#9d9d9d;padding-top:10px;">We&#8217;ll leave you with this, for a certain sense of urgency (and hopefully excitement). It really is the best time to be alive and build amazing tech.</div>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:18px;"><tr>
          <td valign="middle" width="44" style="width:44px;padding:0 12px 0 0;">${quoteAvatarSrc ? `<img src="${quoteAvatarSrc}" width="44" height="44" alt="" style="width:44px;height:44px;border-radius:50%;display:block;border:0;">` : `<div style="width:44px;height:44px;border-radius:50%;background:rgba(255,255,255,0.14);font-family:${SANS};font-size:15px;line-height:44px;text-align:center;font-weight:700;color:${WHITE};">GR</div>`}</td>
          <td valign="middle">
            <div class="fg" style="font-family:${SANS};font-size:15px;line-height:20px;font-weight:700;color:${WHITE};">Guillermo Rauch <span style="display:inline-block;background:#0a66c2;color:#ffffff;border-radius:3px;font-size:10px;line-height:14px;padding:0 4px;font-weight:700;vertical-align:1px;margin-left:4px;">in</span></div>
            <div style="font-family:${SANS};font-size:13px;line-height:18px;color:#8a8a8a;">CEO at Vercel</div>
          </td>
        </tr></table>
        <div class="fg" style="${italic}font-size:19px;line-height:28px;padding-top:14px;">&#8220;Anyone that works in AI is working the hardest they&#8217;ve ever worked in their lives. On the surface it&#8217;s somewhat ironic (AI should give us back time!), but the reality is that it&#8217;s the most fun, fascinating and empowering epoch in human history. <span style="font-style:normal;font-weight:600;color:${WHITE};">The intelligence revolution.</span>&#8221;</div>
      </td></tr>
    </table>
  </td></tr>

  <!-- second CTA -->
  <tr><td align="center" style="padding:36px 32px 0;" class="pad">
    <div class="t1 fg" style="font-family:${SERIF};font-weight:400;font-size:36px;line-height:40px;color:${WHITE};padding-bottom:18px;">Let&#8217;s do this.</div>
    ${pill(lumaUrl, "RSVP on Luma")}
    <div style="${italic}font-size:17px;line-height:24px;padding-top:14px;color:#bdbdbd;">Wednesday, 8 PM, Tsai CITY. Bring a friend who thinks AI is not for them. See you there.</div>
  </td></tr>

  <!-- backers -->
  ${backerCells.length ? `
  <tr><td align="center" style="padding:42px 32px 0;" class="pad">
    <div style="${italic}font-size:18px;line-height:24px;color:#bdbdbd;">we have some amazing backers :)</div>
  </td></tr>
  <tr><td align="center" style="padding:10px 16px 0;" class="pad">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center"><tr>
${backerCells.join("\n")}
    </tr></table>
    <div style="font-family:${SANS};font-size:11px;line-height:17px;color:#6f6f6f;padding-top:6px;">Our kickoff is powered by SpaceXAI. The MIT-IBM Watson AI Lab and MIT hosted us last spring.</div>
  </td></tr>` : ""}

  <!-- footer -->
  <tr><td align="center" style="padding:40px 32px 44px;" class="pad">
    <div class="fg" style="font-family:${SANS};font-weight:700;font-size:14px;line-height:22px;color:${WHITE};">Questions? Just reply to this email. :)</div>
    <div style="font-family:${SANS};font-size:12px;line-height:19px;color:#8a8a8a;padding-top:6px;">It goes to the Yale AI leadership (fellow Yale students).</div>
    <div style="font-family:${SANS};font-weight:600;font-size:11px;line-height:18px;letter-spacing:0.3px;color:#6f6f6f;padding-top:16px;">
      &copy; 2026 Yale Artificial Intelligence Association &nbsp;&middot;&nbsp; <a href="${siteUrl}" target="_blank" style="color:${LIME};text-decoration:none;">yale-ai.org</a> &nbsp;&middot;&nbsp; <a href="mailto:${CONTACT_EMAIL}" style="color:#9a9a9a;text-decoration:none;">${CONTACT_EMAIL}</a><br>
      <span style="font-weight:400;">We&#8217;re an official Registered Student Organization (RSO) affiliated with Yale University run by undergrads. To stop, reply &#8220;unsubscribe&#8221; or <a href="${unsubMailto}" style="color:#9a9a9a;text-decoration:underline;">click here to unsubscribe</a>.</span>
    </div>
  </td></tr>

</table>
<!--[if mso]></td></tr></table><![endif]-->
</td></tr>
</table>
</body>
</html>`;

  const text = `Yale AI (${siteUrl})
YALE ARTIFICIAL INTELLIGENCE ASSOCIATION · KICKOFF 2026-27

WANT TO BUILD WITH AI AT YALE?
It's simple. We're the hub for AI at Yale, and we want you in.
Built by Yalies who ship. No AI experience required.
All majors. All years. Builders, researchers, and the curious.
The people behind Cursor, Grok Bot, etc. are sponsoring our kickoff. And they want you there. Yes. You.

${greeting} here is the one thing to do this week:

KICKOFF, SPONSORED BY SPACEXAI
${k.dayLine}, ${k.timeLine}
${k.where}

RSVP on Luma: ${lumaUrl}
Add to Google Calendar: ${gcal}

One month of Cursor Pro+ for everyone who attends. Cursor and Grok credits to win. Food. All majors, all class years. Capacity is limited, so RSVP.

THE YEAR IN ONE GLANCE
We're a club with real outputs, not just a mailing list. Everything below has a date, an owner on the board, and a way in. Fellowship and project-team applications open at the kickoff.
${THIS_YEAR.map(([w, t, l]) => `  - ${w}: ${t}. ${l}`).join("\n")}

TRIPS
We get you in the rooms that matter. All paid for.
Last spring a bunch of us went to the MIT-IBM Watson AI Lab in Boston, all expenses paid. This year: top companies and AI labs in New York City and Boston. Travel, food, the lot. All paid for.

THE TIME IS NOW
We'll leave you with this, for a certain sense of urgency (and hopefully excitement). It really is the best time to be alive and build amazing tech.

Guillermo Rauch, CEO at Vercel, on LinkedIn:
"Anyone that works in AI is working the hardest they've ever worked in their lives. On the surface it's somewhat ironic (AI should give us back time!), but the reality is that it's the most fun, fascinating and empowering epoch in human history. The intelligence revolution."

LET'S DO THIS.
RSVP on Luma: ${lumaUrl}
Wednesday, 8 PM, Tsai CITY. Bring a friend who thinks AI is not for them. See you there.

We have some amazing backers :) Our kickoff is powered by SpaceXAI. The MIT-IBM Watson AI Lab and MIT hosted us last spring.

Questions? Just reply to this email. :) It goes to the Yale AI leadership (fellow Yale students).

(c) 2026 Yale Artificial Intelligence Association · yale-ai.org · ${CONTACT_EMAIL}
We're an official Registered Student Organization (RSO) affiliated with Yale University run by undergrads. To stop, reply "unsubscribe".
`;

  return { subject: SUBJECT, html, text };
}
