// Yale AI Association: 2026-27 kickoff email.
//
// Goes to everyone who signed up at the EC Bazaar plus the rest of the Yale
// College list, so it has to work for people who have never heard of us.
//
// Visual language: the landing page (yale-ai.org), in email form. Black
// ground, a serif display face over a clean sans, glass cards, the Grok Bot
// whole beside the kickoff card, the year in one glance, the MIT-IBM trip,
// one lime button. Table-based and inline-styled so it survives Gmail, Apple
// Mail, and Outlook. Images are hosted, never attached.

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
  { key: "markSrc", cid: "mark", file: "mark.png", type: "image/png" },
  { key: "sponsorLogoSrc", cid: "spacexai", file: "spacexai.png", type: "image/png" },
  { key: "botSrc", cid: "bot", file: "bot-full.png", type: "image/png" },
  { key: "photo1Src", cid: "photo1", file: "mit-ibm-1.jpg", type: "image/jpeg" },
  { key: "photo2Src", cid: "photo2", file: "mit-ibm-2.jpg", type: "image/jpeg" },
  { key: "quoteAvatarSrc", cid: "rauch", file: "rauch.png", type: "image/png" },
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

const SERIF = "'Instrument Serif', Georgia, 'Times New Roman', serif";
const SANS = "'Instrument Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif";
const MONO = "Menlo, Consolas, 'Courier New', monospace";

// The year, in order, as on the site.
export const THIS_YEAR = [
  ["Wed, Sep 9", "Kickoff, sponsored by SpaceXAI", "A month of Cursor Pro+ for everyone in the room, an exclusive Grok Bot demo, a competition for SpaceXAI credits, boba."],
  ["Opens at the kickoff", "Yale AI Fellowship", "A structured cohort with a curriculum run by the board. Finish it and you have something real to point to."],
  ["Fall", "Project teams and demo day", "Small teams, paired with a professor or grad student, shipping one real thing. A poster-session demo day closes the term."],
  ["Every other week", "Hands-on workshops", "Coding agents, AI-native workflows, mini hackathons. Build an agent that runs your classes."],
  ["Nov 10", "Fireside chat with a climate-AI founder", "In partnership with SciCity. We lead the conversation, you bring the questions."],
  ["Fall", "Research showcase", "Ten Yale labs, grad students presenting to undergrads. Last year a hundred people came."],
  ["Spring", "Company trip", "A day inside a frontier company. SpaceX New York and Cursor are on the shortlist."],
  ["May", "Yale AI Symposium", "Project teams get a stage in front of the whole Yale AI community."],
];

/**
 * Render the kickoff email.
 * @param {object} o
 * @param {string} [o.firstName]       greeting name; omitted gives "Hey there,"
 * @param {string} [o.lumaUrl]         Luma RSVP link (the primary CTA)
 * @param {string} [o.siteUrl]         yale-ai.org
 * @param {string} [o.markSrc]         the graph-Y mark; empty falls back to text
 * @param {string} [o.sponsorLogoSrc]  the SpaceXAI wordmark; empty falls back to text
 * @param {string} [o.botSrc]          the Grok Bot, whole; empty drops it
 * @param {string} [o.photo1Src]       MIT-IBM Watson AI Lab, the talk
 * @param {string} [o.photo2Src]       MIT-IBM Watson AI Lab, the group
 * @param {string} [o.quoteAvatarSrc]  Guillermo Rauch's avatar; empty shows initials
 * @returns {{subject:string, html:string, text:string}}
 */
