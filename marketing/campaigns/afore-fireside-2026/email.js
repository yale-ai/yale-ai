// Yale AI Association: fireside chat with Nathan Yu of Afore Capital, plus lightning pitches.
//
// Deliberately plain. The banner (banner/banner.html, the Luma cover redrawn as a 2:1
// strip) carries the look; everything under it reads like a normal email: white page,
// a few short paragraphs, one blue button to Luma, the standard footer. Table-based and
// inline-styled (600px max) so it survives Gmail, Apple Mail, and Outlook.

export const BLUE = "#0271fe";
export const INK = "#16181d";
export const WHITE = "#ffffff";

export const CAMPAIGN = { id: "afore-fireside-2026", tag: "afore-fireside-2026" };

// The facts the email states (see README.md).
export const EVENT = {
  speaker: "Nathan Yu",
  title: "Principal Investor @ Afore Capital",
  linkedin: "https://www.linkedin.com/in/nathan-yu",
  dayLine: "Wednesday, 11/4",
  timeLine: "4:30 to 6:30 PM",
  where: "Tsai CITY",
};

export const DEFAULT_LUMA_URL = "https://luma.com/3qmnfwtw";
export const DEFAULT_SITE_URL = "https://yale-ai.org";
export const CONTACT_EMAIL = "yaleaiassociation@gmail.com";
// Replies and the unsubscribe mailto go to the club inbox, same as the Perplexity send.
export const REPLY_TO = ["yaleaiassociation@gmail.com"];

export const SUBJECT = "Afore Capital is coming to Yale (and they want to meet you)";
export const PREHEADER = `${EVENT.dayLine}, ${EVENT.timeLine} at ${EVENT.where}. Hear from Nathan Yu, then 10-15 of you pitch Afore live. Apply on Luma in under 2 minutes.`;

// banner-v5.jpg is 1600x800, shown at 536x268. A missing file drops the banner.
export const ASSETS = [{ key: "bannerSrc", cid: "banner", file: "banner-v5.jpg", type: "image/jpeg" }];
export const FILES = [];

const SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif";

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/**
 * Render the Afore fireside email.
 * @param {object} o
 * @param {string} [o.firstName]   greeting name; omitted gives "Hi all!"
 * @param {string} [o.lumaUrl]     Luma registration link (the only CTA)
 * @param {string} [o.siteUrl]     yale-ai.org
 * @param {string} [o.bannerSrc]   the header banner; empty drops it
 * @returns {{subject:string, html:string, text:string}}
 */
