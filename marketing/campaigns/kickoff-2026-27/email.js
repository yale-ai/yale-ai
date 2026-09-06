// Yale AI Association: 2026-27 kickoff email.
//
// Goes to everyone who signed up at the EC Bazaar plus the rest of the Yale
// College list, so it has to work for people who have never heard of us.
//
// Visual language: the SpaceXAI register. Black ground, generous space, big
// rounded statement cards, wide-tracked small labels, one white button, and
// the Grok Bot character bleeding off the edge of the hero card. The banner's
// lime shows up only as an accent. Table-based and inline-styled so it
// survives Gmail, Apple Mail, and Outlook.

export const BG = "#0b0b0b";
export const LIME = "#d9e4a8";
export const TEAL = "#4fd8c8";
export const BLUE = "#6ea8ff";
export const WHITE = "#ffffff";
export const CARD_BG = "#141414";
export const CARD_BORDER = "rgba(255,255,255,0.09)";

export const CAMPAIGN = { id: "kickoff-2026-27", tag: "kickoff-2026-27" };

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

// Files expected in campaigns/kickoff-2026-27/assets/. Missing files are simply
// omitted by the template, so a logo can be dropped in later without a code change.
export const ASSETS = [
  { key: "logoSrc", cid: "logo", file: "logo.png", type: "image/png" },
  { key: "sponsorLogoSrc", cid: "spacexai", file: "spacexai.png", type: "image/png" },
  { key: "botSrc", cid: "bot", file: "bot-calm.png", type: "image/png" },
];

// Compact pill row, straight off the poster.
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

export function gcalLink(ev, lumaUrl) {
  const p = new URLSearchParams({
    action: "TEMPLATE",
    text: ev.title,
    dates: `${ev.startUtc}/${ev.endUtc}`,
    location: ev.location,
    details:
      `Yale AI Association kickoff. Sponsored by SpaceXAI. Everyone who attends gets 1 month of Cursor Pro+ free, ` +
      `there is a competition for SpaceXAI credits, an exclusive Grok Bot demo, and free boba and snacks. All majors, all class years.\n\n` +
      `Capacity is limited, so RSVP on Luma: ${lumaUrl}\n\nyale-ai.org`,
  });
  return `https://calendar.google.com/calendar/render?${p.toString()}`;
}

const POPPINS = "Poppins, Helvetica, Arial, sans-serif";
const SANS = "'Helvetica Neue', Helvetica, Arial, sans-serif";
const MONO = "Menlo, Consolas, 'Courier New', monospace";

// This year, as six numbered lines. Keep them short; they sit in two columns.
export const THIS_YEAR = [
  ["Project teams", "Small teams, real builds, a demo day in the fall."],
  ["Yale AI Fellowship", "A curriculum, a cohort, and something to show for it."],
  ["Research showcase", "Ten labs, one room, the work explained to undergrads."],
  ["Workshops", "Biweekly and hands-on. Coding agents, AI-native workflows."],
  ["Fireside chats", "Founders and researchers, in conversation. First one in November."],
  ["Company trip", "Spring. A frontier AI company, in person."],
];

/**
 * Render the kickoff email.
 * @param {object} o
 * @param {string} [o.firstName]       greeting name; omitted gives "Hey there,"
 * @param {string} [o.lumaUrl]         Luma RSVP link (the primary CTA)
 * @param {string} [o.siteUrl]         yale-ai.org
 * @param {string} [o.logoSrc]         optional wordmark image; empty falls back to text
 * @param {string} [o.sponsorLogoSrc]  the SpaceXAI wordmark; empty falls back to text
 * @param {string} [o.botSrc]          the Grok Bot character for the hero card; empty drops it
 * @returns {{subject:string, html:string, text:string}}
 */
