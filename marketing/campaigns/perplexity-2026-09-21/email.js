// Yale AI Association: Perplexity recruiting event, Monday September 21, 2026.
//
// One event, one ask. The header is a co-branded lockup (the Yale AI mark and
// wordmark, a small multiplication sign, the Perplexity logo), then a glass
// card with the facts, the body text, one lime button to the Luma page, and
// the standard footer. Black stage, lime and teal accents, Instrument Serif
// over Instrument Sans with system fallbacks. Table-based and inline-styled
// (600px max) so it survives Gmail, Apple Mail, and Outlook.
//
// Dark mode: the email declares color-scheme "light only" so Apple Mail and
// Outlook leave the colors alone, and both logos ship as plate PNGs (a solid
// rounded plate baked behind the mark) so neither can vanish if a client
// inverts the stage anyway. Images are hosted; the flyer PDF is attached.

export const BLACK = "#000000";
export const WHITE = "#ffffff";
export const LIME = "#d9e4a8";
export const LIME_DEEP = "#c4d485";
export const TEAL = "#4fd8c8";

export const CAMPAIGN = { id: "perplexity-2026-09-21", tag: "perplexity-2026-09-21" };

export const SUBJECT = "Perplexity at Yale this Monday: recruiting, a live coding competition, and prizes";
export const PREHEADER =
  "Monday 9/21, 6:30 to 9:00 PM at Tsai CITY. Interviews for new grad MTS roles, Perplexity Max, API credits, free food.";

export const DEFAULT_LUMA_URL = "https://luma.com/f7vu165w";
export const DEFAULT_SITE_URL = "https://yale-ai.org";
export const CONTACT_EMAIL = "filippo.fonseca@yale.edu";

export const EVENTS = {
  perplexity: {
    title: "Perplexity x Yale AI: recruiting and live coding competition",
    dayLine: "Monday, September 21",
    timeLine: "6:30 to 9:00 PM",
    where: "Tsai CITY",
  },
};

// Files expected in campaigns/perplexity-2026-09-21/assets/. Both are plate
// PNGs at 2x: mark-plate.png is the lime Yale AI tile with transparent corners
// (64x64, shown at 32x32); perplexity-plate.png is the Perplexity logo on a
// white rounded plate (210x64, shown at 105x32). A missing file falls back to
// a text wordmark.
export const ASSETS = [
  { key: "markSrc", cid: "mark", file: "mark-plate.png", type: "image/png" },
  { key: "partnerLogoSrc", cid: "perplexity", file: "perplexity-plate.png", type: "image/png" },
  { key: "torusSrc", cid: "torus", file: "torus.jpg", type: "image/jpeg" },
];

// Attached to every send of this campaign, in every mode.
export const FILES = [
  { file: "flyer.pdf", filename: "Perplexity x YaleAI Recruiting Flyer.pdf", type: "application/pdf" },
];

const SERIF = "'Instrument Serif', Georgia, 'Times New Roman', Times, serif";
const SANS = "'Instrument Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif";

// Glass card: a dark rounded table with a hairline and a soft top light.
const CARD =
  "border-radius:20px;background:#121212;background-image:linear-gradient(180deg,rgba(255,255,255,0.09) 0%,rgba(255,255,255,0.03) 45%,rgba(255,255,255,0.02) 100%);border:1px solid rgba(255,255,255,0.12);";

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/**
 * Render the Perplexity event email.
 * @param {object} o
 * @param {string} [o.firstName]        greeting name; omitted gives "Hi all!"
 * @param {string} [o.lumaUrl]          Luma sign-up link (the only CTA)
 * @param {string} [o.siteUrl]          yale-ai.org
 * @param {string} [o.markSrc]          the Yale AI mark plate; empty drops the tile
 * @param {string} [o.partnerLogoSrc]   the Perplexity plate; empty falls back to text
 * @returns {{subject:string, html:string, text:string}}
 */
