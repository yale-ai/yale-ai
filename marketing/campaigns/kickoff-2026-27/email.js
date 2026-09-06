// Yale AI Association: 2026-27 kickoff email.
//
// Goes to everyone who signed up at the EC Bazaar plus the rest of the Yale
// College list, so it has to work for people who have never heard of us.
//
// Visual language comes straight off the bazaar banner: near-black ground,
// white Poppins, lime #d9e4a8 for pills, the kickoff line, underlines and the
// primary button, teal #4fd8c8 for the small all-caps monospace kickers, and a
// blue italic date line. Table-based and inline-styled so it survives Gmail,
// Apple Mail, and Outlook.

export const BG = "#0b0b0b";
export const LIME = "#d9e4a8";
export const TEAL = "#4fd8c8";
export const BLUE = "#6ea8ff";
export const WHITE = "#ffffff";
export const CARD_BG = "#141414";
export const CARD_BORDER = "rgba(255,255,255,0.09)";

export const CAMPAIGN = { id: "kickoff-2026-27", tag: "kickoff-2026-27" };

export const SUBJECT = "Build the future at Yale AI: kickoff Wed 9/9, free Cursor Pro+ for everyone";
export const PREHEADER =
  "SpaceX-sponsored kickoff at Tsai CITY. Project teams, the Yale AI Fellowship, research showcase, and a month of Cursor Pro+.";

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
  { key: "posterSrc", cid: "poster", file: "poster.jpg", type: "image/jpeg" },
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
      `Yale AI Association kickoff. Sponsored by SpaceX. Everyone who attends gets 1 month of Cursor Pro+ free, ` +
      `and there are Cursor and Grok credits to win at the event. Food. All majors, all class years.\n\n` +
      `Capacity is limited, so RSVP on Luma: ${lumaUrl}\n\nyale-ai.org`,
  });
  return `https://calendar.google.com/calendar/render?${p.toString()}`;
}

const POPPINS = "Poppins, Helvetica, Arial, sans-serif";
const MONO = "Menlo, Consolas, 'Courier New', monospace";
const SANS = "Helvetica, Arial, sans-serif";

const CARD = `border-radius:18px;background:${CARD_BG};border:1px solid ${CARD_BORDER};`;

/**
 * Render the kickoff email.
 * @param {object} o
 * @param {string} [o.firstName]  greeting name; omitted gives "Hey there,"
 * @param {string} [o.lumaUrl]    Luma RSVP link (the primary CTA)
 * @param {string} [o.siteUrl]    yale-ai.org
 * @param {string} [o.logoSrc]    optional wordmark image; empty falls back to text
 * @param {string} [o.posterSrc]  the bazaar banner, shown near the bottom
 * @returns {{subject:string, html:string, text:string}}
 */