export function renderEmail({
  firstName,
  lumaUrl = DEFAULT_LUMA_URL,
  siteUrl = DEFAULT_SITE_URL,
  logoSrc = "",
  sponsorLogoSrc = "",
  botSrc = "",
} = {}) {
  const k = EVENTS.kickoff;
  const gcal = gcalLink(k, lumaUrl);
  const greeting = firstName ? `Hey ${firstName},` : "Hey there,";
  const unsubMailto = `mailto:${CONTACT_EMAIL}?subject=unsubscribe&body=${encodeURIComponent(
    "Please take me off the Yale AI list.",
  )}`;

  const label = `font-family:${SANS};font-size:11px;line-height:16px;letter-spacing:0.22em;text-transform:uppercase;color:#8d8d8d;`;
  const labelLime = `font-family:${SANS};font-size:11px;line-height:16px;letter-spacing:0.22em;text-transform:uppercase;color:${LIME};`;
  const body = `font-family:${SANS};font-weight:400;font-size:16px;line-height:26px;color:#c9c9c9;`;
  const h = `font-family:${POPPINS};font-weight:600;letter-spacing:-0.5px;color:${WHITE};`;
  const CARD = `border-radius:24px;background:${CARD_BG};border:1px solid ${CARD_BORDER};`;

  // White pill, black text, with an Outlook VML fallback.
  const button = (href, text) => `
    <!--[if mso]>
    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${href}" style="height:48px;v-text-anchor:middle;width:230px;" arcsize="50%" stroke="f" fillcolor="#ffffff">
      <w:anchorlock/>
      <center style="color:#000000;font-family:Arial,sans-serif;font-size:15px;font-weight:bold;">${text}</center>
    </v:roundrect>
    <![endif]-->
    <!--[if !mso]><!-->
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="left"><tr>
      <td align="center" bgcolor="#ffffff" style="border-radius:999px;background:#ffffff;">
        <a href="${href}" target="_blank" style="display:block;padding:15px 28px;font-family:${SANS};font-size:15px;font-weight:700;color:#000000;text-decoration:none;white-space:nowrap;border-radius:999px;">${text}</a>
      </td>
    </tr></table>
    <!--<![endif]-->`;

  const ghost = (href, text) => `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="left"><tr>
      <td align="center" bgcolor="#1c1c1c" style="border-radius:999px;background:#1c1c1c;border:1px solid rgba(255,255,255,0.18);">
        <a href="${href}" target="_blank" style="display:block;padding:14px 22px;font-family:${SANS};font-size:14px;font-weight:600;color:${WHITE};text-decoration:none;white-space:nowrap;border-radius:999px;">${text}</a>
      </td>
    </tr></table>`;

  const wordmark = logoSrc
    ? `<a href="${siteUrl}" target="_blank" style="text-decoration:none;"><img src="${logoSrc}" width="88" alt="Yale AI" style="width:88px;height:auto;display:block;border:0;"></a>`
    : `<a href="${siteUrl}" target="_blank" style="font-family:${POPPINS};font-weight:700;font-size:21px;line-height:24px;letter-spacing:-0.6px;color:${WHITE};text-decoration:none;">Yale AI<span style="color:${TEAL};">.</span></a>`;

  const sponsor = sponsorLogoSrc
    ? `<img src="${sponsorLogoSrc}" width="112" height="15" alt="SpaceXAI" style="width:112px;height:15px;display:inline-block;vertical-align:-2px;border:0;">`
    : `<span style="font-family:${SANS};font-weight:700;letter-spacing:0.2em;color:${WHITE};">SPACEXAI</span>`;

  // The hero: text on the left, the bot bleeding off the right edge of the card.
  const heroBot = botSrc
    ? `<td valign="bottom" align="right" width="230" style="width:230px;padding:0;border-radius:0 24px 24px 0;overflow:hidden;">
          <img src="${botSrc}" width="230" alt="" style="width:230px;height:auto;display:block;border:0;border-radius:0 24px 24px 0;">
        </td>`
    : "";

  const thisYear = THIS_YEAR.map(
    ([title, line], i) => `
        <tr>
          <td valign="top" width="30" style="width:30px;padding:0 0 18px 0;font-family:${MONO};font-size:11px;line-height:20px;color:${TEAL};">${String(i + 1).padStart(2, "0")}</td>
          <td valign="top" style="padding:0 0 18px 0;">
            <div style="font-family:${SANS};font-size:16px;line-height:20px;font-weight:700;color:${WHITE};">${title}</div>
            <div style="font-family:${SANS};font-size:14px;line-height:21px;color:#9a9a9a;padding-top:3px;">${line}</div>
          </td>
        </tr>`,
  ).join("");

  const stat = (big, small, pos) => `
        <td valign="top" width="33%" style="padding:${pos === "first" ? "0 6px 0 0" : pos === "last" ? "0 0 0 6px" : "0 6px"};">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="${CARD}"><tr>
            <td style="padding:20px 18px 18px;">
              <div style="font-family:${POPPINS};font-weight:700;font-size:24px;line-height:28px;letter-spacing:-0.8px;color:${WHITE};">${big}</div>
              <div style="font-family:${SANS};font-size:12px;line-height:17px;color:#9a9a9a;padding-top:6px;">${small}</div>
            </td>
          </tr></table>
        </td>`;

  const html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="x-apple-disable-message-reformatting">
<meta name="color-scheme" content="dark">
<meta name="supported-color-schemes" content="dark">
<title>${SUBJECT}</title>
<!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
  :root { color-scheme: dark; supported-color-schemes: dark; }
  body { margin:0; padding:0; background:#000000; }
  img { border:0; outline:none; text-decoration:none; -ms-interpolation-mode:bicubic; }
  table { border-collapse:collapse; mso-table-lspace:0; mso-table-rspace:0; }
  a { color:${WHITE}; }
  @media (max-width:620px) {
    .wrap { width:100% !important; }
    .pad { padding-left:20px !important; padding-right:20px !important; }
    .stack { display:block !important; width:100% !important; padding:14px 0 0 0 !important; }
    .hero-text { padding-right:20px !important; }
    .hero-bot { width:150px !important; }
    .hero-bot img { width:150px !important; }
  }
  [data-ogsc] body, [data-ogsc] .bg { background:#000000 !important; }
</style>
</head>
<body style="margin:0;padding:0;background:#000000;">
<div style="display:none;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;">${PREHEADER}${"&#847;&zwnj;&nbsp;".repeat(40)}</div>
<table role="presentation" class="bg" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#000000" style="background:#000000;">
<tr><td align="center" style="padding:28px 12px 40px;">
<!--[if mso]><table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
<table role="presentation" class="wrap" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;">

  <!-- header -->
  <tr><td class="pad" style="padding:8px 6px 26px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
      <td align="left" valign="middle">${wordmark}</td>
      <td align="right" valign="middle" style="${labelLime}">Kickoff 2026&#8211;27</td>
    </tr></table>
  </td></tr>

  <!-- hero statement card -->
  <tr><td style="padding:0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="${CARD}">
      <tr>
        <td class="hero-text" valign="middle" style="padding:34px 8px 34px 30px;">
          <div style="${label}">Kickoff sponsored by&nbsp;&nbsp;${sponsor}</div>
          <div style="${h}font-size:30px;line-height:36px;padding-top:16px;">Meet your new AI teammate.<br>Then go build one.</div>
          <div style="${body}font-size:15px;line-height:23px;padding-top:14px;">Fancy learning about the Yale AI Association, <span style="color:${WHITE};font-weight:700;">a month of Cursor Pro+</span> for everyone in the room, an <span style="color:${WHITE};font-weight:700;">exclusive Grok Bot demo</span>, a competition for <span style="color:${WHITE};font-weight:700;">SpaceXAI credits</span>, and free boba and snacks? <span style="color:${WHITE};font-weight:700;">Yeah, we thought so.</span> Wednesday, Tsai CITY.</div>
        </td>
        ${heroBot}
      </tr>
    </table>
  </td></tr>

  <!-- greeting + pitch -->
  <tr><td class="pad" style="padding:30px 6px 0;">
    <div style="${h}font-size:18px;line-height:26px;">${greeting}</div>
    <div style="${body}padding-top:12px;">Every year a few hundred people at Yale say they want to get into AI. Most never start. <span style="color:${WHITE};font-weight:700;">This Wednesday</span> we make starting the easy part: show up, get the tools the frontier labs actually use, and pick a project team, a fellowship cohort, or both. No experience needed. All majors, all class years. There will be boba.</div>
    <div style="${body}padding-top:12px;">It is sponsored by SpaceXAI, and everyone who shows up walks out with <span style="color:${WHITE};font-weight:700;">1 month of Cursor Pro+ free</span>. Seriously :).</div>
  </td></tr>

  <!-- three numbers -->
  <tr><td style="padding:28px 0 0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
      ${stat("1 month", "of Cursor Pro+, free, for everyone who attends", "first")}
      ${stat("Credits", "a competition for SpaceXAI credits, on the spot")}
      ${stat("Boba", "and snacks. Free. Obviously.", "last")}
    </tr></table>
  </td></tr>

  <!-- kickoff card -->
  <tr><td style="padding:16px 0 0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="${CARD}"><tr>
      <td class="pad" style="padding:30px 30px 28px;">
        <div style="${labelLime}">The kickoff</div>
        <div style="${h}font-size:34px;line-height:38px;letter-spacing:-1px;padding-top:12px;">${k.dayLine}</div>
        <div style="font-family:${SANS};font-size:18px;line-height:26px;font-weight:700;color:${WHITE};padding-top:4px;">${k.timeLine}</div>
        <div style="font-family:${SANS};font-size:16px;line-height:24px;color:#9a9a9a;padding-top:2px;">${k.where}</div>
        <div style="${body}font-size:15px;line-height:23px;padding-top:16px;">An exclusive Grok Bot demo, twenty minutes, no slides. <span style="color:${WHITE};font-weight:700;">Capacity is limited</span> and we are filling it from the RSVP list, so get on it now and the seat is yours.</div>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
          <td class="stack" style="padding:24px 10px 0 0;">${button(lumaUrl, "RSVP on Luma")}</td>
          <td class="stack" style="padding:24px 0 0 0;">${ghost(gcal, "Add to calendar")}</td>
        </tr></table>
      </td>
    </tr></table>
  </td></tr>

  <!-- this year -->
  <tr><td style="padding:16px 0 0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="${CARD}"><tr>
      <td class="pad" style="padding:30px 30px 14px;">
        <div style="${label}">What Yale AI is doing this year</div>
        <div style="${h}font-size:24px;line-height:30px;padding:12px 0 18px;">Concrete things to join. Not vague promises.</div>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          ${thisYear}
        </table>
        <div style="font-family:${SANS};font-size:13px;line-height:20px;color:#8d8d8d;padding:6px 0 14px;">Applications for the fellowship and the project teams open at the kickoff.</div>
      </td>
    </tr></table>
  </td></tr>

  <!-- closing statement -->
  <tr><td class="pad" style="padding:40px 6px 36px;">
    <div style="${h}font-size:26px;line-height:32px;">The people who build the next decade are picking rooms right now.<br>Pick this one.</div>
    <div style="${body}padding-top:12px;">Come Wednesday. Bring a friend who thinks AI is not for them. All majors welcome.</div>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
      <td class="stack" style="padding:24px 10px 0 0;">${button(lumaUrl, "RSVP on Luma")}</td>
      <td class="stack" style="padding:24px 0 0 0;">${ghost(siteUrl, "yale-ai.org")}</td>
    </tr></table>
  </td></tr>

  <!-- footer -->
  <tr><td class="pad" style="padding:32px 6px 0;border-top:1px solid #1e1e1e;">
    <div style="font-family:${SANS};font-size:14px;line-height:21px;font-weight:700;color:${WHITE};">Questions? Just reply to this email.</div>
    <div style="font-family:${SANS};font-size:13px;line-height:20px;color:#8d8d8d;padding-top:4px;">It goes to the Yale AI leadership (fellow Yale students).</div>
    <div style="font-family:${SANS};font-size:12px;line-height:19px;color:#6a6a6a;padding-top:22px;">&copy; 2026 Yale Artificial Intelligence Association &middot; <a href="${siteUrl}" style="color:#9a9a9a;text-decoration:none;">yale-ai.org</a><br>Student-run and independent of Yale University. You are on this list because you signed up at the EC Bazaar, our website, or a past event. To stop, reply &#8220;unsubscribe&#8221; or <a href="${unsubMailto}" style="color:#9a9a9a;text-decoration:underline;">click here to unsubscribe</a>.</div>
  </td></tr>

</table>
<!--[if mso]></td></tr></table><![endif]-->
</td></tr>
</table>
</body>
</html>`;

  const text = `YALE AI ASSOCIATION (${siteUrl})
KICKOFF 2026-27, SPONSORED BY SPACEXAI

MEET YOUR NEW AI TEAMMATE. THEN GO BUILD ONE.
Fancy learning about the Yale AI Association, a month of Cursor Pro+ for everyone in the room, an exclusive Grok Bot demo, a competition for SpaceXAI credits, and free boba and snacks? Yeah, we thought so. Wednesday, Tsai CITY.

${greeting}

Every year a few hundred people at Yale say they want to get into AI. Most never start. <span style="color:${WHITE};font-weight:700;">This Wednesday</span> we make starting the easy part: show up, get the tools the frontier labs actually use, and pick a project team, a fellowship cohort, or both. No experience needed. All majors, all class years. There will be boba.

It is sponsored by SpaceXAI, and everyone who shows up walks out with 1 month of Cursor Pro+ free. Seriously :).

  - 1 month of Cursor Pro+, free, for everyone who attends.
  - A competition for SpaceXAI credits, on the spot.
  - An exclusive Grok Bot demo on stage. Twenty minutes, no slides.
  - Free boba and snacks. Obviously.

THE KICKOFF
${k.dayLine}, ${k.timeLine}
${k.where}
An exclusive Grok Bot demo, twenty minutes, no slides. Capacity is limited and we are filling it from the RSVP list, so get on it now and the seat is yours.

RSVP on Luma: ${lumaUrl}
Add to Google Calendar: ${gcal}

WHAT YALE AI IS DOING THIS YEAR
${THIS_YEAR.map(([t, l], i) => `  ${String(i + 1).padStart(2, "0")}  ${t}: ${l}`).join("\n")}
Applications for the fellowship and the project teams open at the kickoff.

The people who build the next decade are picking rooms right now. Pick this one. Come Wednesday. Bring a friend who thinks AI is not for them. All majors welcome.

RSVP on Luma: ${lumaUrl}
More about us: ${siteUrl}

Questions? Just reply to this email. It goes to the Yale AI leadership (fellow Yale students).

(c) 2026 Yale Artificial Intelligence Association - yale-ai.org
Student-run and independent of Yale University. You are on this list because you signed up at the EC Bazaar, our website, or a past event. To stop, reply "unsubscribe".
`;

  return { subject: SUBJECT, html, text };
}