export function renderEmail({
  firstName,
  lumaUrl = DEFAULT_LUMA_URL,
  siteUrl = DEFAULT_SITE_URL,
  markSrc = "",
  sponsorLogoSrc = "",
  botSrc = "",
  photo1Src = "",
  photo2Src = "",
  quoteAvatarSrc = "",
} = {}) {
  const k = EVENTS.kickoff;
  const gcal = gcalLink(k, lumaUrl);
  const greeting = firstName ? `Hey ${firstName},` : "Hey there,";
  const unsubMailto = `mailto:${CONTACT_EMAIL}?subject=unsubscribe&body=${encodeURIComponent("Please take me off the Yale AI list.")}`;

  const pixel = `font-family:${MONO};font-size:10px;line-height:15px;letter-spacing:0.16em;text-transform:uppercase;color:${TEAL};`;
  const label = `font-family:${SANS};font-size:11px;line-height:16px;letter-spacing:0.18em;text-transform:uppercase;color:#8d8d8d;`;
  const body = `font-family:${SANS};font-weight:400;font-size:16px;line-height:26px;color:#c9c9c9;`;
  const serif = `font-family:${SERIF};font-weight:400;color:${WHITE};`;
  const CARD = `border-radius:22px;background:${CARD_BG};border:1px solid ${CARD_BORDER};`;

  const sponsor = sponsorLogoSrc
    ? `<img src="${sponsorLogoSrc}" width="112" height="15" alt="SpaceXAI" style="width:112px;height:15px;display:inline-block;vertical-align:-1px;border:0;">`
    : `<span style="font-family:${SANS};font-weight:700;letter-spacing:0.2em;color:${WHITE};">SPACEXAI</span>`;
  const sponsorBig = sponsorLogoSrc
    ? `<img src="${sponsorLogoSrc}" width="210" height="28" alt="SpaceXAI" style="width:210px;height:28px;display:inline-block;vertical-align:-3px;border:0;">`
    : `<span style="font-family:${SANS};font-weight:700;letter-spacing:0.2em;color:${WHITE};">SPACEXAI</span>`;

  const button = (href, text) => `
    <!--[if mso]>
    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${href}" style="height:46px;v-text-anchor:middle;width:230px;" arcsize="50%" stroke="f" fillcolor="${LIME}">
      <w:anchorlock/><center style="color:#000000;font-family:Arial,sans-serif;font-size:15px;font-weight:bold;">${text}</center>
    </v:roundrect>
    <![endif]-->
    <!--[if !mso]><!-->
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="left"><tr>
      <td align="center" bgcolor="${LIME}" style="border-radius:999px;background:${LIME};">
        <a href="${href}" target="_blank" style="display:block;padding:14px 26px;font-family:${SANS};font-size:15px;font-weight:700;color:#000000;text-decoration:none;white-space:nowrap;border-radius:999px;">${text} &#8594;</a>
      </td>
    </tr></table>
    <!--<![endif]-->`;
  const ghost = (href, text) => `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="left"><tr>
      <td align="center" bgcolor="#1c1c1c" style="border-radius:999px;background:#1c1c1c;border:1px solid rgba(255,255,255,0.18);">
        <a href="${href}" target="_blank" style="display:block;padding:13px 22px;font-family:${SANS};font-size:14px;font-weight:600;color:${WHITE};text-decoration:none;white-space:nowrap;border-radius:999px;">${text}</a>
      </td>
    </tr></table>`;

  const wordmark = `<a href="${siteUrl}" target="_blank" style="text-decoration:none;font-family:${SANS};font-weight:700;font-size:20px;line-height:24px;letter-spacing:-0.5px;color:${WHITE};">${
    markSrc ? `<img src="${markSrc}" width="24" height="24" alt="" style="width:24px;height:24px;display:inline-block;vertical-align:-5px;margin-right:8px;border:0;">` : ""
  }Yale AI</a>`;

  const yearRows = [];
  for (let i = 0; i < THIS_YEAR.length; i += 2) {
    const cell = (item) =>
      item
        ? `<td class="stack" valign="top" width="50%" style="width:50%;padding:0 8px 16px 0;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="${CARD}"><tr><td style="padding:18px 18px 16px;">
              <div style="${pixel}color:${TEAL};">${item[0]}</div>
              <div style="font-family:${SANS};font-size:16px;line-height:21px;font-weight:700;color:${WHITE};padding-top:8px;">${item[1]}</div>
              <div style="font-family:${SANS};font-size:13px;line-height:20px;color:#9a9a9a;padding-top:6px;">${item[2]}</div>
            </td></tr></table>
          </td>`
        : `<td class="stack" width="50%"></td>`;
    yearRows.push(`<tr>${cell(THIS_YEAR[i])}${cell(THIS_YEAR[i + 1])}</tr>`);
  }

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
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Instrument+Sans:wght@400;500;600;700&display=swap');
  :root { color-scheme: dark; supported-color-schemes: dark; }
  body { margin:0; padding:0; background:#000000; }
  img { border:0; outline:none; text-decoration:none; -ms-interpolation-mode:bicubic; }
  table { border-collapse:collapse; mso-table-lspace:0; mso-table-rspace:0; }
  a { color:${WHITE}; }
  @media (max-width:620px) {
    .wrap { width:100% !important; }
    .pad { padding-left:20px !important; padding-right:20px !important; }
    .stack { display:block !important; width:100% !important; padding-right:0 !important; }
    .bot-cell { display:none !important; }
    .h1 { font-size:36px !important; line-height:40px !important; }
  }
  [data-ogsc] body, [data-ogsc] .bg { background:#000000 !important; }
</style>
</head>
<body style="margin:0;padding:0;background:#000000;">
<div style="display:none;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;">${PREHEADER}${"&#847;&zwnj;&nbsp;".repeat(40)}</div>
<table role="presentation" class="bg" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#000000" style="background:#000000;">
<tr><td align="center" style="padding:24px 12px 40px;">
<!--[if mso]><table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
<table role="presentation" class="wrap" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;">

  <!-- header: Yale AI x SpaceXAI -->
  <tr><td class="pad" style="padding:6px 6px 30px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
      <td align="left" valign="middle">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
          <td valign="middle">${wordmark}</td>
          <td valign="middle" style="padding:0 12px;font-family:${SANS};font-size:16px;line-height:24px;color:#6f6f6f;">&#215;</td>
          <td valign="middle">${sponsor}</td>
        </tr></table>
      </td>
      <td align="right" valign="middle" style="${label}color:${LIME};">Kickoff 2026&#8211;27</td>
    </tr></table>
  </td></tr>

  <!-- hero, centred, as on the site -->
  <tr><td class="pad" align="center" style="padding:0 6px;">
    <div style="display:inline-block;border:1px solid ${CARD_BORDER};border-radius:999px;background:${CARD_BG};padding:8px 14px;font-family:${SANS};font-size:12px;line-height:16px;color:#9a9a9a;"><span style="color:${WHITE};font-weight:600;">Kickoff is Wednesday, Sep 9</span> &nbsp;&middot;&nbsp; a month of Cursor Pro+ for everyone, free credits, giveaways, more</div>
    <div class="h1" style="${serif}font-size:44px;line-height:48px;letter-spacing:-0.5px;padding-top:22px;">Build the <span style="font-weight:600;">future of AI</span> at Yale.</div>
    <div style="${serif}font-size:32px;line-height:40px;color:#a7a7a7;padding-top:6px;">Now backed by ${sponsorBig}</div>
    <div style="${body}font-size:15px;line-height:24px;padding-top:18px;max-width:520px;margin:0 auto;">The people behind Grok are sponsoring our kickoff, so <span style="color:${WHITE};font-weight:600;">frontier-lab tools, credits, and people</span> are coming to campus. Project teams that ship, a fellowship, a research showcase, a direct line to the labs. <span style="color:${WHITE};font-weight:600;">All builders and people interested in AI are invited. All years.</span></div>
    <table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0"><tr>
      <td class="stack" style="padding:22px 10px 0 0;">${button(lumaUrl, "RSVP for the kickoff")}</td>
      <td class="stack" style="padding:22px 0 0 0;">${ghost(siteUrl + "/team", "Meet the board")}</td>
    </tr></table>
    <div style="${pixel}color:#6f6f6f;text-transform:none;letter-spacing:0.02em;font-size:11px;padding-top:16px;">built by Yalies who ship. no AI experience required.</div>
  </td></tr>

  <!-- greeting -->
  <tr><td class="pad" style="padding:34px 6px 0;">
    <div style="font-family:${SANS};font-size:17px;line-height:24px;font-weight:600;color:${WHITE};">${greeting}</div>
    <div style="${body}padding-top:10px;">Every year a few hundred people at Yale say they want to get into AI. Most never start. <span style="color:${WHITE};font-weight:600;">This Wednesday</span> we make starting the easy part: show up, get the tools the frontier labs actually use, and pick a project team, a fellowship cohort, or both. It is sponsored by SpaceXAI, and everyone who shows up walks out with <span style="color:${WHITE};font-weight:700;">1 month of Cursor Pro+ free</span>. Seriously :).</div>
  </td></tr>

  <!-- kickoff card with the bot -->
  <tr><td style="padding:26px 0 0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="${CARD}"><tr>
      <td class="pad" valign="middle" style="padding:28px 8px 28px 28px;">
        <div style="${pixel}">Kickoff night. Free perks for everyone in the room.</div>
        <div style="${label}padding-top:6px;">Powered by&nbsp;&nbsp;${sponsor}</div>
        <div style="font-family:${SANS};font-size:19px;line-height:26px;font-weight:600;color:${WHITE};padding-top:14px;">Fancy a month of Cursor Pro+, an exclusive Grok Bot demo, a competition for SpaceXAI credits, and free boba? <span style="color:${LIME};">Yeah, we thought so.</span></div>
        <div style="font-family:${SANS};font-size:24px;line-height:30px;font-weight:700;color:${WHITE};padding-top:16px;">${k.dayLine}</div>
        <div style="font-family:${SANS};font-size:20px;line-height:26px;font-weight:700;color:${LIME};">${k.timeLine}</div>
        <div style="font-family:${SANS};font-size:15px;line-height:22px;color:#a7a7a7;padding-top:2px;">${k.where}</div>
        <div style="${body}font-size:14px;line-height:22px;padding-top:12px;">Limited capacity, filled from the RSVP list. Fellowship and project-team applications open in the room. No AI experience needed.</div>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
          <td class="stack" style="padding:18px 10px 0 0;">${button(lumaUrl, "RSVP on Luma")}</td>
          <td class="stack" style="padding:18px 0 0 0;">${ghost(gcal, "Add to calendar")}</td>
        </tr></table>
      </td>
      ${botSrc ? `<td class="bot-cell" valign="middle" align="center" width="190" style="width:190px;padding:0 24px 0 0;"><img src="${botSrc}" width="170" alt="" style="width:170px;height:auto;display:block;border:0;"></td>` : ""}
    </tr></table>
  </td></tr>

  <!-- this year -->
  <tr><td class="pad" align="center" style="padding:44px 6px 18px;">
    <div style="${pixel}">This year, in one glance</div>
    <div style="${serif}font-size:34px;line-height:40px;padding-top:12px;">A club with <span style="font-weight:600;">real outputs</span>, not a mailing list.</div>
    <div style="${body}font-size:14px;line-height:22px;padding-top:10px;max-width:500px;margin:0 auto;">Everything below has a date, an owner on the board, and a way in. Applications for the fellowship and the project teams open at the kickoff.</div>
  </td></tr>
  <tr><td style="padding:0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${yearRows.join("")}</table>
  </td></tr>

  <!-- connections: the MIT-IBM trip -->
  <tr><td style="padding:28px 0 0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="${CARD}"><tr><td class="pad" style="padding:28px 28px 26px;">
      <div style="${pixel}">Connections</div>
      <div style="${serif}font-size:30px;line-height:36px;padding-top:10px;">Last spring we sat in the <span style="font-weight:600;"><span style="color:#a31f34;">MIT</span>-<span style="color:#4589ff;">IBM</span> Watson AI Lab.</span></div>
      ${photo1Src && photo2Src ? `
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="padding-top:18px;"><tr>
        <td width="58%" valign="top" style="padding:0 6px 0 0;"><img src="${photo1Src}" width="310" alt="A talk in the MIT-IBM Watson AI Lab auditorium" style="width:100%;height:auto;display:block;border-radius:14px;border:0;"></td>
        <td width="42%" valign="top" style="padding:0 0 0 6px;"><img src="${photo2Src}" width="220" alt="Yale AI members outside the MIT-IBM Watson AI Lab" style="width:100%;height:auto;display:block;border-radius:14px;border:0;"></td>
      </tr></table>
      <div style="font-family:${MONO};font-size:11px;line-height:16px;color:#6f6f6f;padding-top:10px;">spring 2026 &middot; MIT-IBM Watson AI Lab, Boston, MA</div>` : ""}
      <div style="${body}font-size:15px;line-height:24px;padding-top:16px;">A room of Yale students, a lab director at the front, and the kind of conversation you cannot get from a lecture hall. That is one trip. This year the kickoff is backed by SpaceXAI, the spring trip has SpaceX New York and Cursor on the shortlist, and we are building the pipeline out from there.</div>
      <div style="font-family:${SANS};font-size:15px;line-height:24px;font-weight:600;color:${WHITE};padding-top:12px;">We have numerous top companies in the pipeline to connect you with. Being in the room is the whole point.</div>
      <div style="padding-top:14px;">
        <span style="display:inline-block;border:1px solid ${LIME};border-radius:999px;padding:6px 12px;margin:0 6px 8px 0;font-family:${SANS};font-size:12px;line-height:16px;color:${WHITE};">${sponsor}</span><span style="display:inline-block;border:1px solid ${LIME};border-radius:999px;padding:6px 12px;margin:0 6px 8px 0;font-family:${SANS};font-size:12px;line-height:16px;color:${WHITE};">Cursor</span><span style="display:inline-block;border:1px solid ${LIME};border-radius:999px;padding:6px 12px;margin:0 6px 8px 0;font-family:${SANS};font-size:12px;line-height:16px;color:${WHITE};">OpenAI</span><span style="display:inline-block;border:1px solid ${LIME};border-radius:999px;padding:6px 12px;margin:0 6px 8px 0;font-family:${SANS};font-size:12px;line-height:16px;color:${WHITE};">MIT-IBM Watson AI Lab</span><span style="display:inline-block;border:1px dashed #555;border-radius:999px;padding:6px 12px;margin:0 6px 8px 0;font-family:${SANS};font-size:12px;line-height:16px;color:#8d8d8d;">more in the pipeline</span>
      </div>
    </td></tr></table>
  </td></tr>

  <!-- the time is now -->
  <tr><td class="pad" style="padding:40px 6px 0;"><div style="${pixel}">The time is now</div></td></tr>
  <tr><td style="padding:12px 0 0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="${CARD}"><tr><td class="pad" style="padding:24px 28px 24px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
        <td valign="middle" width="44" style="width:44px;padding:0 12px 0 0;">${quoteAvatarSrc ? `<img src="${quoteAvatarSrc}" width="44" height="44" alt="" style="width:44px;height:44px;border-radius:50%;display:block;border:0;">` : `<div style="width:44px;height:44px;border-radius:50%;background:#2a2a2a;font-family:${SANS};font-size:15px;line-height:44px;text-align:center;font-weight:700;color:${WHITE};">GR</div>`}</td>
        <td valign="middle">
          <div style="font-family:${SANS};font-size:15px;line-height:20px;font-weight:700;color:${WHITE};">Guillermo Rauch <span style="display:inline-block;background:#0a66c2;color:#fff;border-radius:3px;font-size:10px;line-height:14px;padding:0 4px;font-weight:700;vertical-align:1px;margin-left:4px;">in</span></div>
          <div style="font-family:${SANS};font-size:13px;line-height:18px;color:#8d8d8d;">CEO at Vercel</div>
        </td>
      </tr></table>
      <div style="${body}font-size:15px;line-height:24px;color:#e6e6e6;padding-top:14px;">Anyone that works in AI is working the hardest they&#8217;ve ever worked in their lives. On the surface it&#8217;s somewhat ironic (AI should give us back time!), but the reality is that it&#8217;s the most fun, fascinating and empowering epoch in human history. <span style="color:${WHITE};font-weight:700;">The intelligence revolution.</span></div>
    </td></tr></table>
  </td></tr>

  <!-- close -->
  <tr><td class="pad" align="center" style="padding:40px 6px 34px;">
    <div style="${serif}font-size:40px;line-height:44px;">Let&#8217;s do this.</div>
    <div style="${body}font-size:15px;line-height:24px;padding-top:12px;max-width:500px;margin:0 auto;">The people who build the next decade are picking rooms right now. Pick this one. Come Wednesday, and bring a friend who thinks AI is not for them.</div>
    <table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0"><tr>
      <td class="stack" style="padding:22px 10px 0 0;">${button(lumaUrl, "RSVP on Luma")}</td>
      <td class="stack" style="padding:22px 0 0 0;">${ghost(siteUrl, "yale-ai.org")}</td>
    </tr></table>
  </td></tr>

  <!-- footer -->
  <tr><td class="pad" style="padding:30px 6px 0;border-top:1px solid #1e1e1e;">
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

  const text = `YALE AI x SPACEXAI. KICKOFF 2026-27 (${siteUrl})

BUILD THE FUTURE OF AI AT YALE. NOW BACKED BY SPACEXAI.
Kickoff is Wednesday, Sep 9. A month of Cursor Pro+ for everyone, free credits, giveaways, more.

The people behind Grok are sponsoring our kickoff, so frontier-lab tools, credits, and people are coming to campus. Project teams that ship, a fellowship, a research showcase, a direct line to the labs. All builders and people interested in AI are invited. All years.

RSVP for the kickoff: ${lumaUrl}
Meet the board: ${siteUrl}/team

${greeting}

Every year a few hundred people at Yale say they want to get into AI. Most never start. This Wednesday we make starting the easy part: show up, get the tools the frontier labs actually use, and pick a project team, a fellowship cohort, or both. It is sponsored by SpaceXAI, and everyone who shows up walks out with 1 month of Cursor Pro+ free. Seriously :).

THE KICKOFF (powered by SpaceXAI)
Fancy a month of Cursor Pro+, an exclusive Grok Bot demo, a competition for SpaceXAI credits, and free boba? Yeah, we thought so.
${k.dayLine}, ${k.timeLine}
${k.where}
Limited capacity, filled from the RSVP list. Fellowship and project-team applications open in the room. No AI experience needed.

RSVP on Luma: ${lumaUrl}
Add to Google Calendar: ${gcal}

THIS YEAR, IN ONE GLANCE
${THIS_YEAR.map(([w, t, l]) => `  - ${w}: ${t}. ${l}`).join("\n")}

CONNECTIONS
Last spring we sat in the MIT-IBM Watson AI Lab in Boston. A room of Yale students, a lab director at the front, and the kind of conversation you cannot get from a lecture hall. This year the kickoff is backed by SpaceXAI, the spring trip has SpaceX New York and Cursor on the shortlist, and we are building the pipeline out from there. We have numerous top companies in the pipeline to connect you with. Being in the room is the whole point.

THE TIME IS NOW
Guillermo Rauch, CEO at Vercel, on LinkedIn:
"Anyone that works in AI is working the hardest they've ever worked in their lives. On the surface it's somewhat ironic (AI should give us back time!), but the reality is that it's the most fun, fascinating and empowering epoch in human history. The intelligence revolution."

LET'S DO THIS.
The people who build the next decade are picking rooms right now. Pick this one. Come Wednesday, and bring a friend who thinks AI is not for them.

RSVP on Luma: ${lumaUrl}
More about us: ${siteUrl}

Questions? Just reply to this email. It goes to the Yale AI leadership (fellow Yale students).

(c) 2026 Yale Artificial Intelligence Association - yale-ai.org
Student-run and independent of Yale University. You are on this list because you signed up at the EC Bazaar, our website, or a past event. To stop, reply "unsubscribe".
`;

  return { subject: SUBJECT, html, text };
}