export function renderEmail({
  firstName,
  lumaUrl = DEFAULT_LUMA_URL,
  siteUrl = DEFAULT_SITE_URL,
  logoSrc = "",
  posterSrc = "",
} = {}) {
  const k = EVENTS.kickoff;
  const gcal = gcalLink(k, lumaUrl);
  const greeting = firstName ? `Hey ${firstName},` : "Hey there,";
  const unsubMailto = `mailto:${CONTACT_EMAIL}?subject=unsubscribe&body=${encodeURIComponent(
    "Please take me off the Yale AI list.",
  )}`;

  const kicker = `font-family:${MONO};font-size:11px;line-height:16px;letter-spacing:0.12em;text-transform:uppercase;color:${TEAL};`;
  const body = `font-family:${POPPINS};font-weight:400;font-size:16px;line-height:25px;color:#d8d8d8;`;

  // Lime fill, black text, with an Outlook VML fallback.
  const button = (href, label) => `
    <!--[if mso]>
    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${href}" style="height:48px;v-text-anchor:middle;width:230px;" arcsize="50%" stroke="f" fillcolor="${LIME}">
      <w:anchorlock/>
      <center style="color:#0b0b0b;font-family:Arial,sans-serif;font-size:15px;font-weight:bold;">${label}</center>
    </v:roundrect>
    <![endif]-->
    <!--[if !mso]><!-->
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="left"><tr>
      <td align="center" bgcolor="${LIME}" style="border-radius:999px;background:${LIME};">
        <a href="${href}" target="_blank" style="display:block;padding:15px 30px;font-family:${POPPINS};font-size:15px;font-weight:700;color:#0b0b0b;text-decoration:none;white-space:nowrap;border-radius:999px;">${label} &#8594;</a>
      </td>
    </tr></table>
    <!--<![endif]-->`;

  const ghost = (href, label) => `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="left"><tr>
      <td align="center" bgcolor="#1a1a1a" style="border-radius:999px;background:#1a1a1a;border:1px solid rgba(255,255,255,0.2);">
        <a href="${href}" target="_blank" style="display:block;padding:14px 24px;font-family:${POPPINS};font-size:14px;font-weight:600;color:${WHITE};text-decoration:none;white-space:nowrap;border-radius:999px;">${label}</a>
      </td>
    </tr></table>`;

  // Outline pills: inline-block spans in one cell so they wrap on narrow screens.
  const pillRow = PILLS.map(
    (p) =>
      `<span style="display:inline-block;border:1px solid ${LIME};border-radius:999px;padding:6px 13px;margin:0 6px 8px 0;font-family:${POPPINS};font-size:12px;line-height:16px;font-weight:500;color:${LIME};white-space:nowrap;">${p}</span>`,
  ).join("");

  const programRows = PROGRAM.map(
    (item) => `
        <tr>
          <td valign="top" width="18" style="width:18px;padding:0 0 9px 0;font-family:${POPPINS};font-size:16px;line-height:25px;color:${LIME};">&bull;</td>
          <td valign="top" style="padding:0 0 9px 0;${body}">${item}</td>
        </tr>`,
  ).join("");

  const wordmark = logoSrc
    ? `<a href="${siteUrl}" target="_blank" style="text-decoration:none;"><img src="${logoSrc}" width="96" alt="Yale AI" style="width:96px;height:auto;display:block;"></a>`
    : `<a href="${siteUrl}" target="_blank" style="font-family:${POPPINS};font-weight:700;font-size:22px;line-height:28px;letter-spacing:-0.5px;color:${WHITE};text-decoration:none;">Yale AI</a>`;

  const posterBlock = posterSrc
    ? `
  <tr><td align="center" style="padding:34px 30px 0;" class="pad">
    <a href="${lumaUrl}" target="_blank" style="display:block;text-decoration:none;">
      <img src="${posterSrc}" width="540" alt="Yale AI Association kickoff 2026-27 banner" style="width:100%;max-width:540px;height:auto;display:block;border-radius:14px;border:1px solid ${CARD_BORDER};">
    </a>
    <div style="font-family:${MONO};font-size:11px;line-height:18px;letter-spacing:0.06em;color:#7a7a7a;padding-top:10px;">The banner from the EC Bazaar</div>
  </td></tr>`
    : "";

  const html = `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="x-apple-disable-message-reformatting">
<meta name="color-scheme" content="dark">
<meta name="supported-color-schemes" content="dark">
<title>${SUBJECT}</title>
<!--[if mso]>
<xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml>
<style>table,td{font-family:Helvetica,Arial,sans-serif;}</style>
<![endif]-->
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
  :root { color-scheme: dark; supported-color-schemes: dark; }
  html, body { margin:0 !important; padding:0 !important; background:${BG} !important; }
  body { -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; }
  table { border-collapse:separate !important; mso-table-lspace:0; mso-table-rspace:0; }
  img { border:0; line-height:100%; outline:none; text-decoration:none; -ms-interpolation-mode:bicubic; }
  a { color:${LIME}; }
  @media (prefers-color-scheme: dark) {
    .bg { background:${BG} !important; }
    .fg { color:${WHITE} !important; }
    .lm { color:${LIME} !important; }
    .tl { color:${TEAL} !important; }
    .bl { color:${BLUE} !important; }
  }
  [data-ogsc] .bg { background:${BG} !important; }
  [data-ogsc] .fg { color:${WHITE} !important; }
  [data-ogsc] .lm { color:${LIME} !important; }
  [data-ogsc] .tl { color:${TEAL} !important; }
  [data-ogsc] .bl { color:${BLUE} !important; }
  @media only screen and (max-width:620px) {
    .wrap { width:100% !important; }
    .pad { padding-left:18px !important; padding-right:18px !important; }
    .cardpad { padding-left:20px !important; padding-right:20px !important; }
    .hero { font-size:34px !important; line-height:38px !important; }
    .t1 { font-size:22px !important; line-height:28px !important; }
    .date { font-size:22px !important; line-height:28px !important; }
    .stack { display:block !important; width:100% !important; padding:0 0 10px 0 !important; }
  }
</style>
</head>
<body class="bg" style="margin:0;padding:0;background:${BG};" bgcolor="${BG}">
<div style="display:none;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;color:${BG};">
${PREHEADER}${"&#847;&zwnj;&nbsp;".repeat(40)}
</div>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="bg" style="background:${BG};background-image:radial-gradient(680px 420px at 82% 12%, rgba(255,255,255,0.06) 0%, rgba(11,11,11,0) 70%);" bgcolor="${BG}">
<tr><td align="center" style="padding:0;">
<!--[if mso]><table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td><![endif]-->
<table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="wrap" style="width:600px;max-width:600px;background:${BG};" bgcolor="${BG}">

  <!-- top bar -->
  <tr><td style="padding:30px 30px 0;" class="pad">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
      <td align="left" valign="middle">${wordmark}</td>
      <td align="right" valign="middle"><a href="${siteUrl}" target="_blank" class="tl" style="${kicker}text-decoration:none;">yale-ai.org</a></td>
    </tr></table>
  </td></tr>

  <!-- kicker -->
  <tr><td style="padding:30px 30px 0;" class="pad">
    <div class="tl" style="${kicker}">Don&#8217;t get left behind.</div>
  </td></tr>

  <!-- hero -->
  <tr><td style="padding:12px 30px 0;" class="pad">
    <div class="hero fg" style="font-family:${POPPINS};font-weight:700;font-size:42px;line-height:46px;letter-spacing:-1.2px;color:${WHITE};">Build the future at Yale AI.</div>
    <div class="lm" style="font-family:${POPPINS};font-weight:700;font-size:17px;line-height:26px;letter-spacing:0.14em;text-transform:uppercase;color:${LIME};padding-top:12px;">Kickoff 2026-27</div>
  </td></tr>

  <!-- sponsor pill -->
  <tr><td style="padding:16px 30px 0;" class="pad">
    <span style="display:inline-block;border:1px solid ${LIME};border-radius:999px;padding:8px 16px;font-family:${POPPINS};font-size:13px;line-height:18px;font-weight:600;color:${LIME};">Kickoff sponsored by SpaceX</span>
  </td></tr>

  <!-- intro -->
  <tr><td style="padding:24px 30px 0;" class="pad">
    <div class="fg" style="font-family:${POPPINS};font-weight:700;font-size:17px;line-height:26px;color:${WHITE};">${greeting}</div>
    <div style="${body}padding-top:8px;">
      We are the Yale Artificial Intelligence Association. This year we are building, shipping, and putting Yale students in the room with the people making AI.
      Our kickoff is this Wednesday. It is sponsored by SpaceX, and everyone who shows up walks out with
      <span class="lm" style="color:${LIME};font-weight:700;">1 month of Cursor Pro+ free</span>.
    </div>
  </td></tr>

  <!-- event card -->
  <tr><td style="padding:26px 30px 0;" class="pad">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${CARD_BG}" style="${CARD}">
      <tr><td class="cardpad" style="padding:26px 28px 28px;">
        <div class="tl" style="${kicker}">The kickoff</div>
        <div class="date bl" style="font-family:${POPPINS};font-style:italic;font-weight:700;font-size:26px;line-height:32px;letter-spacing:-0.4px;color:${BLUE};padding-top:12px;">${k.dayLine}</div>
        <div class="t1 fg" style="font-family:${POPPINS};font-weight:700;font-size:24px;line-height:30px;color:${WHITE};padding-top:2px;">${k.timeLine}</div>
        <div class="fg" style="font-family:${POPPINS};font-weight:400;font-size:18px;line-height:26px;color:${WHITE};padding-top:2px;">${k.where}</div>

        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:18px;">
          <tr>
            <td valign="top" width="18" style="width:18px;padding:0 0 9px 0;font-family:${POPPINS};font-size:16px;line-height:25px;color:${LIME};">&bull;</td>
            <td valign="top" style="padding:0 0 9px 0;${body}"><span class="lm" style="color:${LIME};font-weight:700;">1 month of Cursor Pro+ free</span> for everyone who attends.</td>
          </tr>
          <tr>
            <td valign="top" width="18" style="width:18px;padding:0 0 9px 0;font-family:${POPPINS};font-size:16px;line-height:25px;color:${LIME};">&bull;</td>
            <td valign="top" style="padding:0 0 9px 0;${body}">Win <span class="lm" style="color:${LIME};font-weight:700;">AI credits</span> at the event: Cursor credits and Grok credits.</td>
          </tr>
          <tr>
            <td valign="top" width="18" style="width:18px;padding:0 0 9px 0;font-family:${POPPINS};font-size:16px;line-height:25px;color:${LIME};">&bull;</td>
            <td valign="top" style="padding:0 0 9px 0;${body}">Food. All majors, all class years welcome.</td>
          </tr>
          <tr>
            <td valign="top" width="18" style="width:18px;padding:0;font-family:${POPPINS};font-size:16px;line-height:25px;color:${LIME};">&bull;</td>
            <td valign="top" style="padding:0;${body}">Capacity is limited. RSVP on Luma to attend.</td>
          </tr>
        </table>

        <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:22px;"><tr>
          <td class="stack" style="padding:0 10px 0 0;">${button(lumaUrl, "RSVP on Luma")}</td>
          <td class="stack">${ghost(gcal, "Add to calendar")}</td>
        </tr></table>
      </td></tr>
    </table>
  </td></tr>

  <!-- what we are doing this year -->
  <tr><td style="padding:22px 30px 0;" class="pad">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${CARD_BG}" style="${CARD}">
      <tr><td class="cardpad" style="padding:26px 28px 28px;">
        <div class="tl" style="${kicker}">What Yale AI is doing this year</div>
        <div style="padding-top:14px;font-size:0;line-height:0;">${pillRow}</div>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:12px;">${programRows}
        </table>
      </td></tr>
    </table>
  </td></tr>

  <!-- closer -->
  <tr><td style="padding:30px 30px 0;" class="pad">
    <div class="t1 fg" style="font-family:${POPPINS};font-weight:700;font-size:26px;line-height:33px;letter-spacing:-0.5px;color:${WHITE};">Want free Cursor and Grok credits, a month of Cursor Pro+, and a real seat at what Yale AI is building?</div>
    <div style="${body}padding-top:8px;font-style:italic;">Yeah, we thought so.</div>
  </td></tr>

  <tr><td style="padding:22px 30px 0;" class="pad">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
      <td class="stack" style="padding:0 10px 0 0;">${button(lumaUrl, "RSVP on Luma")}</td>
      <td class="stack">${ghost(siteUrl, "yale-ai.org")}</td>
    </tr></table>
  </td></tr>
${posterBlock}

  <!-- footer -->
  <tr><td style="padding:38px 30px 40px;" class="pad">
    <div style="border-top:1px solid ${CARD_BORDER};padding-top:22px;">
      <div class="fg" style="font-family:${POPPINS};font-weight:700;font-size:14px;line-height:22px;color:${WHITE};">Questions? Just reply to this email.</div>
      <div style="font-family:${SANS};font-size:12px;line-height:19px;color:#8a8a8a;padding-top:4px;">
        It goes to <a href="mailto:${CONTACT_EMAIL}" style="color:#a9a9a9;text-decoration:none;">${CONTACT_EMAIL}</a>, and a fellow Yale student writes back.
      </div>
      <div style="font-family:${SANS};font-size:11px;line-height:18px;color:#6f6f6f;padding-top:16px;">
        &copy; 2026 Yale Artificial Intelligence Association &nbsp;&middot;&nbsp;
        <a href="${siteUrl}" style="color:${LIME};text-decoration:none;">yale-ai.org</a><br>
        Student-run and independent of Yale University. You are on this list because you signed up at the EC Bazaar, our website, or a past event.
        To stop, reply &#8220;unsubscribe&#8221; or <a href="${unsubMailto}" style="color:#8a8a8a;text-decoration:underline;">click here to unsubscribe</a>.
      </div>
    </div>
  </td></tr>

</table>
<!--[if mso]></td></tr></table><![endif]-->
</td></tr>
</table>
</body>
</html>`;

  const text = `YALE AI ASSOCIATION (${siteUrl})
DON'T GET LEFT BEHIND.

BUILD THE FUTURE AT YALE AI.
Kickoff 2026-27. Sponsored by SpaceX.

${greeting}

We are the Yale Artificial Intelligence Association. This year we are building, shipping, and putting Yale students in the room with the people making AI. Our kickoff is this Wednesday. It is sponsored by SpaceX, and everyone who shows up walks out with 1 month of Cursor Pro+ free.

THE KICKOFF
${k.dayLine}, ${k.timeLine}
${k.where}

  - 1 month of Cursor Pro+ free for everyone who attends.
  - Win AI credits at the event: Cursor credits and Grok credits.
  - Food. All majors, all class years welcome.
  - Capacity is limited. RSVP on Luma to attend.

RSVP on Luma: ${lumaUrl}
Add to Google Calendar: ${gcal}

WHAT YALE AI IS DOING THIS YEAR
  - Project teams that actually ship. Every team demos at our fall demo day.
  - The Yale AI Fellowship: a structured, application-based program.
  - Our research showcase. Last year it was 10 labs and 100 attendees.
  - Biweekly hands-on workshops: coding agents, AI-native workflows, mini hackathons.
  - A fireside chat with a climate-AI founder in November.
  - A company trip in the spring.
  - Connections to frontier AI companies.
  - AI x medicine and AI x finance verticals.

Want free Cursor and Grok credits, a month of Cursor Pro+, and a real seat at what Yale AI is building? Yeah, we thought so.

RSVP on Luma: ${lumaUrl}
More about us: ${siteUrl}

Questions? Just reply to this email. It goes to ${CONTACT_EMAIL}, and a fellow Yale student writes back.

(c) 2026 Yale Artificial Intelligence Association - yale-ai.org
Student-run and independent of Yale University. You are on this list because you signed up at the EC Bazaar, our website, or a past event. To stop, reply "unsubscribe".
`;

  return { subject: SUBJECT, html, text };
}