export function renderEmail({
  firstName,
  lumaUrl = DEFAULT_LUMA_URL,
  siteUrl = DEFAULT_SITE_URL,
  markSrc = "",
  partnerLogoSrc = "",
  torusSrc = "",
} = {}) {
  const ev = EVENTS.perplexity;
  const greeting = firstName ? `Hi ${esc(firstName)}!` : "Hi all!";
  const unsubMailto = `mailto:${CONTACT_EMAIL}?subject=unsubscribe&body=${encodeURIComponent("Please take me off the Yale AI list.")}`;

  // Type styles. Instrument Serif ships one weight, so emphasis is italic and color, not bold.
  const kicker = `font-family:${SANS};font-weight:700;font-size:11px;letter-spacing:3.5px;text-transform:uppercase;color:${TEAL};line-height:16px;`;
  const italic = `font-family:${SERIF};font-style:italic;font-weight:400;font-size:20px;line-height:28px;color:${WHITE};`;
  const bodySans = `font-family:${SANS};font-weight:400;font-size:16px;line-height:25px;color:#d2d2d2;`;
  const strong = `color:${WHITE};font-weight:600;`;

  // Shiny lime pill CTA, with an Outlook fallback.
  const pill = (href, label) => `
    <!--[if mso]>
    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${href}" style="height:54px;v-text-anchor:middle;width:250px;" arcsize="50%" stroke="f" fillcolor="${LIME}">
      <w:anchorlock/>
      <center style="color:${BLACK};font-family:Arial,sans-serif;font-size:14px;font-weight:bold;letter-spacing:2px;">${label.toUpperCase()}</center>
    </v:roundrect>
    <![endif]-->
    <!--[if !mso]><!-->
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center"><tr>
      <td align="center" bgcolor="${LIME}" style="border-radius:999px;background:${LIME};background-image:linear-gradient(180deg,#eef4d2 0%,${LIME} 55%,${LIME_DEEP} 100%);border:1px solid rgba(255,255,255,0.55);box-shadow:0 14px 34px -12px rgba(217,228,168,0.75),inset 0 1px 0 rgba(255,255,255,0.6);">
        <a href="${href}" target="_blank" class="btn" style="display:block;padding:18px 32px;font-family:${SANS};font-size:14px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${BLACK} !important;text-decoration:none;white-space:nowrap;border-radius:999px;">${label} &#8594;</a>
      </td>
    </tr></table>
    <!--<![endif]-->`;

  // The co-branded lockup: Yale AI mark and wordmark, a multiplication sign, the Perplexity plate.
  // Both marks are 32px tall so they read as equals.
  const partner = partnerLogoSrc
    ? `<img src="${partnerLogoSrc}" width="105" height="32" alt="Perplexity" style="width:105px;height:32px;display:block;border:0;">`
    : `<span class="fg" style="font-family:${SANS};font-weight:600;font-size:20px;line-height:32px;color:${WHITE};">Perplexity</span>`;
  const lockup = `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center"><tr>
      ${markSrc ? `<td valign="middle" style="padding:0 9px 0 0;"><a href="${siteUrl}" target="_blank" style="text-decoration:none;"><img src="${markSrc}" width="32" height="32" alt="Yale AI" style="width:32px;height:32px;display:block;border:0;"></a></td>` : ""}
      <td valign="middle" style="padding:0;"><a href="${siteUrl}" target="_blank" class="fg" style="font-family:${SANS};font-weight:700;font-size:21px;line-height:32px;letter-spacing:-0.5px;color:${WHITE};text-decoration:none;">YaleAI</a></td>
      <td valign="middle" style="padding:0 14px;"><span style="font-family:${SANS};font-weight:400;font-size:18px;line-height:32px;color:#8a8a8a;">&times;</span></td>
      <td valign="middle" style="padding:0;"><a href="https://www.perplexity.ai" target="_blank" style="text-decoration:none;">${partner}</a></td>
    </tr></table>`;

  const html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="x-apple-disable-message-reformatting">
<meta name="color-scheme" content="light only">
<meta name="supported-color-schemes" content="light only">
<title>${SUBJECT}</title>
<!--[if mso]>
<xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml>
<style>table,td{font-family:Georgia,'Times New Roman',serif;}</style>
<![endif]-->
<style>
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Instrument+Sans:wght@400;500;600;700&display=swap');
  :root { color-scheme: light only; supported-color-schemes: light only; }
  html, body { color-scheme: light only; margin:0 !important; padding:0 !important; background:${BLACK} !important; }
  body { -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; }
  table { border-collapse:separate !important; mso-table-lspace:0; mso-table-rspace:0; }
  img { border:0; line-height:100%; outline:none; text-decoration:none; -ms-interpolation-mode:bicubic; }
  a { color:${LIME}; }
  a.btn, a.btn:visited, a.btn:hover { color:${BLACK} !important; }
  [data-ogsc] .bg { background-color:${BLACK} !important; }
  [data-ogsc] .fg { color:${WHITE} !important; }
  [data-ogsc] .lm { color:${LIME} !important; }
  [data-ogsc] .tl { color:${TEAL} !important; }
  [data-ogsc] a.btn, [data-ogsb] a.btn { color:${BLACK} !important; background:${LIME} !important; }
  @media only screen and (max-width:620px) {
    .wrap { width:100% !important; }
    .pad { padding-left:18px !important; padding-right:18px !important; }
    .cardpad { padding-left:20px !important; padding-right:20px !important; }
    .hero { font-size:34px !important; line-height:38px !important; }
    .facts { font-size:17px !important; line-height:25px !important; }
  }
</style>
</head>
<body class="bg" style="margin:0;padding:0;background:${BLACK};" bgcolor="${BLACK}">
<div style="display:none;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;color:${BLACK};">${PREHEADER}${"&#847;&zwnj;&nbsp;".repeat(40)}</div>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="bg" style="background:${BLACK};" bgcolor="${BLACK}">
<tr><td align="center" style="padding:0;">
<!--[if mso]><table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td><![endif]-->
<table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="wrap bg" style="width:600px;max-width:600px;background:${BLACK};" bgcolor="${BLACK}">

  <!-- header: Yale AI x Perplexity -->
  <tr><td align="center" class="pad" style="padding:34px 32px 0;">${lockup}</td></tr>

  <!-- headline -->
  <tr><td align="center" class="pad" style="padding:30px 32px 0;">
    <div class="tl" style="${kicker}">Recruiting event</div>
    <div class="hero fg" style="font-family:${SERIF};font-weight:400;font-size:42px;line-height:46px;letter-spacing:-0.5px;color:${WHITE};padding-top:12px;">Perplexity is coming to Yale <span class="tl" style="font-style:italic;color:${TEAL};">this Monday.</span></div>
    <div style="${italic}font-size:19px;line-height:27px;color:#bdbdbd;padding-top:10px;">And they want to <b style="color:#fff;font-style:normal;">recruit you on Monday evening</b> (a few of you will get <b style="color:#fff;font-style:normal;">guaranteed interviews</b>). Really.</div>
  </td></tr>

  <!-- the torus, from the event artwork -->
  ${torusSrc ? `<tr><td align="center" style="padding:18px 32px 0;">
    <img src="${torusSrc}" width="536" alt="" style="display:block;width:536px;max-width:100%;height:auto;border:0;border-radius:18px;">
  </td></tr>` : ""}

  <!-- the facts -->
  <tr><td class="pad" style="padding:26px 32px 0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#121212" style="${CARD}">
      <tr><td class="cardpad" align="center" style="padding:26px 28px 28px;">
        <div class="facts fg" style="font-family:${SANS};font-weight:700;font-size:20px;line-height:28px;letter-spacing:-0.3px;color:${WHITE};">${ev.dayLine} <span class="lm" style="color:${LIME};font-weight:400;">&middot;</span> ${ev.timeLine} <span class="lm" style="color:${LIME};font-weight:400;">&middot;</span> ${ev.where}</div>
        <div style="${italic}font-size:17px;line-height:24px;color:#bdbdbd;padding-top:6px;">Spots are limited and registration is required.</div>
        <div style="padding-top:20px;">${pill(lumaUrl, "Sign up on Luma")}</div>
      </td></tr>
    </table>
  </td></tr>

  <!-- body -->
  <tr><td class="pad" style="padding:32px 32px 0;">
    <div class="fg" style="font-family:${SANS};font-weight:600;font-size:17px;line-height:25px;color:${WHITE};">${greeting}</div>
    <div style="${bodySans}padding-top:12px;">The Yale AI Association is back with another frontier AI company. Join us this Monday (9/21) from 6:30 to 9:00 PM at Tsai CITY to meet the team from <span class="fg" style="${strong}">Perplexity</span>!</div>
    <div style="${bodySans}padding-top:14px;">We&#8217;ll kick off with an hour with Perplexity&#8217;s recruiting team, where you can learn more about the company, ask questions, and hear about internships and new grad opportunities.</div>
    <div style="${bodySans}padding-top:14px;">Then, Perplexity will host a <span class="fg" style="${strong}">live coding competition</span>. Top performers will be <b style="color:#fff;">selected for an interview for Perplexity&#8217;s new grad Member of Technical Staff (MTS) roles</b>.</div>
    <div style="${bodySans}padding-top:14px;">There are also prizes for top performers, including <span class="fg" style="${strong}">Perplexity Max subscriptions</span> and <span class="fg" style="${strong}">thousands of dollars in API credits</span>.</div>
    <div style="${bodySans}padding-top:14px;">Come to compete, learn more about Perplexity, ask about recruiting, or just grab some free food and drinks. Spots are limited and registration is required.</div>
  </td></tr>

  <!-- sign up -->
  <tr><td align="center" class="pad" style="padding:26px 32px 0;">
    ${pill(lumaUrl, "Sign up on Luma")}
    <div style="font-family:${SANS};font-size:13px;line-height:20px;color:#8a8a8a;padding-top:12px;">or open <a href="${lumaUrl}" target="_blank" class="lm" style="color:${LIME};text-decoration:underline;">${lumaUrl.replace(/^https?:\/\//, "")}</a></div>
  </td></tr>

  <!-- sign-off -->
  <tr><td class="pad" style="padding:26px 32px 0;">
    <div style="${bodySans}">Best,<br><span class="fg" style="${strong}">The Yale AI Team</span></div>
  </td></tr>

  <!-- footer -->
  <tr><td align="center" class="pad" style="padding:40px 32px 44px;">
    <div class="fg" style="font-family:${SANS};font-weight:700;font-size:14px;line-height:22px;color:${WHITE};">Questions? Just reply to this email. :)</div>
    <div style="font-family:${SANS};font-size:12px;line-height:19px;color:#8a8a8a;padding-top:6px;">It goes to the Yale AI leadership (fellow Yale students).</div>
    <div style="font-family:${SANS};font-weight:600;font-size:11px;line-height:18px;letter-spacing:0.3px;color:#6f6f6f;padding-top:16px;">
      &copy; 2026 Yale Artificial Intelligence Association &nbsp;&middot;&nbsp; <a href="${siteUrl}" target="_blank" class="lm" style="color:${LIME};text-decoration:none;">yale-ai.org</a> &nbsp;&middot;&nbsp; <a href="mailto:${CONTACT_EMAIL}" style="color:#9a9a9a;text-decoration:none;">${CONTACT_EMAIL}</a><br>
      <span style="font-weight:400;">We&#8217;re an official Registered Student Organization (RSO) affiliated with Yale University run by undergrads. To stop, reply &#8220;unsubscribe&#8221; or <a href="${unsubMailto}" style="color:#9a9a9a;text-decoration:underline;">click here to unsubscribe</a>.</span>
    </div>
  </td></tr>

</table>
<!--[if mso]></td></tr></table><![endif]-->
</td></tr>
</table>
</body>
</html>`;

  const text = `Yale AI x Perplexity (${siteUrl})

PERPLEXITY IS COMING TO YALE THIS MONDAY
And they want to recruit you on Monday evening (a few of you will get guaranteed interviews). Really.
${ev.dayLine}, ${ev.timeLine}, ${ev.where}
Spots are limited and registration is required.

Sign up on Luma: ${lumaUrl}

${greeting}

The Yale AI Association is back with another frontier AI company. Join us this Monday (9/21) from 6:30 to 9:00 PM at Tsai CITY to meet the team from Perplexity!

We'll kick off with an hour with Perplexity's recruiting team, where you can learn more about the company, ask questions, and hear about internships and new grad opportunities.

Then, Perplexity will host a live coding competition. Top performers will be selected for an interview for Perplexity's new grad Member of Technical Staff (MTS) roles.

There are also prizes for top performers, including Perplexity Max subscriptions and thousands of dollars in API credits.

Come to compete, learn more about Perplexity, ask about recruiting, or just grab some free food and drinks. Spots are limited and registration is required.

Sign up on Luma here: ${lumaUrl}

Best,
The Yale AI Team

The flyer is attached as a PDF.

Questions? Just reply to this email. :) It goes to the Yale AI leadership (fellow Yale students).

(c) 2026 Yale Artificial Intelligence Association, yale-ai.org, ${CONTACT_EMAIL}
We're an official Registered Student Organization (RSO) affiliated with Yale University run by undergrads. To stop, reply "unsubscribe".
`;

  return { subject: SUBJECT, html, text };
}
