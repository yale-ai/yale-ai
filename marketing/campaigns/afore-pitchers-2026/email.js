// Afore fireside, Wednesday November 4, 2026: the note to the students selected to pitch.
//
// A personal email from Filippo, not a campaign: no banner, no logo, no footer, just a
// few paragraphs in the client's default look. One link, to the Luma page. Each
// recipient gets their own copy with their first name, and replies go to Filippo.

export const CAMPAIGN = { id: "afore-pitchers-2026", tag: "afore-pitchers-2026" };

export const FROM = "Filippo Fonseca <filippo@yale-ai.org>";
export const REPLY_TO = ["filippo.fonseca@yale.edu"];

export const SUBJECT = "You've been selected to pitch Afore Capital on 11/4";
export const PREHEADER = "Congratulations! Two minutes to pitch, one minute of Q&A, at Tsai CITY on Wednesday.";

export const LUMA_URL = "https://luma.com/3qmnfwtw";

export const ASSETS = [];
export const FILES = [];

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/**
 * Render the pitcher notification.
 * @param {object} o
 * @param {string} [o.firstName]   greeting name; omitted gives "Hi,"
 * @param {string} [o.lumaUrl]     the event's Luma page
 * @returns {{subject:string, html:string, text:string}}
 */
export function renderEmail({ firstName, lumaUrl = LUMA_URL } = {}) {
  const greeting = firstName ? `Dear ${esc(firstName)},` : "Hi,";
  const greetingText = firstName ? `Dear ${firstName},` : "Hi,";
  const p = "margin:0 0 14px;";

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${SUBJECT}</title>
</head>
<body style="margin:0;padding:0;">
<div style="display:none;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;">${esc(PREHEADER)}${"&#847;&zwnj;&nbsp;".repeat(40)}</div>
<div style="max-width:600px;padding:16px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:22px;color:#222222;">
<p style="${p}">${greeting}</p>
<p style="${p}">Congratulations! Afore Capital would love to hear you pitch to them on Wednesday, November 4th at Tsai CITY during <a href="${lumaUrl}" target="_blank" style="color:#1a55d6;">Nathan Yu&#8217;s fireside chat</a>.</p>
<p style="${p}">We&#8217;ll ask that you keep your pitch to no more than 2 minutes, allowing for a 1 minute Q&amp;A. If you go over two minutes, you can go up to three minutes, but will lose the chance to answer questions from Afore.</p>
<p style="${p}">You will pitch after Nathan&#8217;s speech and Q&amp;A in front of everyone present (~100 fellow Yale students) at Tsai! The event runs from 4:30 to 6:30 PM, as you know.</p>
<p style="${p}">Please reply by end of day Tuesday confirming you&#8217;d still like to pitch Afore; it doesn&#8217;t have to be the idea you submitted on the Luma!</p>
<p style="margin:0;">Best regards,<br>Filippo<br>Afore Capital Scout<br>Davenport &#8217;28</p>
</div>
</body>
</html>`;

  const text = `${greetingText}

Congratulations! Afore Capital would love to hear you pitch to them on Wednesday, November 4th at Tsai CITY during Nathan Yu's fireside chat (${lumaUrl}).

We'll ask that you keep your pitch to no more than 2 minutes, allowing for a 1 minute Q&A. If you go over two minutes, you can go up to three minutes, but will lose the chance to answer questions from Afore.

You will pitch after Nathan's speech and Q&A in front of everyone present (~100 fellow Yale students) at Tsai! The event runs from 4:30 to 6:30 PM, as you know.

Please reply by end of day Tuesday confirming you'd still like to pitch Afore; it doesn't have to be the idea you submitted on the Luma!

Best regards,
Filippo
Afore Capital Scout
Davenport '28
`;

  return { subject: SUBJECT, html, text };
}