export function renderEmail({ firstName, lumaUrl = DEFAULT_LUMA_URL, siteUrl = DEFAULT_SITE_URL, bannerSrc = "" } = {}) {
  const ev = EVENT;
  const greeting = firstName ? `Hi ${esc(firstName)}!` : "Hi all!";
  const unsubMailto = `mailto:${CONTACT_EMAIL}?subject=unsubscribe&body=${encodeURIComponent("Please take me off the Yale AI list.")}`;

  const p = `font-family:${SANS};font-size:16px;line-height:25px;color:${INK};margin:0;`;
  const b = `font-weight:600;color:${INK};`;

  const button = `
    <!--[if mso]>
    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${lumaUrl}" style="height:48px;v-text-anchor:middle;width:220px;" arcsize="50%" stroke="f" fillcolor="${BLUE}">
      <w:anchorlock/>
      <center style="color:${WHITE};font-family:Arial,sans-serif;font-size:15px;font-weight:bold;">Apply on Luma</center>
    </v:roundrect>
    <![endif]-->
    <!--[if !mso]><!-->
    <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
      <td align="center" bgcolor="${BLUE}" style="border-radius:999px;background:${BLUE};">
        <a href="${lumaUrl}" target="_blank" class="btn" style="display:block;padding:14px 28px;font-family:${SANS};font-size:15px;font-weight:600;color:${WHITE} !important;text-decoration:none;white-space:nowrap;border-radius:999px;">Apply on Luma &#8594;</a>
      </td>
    </tr></table>
    <!--<![endif]-->`;

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
<style>table,td{font-family:Arial,sans-serif;}</style>
<![endif]-->
<style>
  :root { color-scheme: light only; supported-color-schemes: light only; }
  html, body { margin:0 !important; padding:0 !important; background:${WHITE} !important; }
  body { -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; }
  table { border-collapse:separate !important; mso-table-lspace:0; mso-table-rspace:0; }
  img { border:0; line-height:100%; outline:none; text-decoration:none; -ms-interpolation-mode:bicubic; }
  a { color:${BLUE}; }
  a.btn, a.btn:visited, a.btn:hover { color:${WHITE} !important; }
  @media only screen and (max-width:620px) {
    .wrap { width:100% !important; }
    .pad { padding-left:18px !important; padding-right:18px !important; }
  }
</style>
</head>
<body style="margin:0;padding:0;background:${WHITE};" bgcolor="${WHITE}">
<div style="display:none;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;color:${WHITE};">${esc(PREHEADER)}${"&#847;&zwnj;&nbsp;".repeat(40)}</div>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${WHITE};" bgcolor="${WHITE}">
<tr><td align="center" style="padding:0;">
<!--[if mso]><table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td><![endif]-->
<table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="wrap" style="width:600px;max-width:600px;background:${WHITE};" bgcolor="${WHITE}">

  ${bannerSrc ? `<tr><td class="pad" style="padding:28px 32px 0;">
    <a href="${lumaUrl}" target="_blank" style="text-decoration:none;"><img src="${bannerSrc}" width="536" alt="YaleAI Association. Want to meet with Afore Capital? Nathan Yu, Principal Investor at Afore Capital. Plus lightning pitches: pitch Afore Capital in three minutes. Wednesday 11/4, 4:30 to 6:30 PM, Tsai CITY, Yale students only." style="display:block;width:536px;max-width:100%;height:auto;border:0;border-radius:14px;"></a>
  </td></tr>` : ""}

  <tr><td class="pad" style="padding:28px 32px 0;">
    <p style="${p}">${greeting}</p>
    <p style="${p}padding-top:14px;"><a href="${ev.linkedin}" target="_blank" style="${b}color:${BLUE};text-decoration:underline;">${ev.speaker}</a> (${ev.title}) is coming to Yale from SF and he wants to meet you. Afore writes first checks of <span style="${b}">$500K to $2M+</span>, and pre-idea is welcome (they often back college founders, btw).</p>
    <p style="${p}padding-top:14px;">Afore Capital will be hosting an exclusive event open to <span style="${b}">Yale students only</span> on <span style="${b}">${ev.dayLine}</span> at <span style="${b}">${ev.where} from ${ev.timeLine}</span>.</p>
    <p style="${p}padding-top:14px;">If you have an idea or are a builder of any kind... Afore is giving you the opportunity to pitch to them (right there at ${ev.where}). Seriously. <span style="${b}">10-15 of you will be selected to give a rapid-fire pitch to Afore Capital.</span> If they like your idea... the possibilities are endless.</p>
    <p style="${p}padding-top:14px;"><span style="${b}">ALSO:</span> Not only will you get to hear from Nathan about what a top VC looks for in student founders and potential builders, but about his journey into VC and startups from big tech.</p>
    <p style="${p}padding-top:14px;">There will be an open Q&amp;A and networking time as well. All majors are welcome to come! Since we expect large amounts of interest, we&#8217;re capping the number of people that can attend. <span style="${b}">Apply on Luma (&lt;2 min) as soon as possible to secure your spot!</span> Acceptance is rolling.</p>
    <p style="${p}padding-top:14px;">You don&#8217;t want to miss this (these opportunities don&#8217;t come around often to get access to a top VC firm like this). Unsure if you want to found a startup now or sometime in the future? Come anyway. Afore wants to meet top talent at Yale regardless...</p>
  </td></tr>

  <tr><td class="pad" style="padding:24px 32px 0;">
    ${button}
    <p style="font-family:${SANS};font-size:13px;line-height:20px;color:#6b7280;margin:0;padding-top:10px;">Takes under 2 minutes. Acceptance is rolling.</p>
  </td></tr>

  <tr><td class="pad" style="padding:26px 32px 0;">
    <p style="${p}">Best,<br>The Yale AI Team</p>
  </td></tr>

  <tr><td class="pad" style="padding:36px 32px 40px;">
    <div style="border-top:1px solid #e5e7eb;padding-top:18px;font-family:${SANS};font-size:12px;line-height:19px;color:#8a8f98;">
      Questions? Just reply to this email. It goes to the Yale AI leadership (fellow Yale students).<br>
      &copy; 2026 Yale Artificial Intelligence Association &nbsp;&middot;&nbsp; <a href="${siteUrl}" target="_blank" style="color:#8a8f98;text-decoration:underline;">yale-ai.org</a><br>
      We&#8217;re an official Registered Student Organization (RSO) affiliated with Yale University run by undergrads. To stop, reply &#8220;unsubscribe&#8221; or <a href="${unsubMailto}" style="color:#8a8f98;text-decoration:underline;">click here to unsubscribe</a>.
    </div>
  </td></tr>

</table>
<!--[if mso]></td></tr></table><![endif]-->
</td></tr>
</table>
</body>
</html>`;

  const text = `${firstName ? `Hi ${firstName}!` : "Hi all!"}

${ev.speaker} (${ev.title}) is coming to Yale from SF and he wants to meet you. Afore writes first checks of $500K to $2M+, and pre-idea is welcome (they often back college founders, btw).
${ev.linkedin}

Afore Capital will be hosting an exclusive event open to Yale students only on ${ev.dayLine} at ${ev.where} from ${ev.timeLine}.

If you have an idea or are a builder of any kind... Afore is giving you the opportunity to pitch to them (right there at ${ev.where}). Seriously. 10-15 of you will be selected to give a rapid-fire pitch to Afore Capital. If they like your idea... the possibilities are endless.

ALSO: Not only will you get to hear from Nathan about what a top VC looks for in student founders and potential builders, but about his journey into VC and startups from big tech.

There will be an open Q&A and networking time as well. All majors are welcome to come! Since we expect large amounts of interest, we're capping the number of people that can attend. Apply on Luma (<2 min) as soon as possible to secure your spot! Acceptance is rolling.

You don't want to miss this (these opportunities don't come around often to get access to a top VC firm like this). Unsure if you want to found a startup now or sometime in the future? Come anyway. Afore wants to meet top talent at Yale regardless...

Apply on Luma: ${lumaUrl}

Best,
The Yale AI Team


Questions? Just reply to this email. It goes to the Yale AI leadership (fellow Yale students).
(c) 2026 Yale Artificial Intelligence Association, yale-ai.org
We're an official Registered Student Organization (RSO) affiliated with Yale University run by undergrads. To stop, reply "unsubscribe".
`;

  return { subject: SUBJECT, html, text };
}
