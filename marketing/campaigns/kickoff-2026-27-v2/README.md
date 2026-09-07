# kickoff-2026-27-v2

The 2026-27 kickoff email again, in a new look. Same audience, same facts, same subject
and preheader as `kickoff-2026-27`. What changed is the design: it borrows the structure
and email techniques of the Yale rover kickoff email (a black stage over engineering
paper, a badge pill, a serif headline with one accent word, three short italic lines, one
big glass event card with a shiny pill CTA and a ghost secondary, a polaroid strip, a
backers strip), rebuilt in Yale AI's own colors, fonts, wordmark, and voice.

Brand: `#000000` ground, white text, lime `#d9e4a8` for the badge, pills, kickers, and the
primary button, teal `#4fd8c8` for the single accent word in the headline, blue `#6ea8ff`
once. Instrument Serif for headings and italic lines (Georgia fallback), Instrument Sans
for everything else (Helvetica fallback). Cards are `#121212` with a 20px radius and a 1px
`rgba(255,255,255,0.12)` border. Max width 640.

## The event

| | |
| --- | --- |
| What | Yale AI Association kickoff, sponsored by SpaceXAI |
| When | Wednesday, September 9, 2026, 8:00 to 9:30 PM (America/New_York) |
| Where | Tsai CITY, ground floor |
| RSVP | https://luma.com/o5g51mh0 |

Everyone who attends gets 1 month of Cursor Pro+ free. There are Cursor and Grok credits
to win at the event. Food. All majors, all class years. Capacity is limited, so attending
requires an RSVP on Luma.

## Files

- `email.js` exports the same names as v1 (`CAMPAIGN`, `SUBJECT`, `PREHEADER`, `EVENTS`,
  `ASSETS`, `PILLS`, `PROGRAM`, `THIS_YEAR`, `PHOTOS`, `gcalLink`, and
  `renderEmail({ firstName, lumaUrl, siteUrl, ...imageProps })`), so `preview`, `send`,
  and `check` work unchanged with `--campaign kickoff-2026-27-v2`.
- `CAMPAIGN.tag` is `kickoff-2026-27`, shared with v1, so Resend analytics keeps one
  bucket for the event. The ledger and the idempotency key use the id, so dedupe is per
  folder as usual.
- `assets/` is a subset of v1's, picked for a black ground:
  - `mark.png`: the graph-Y mark on its own black ground (`mark-white.png` sits on a white
    tile and would punch a hole in the stage).
  - `spacexai.png` and `mit-ibm-lab-2.png`: the white-on-transparent marks. `mit.png` and
    `rauch.png` as in v1.
  - `mit-ibm-1.jpg`, `mit-ibm-2-43.jpg`, `mit-ibm-3.jpg`: the polaroid strip.
    `mit-ibm-2-43.jpg` is a 4:3 centre crop of v1's square `mit-ibm-2-sq.jpg` so the three
    frames share one height.
  - `grid.png`: a 100px engineering-paper tile (20px minor lines, a lime major line) that
    sits behind the hero. Clients that drop background images fall back to plain black.
- `sent.tsv` is the send ledger. Do not hand-edit it unless you intend to re-send.

The hosted copies live in `marketing/hosted/kickoff-2026-27-v2/` and deploy with
`vercel --prod` from `marketing/hosted/` (see `hosted/README.md`).

## Preview

```sh
npm run preview -- --campaign kickoff-2026-27-v2
open out/kickoff-2026-27-v2.html
open out/kickoff-2026-27-v2-personalised.html
```

Run from `marketing/`. Images are inlined as data URIs in the preview only.

## Send

Read the send lock section of `marketing/README.md` first. The short version:

```sh
# always start here
node scripts/send.js --campaign kickoff-2026-27-v2 --list yale-college-2027-2030.txt --dry-run

# a test to yourself
node scripts/send.js --campaign kickoff-2026-27-v2 --to filippo.fonseca@yale.edu

# the real thing, in waves, once SEND_LOCK is off
node scripts/send.js --campaign kickoff-2026-27-v2 --list yale-college-2027-2030.txt --limit 500
```

If both v1 and v2 go to the same list, the ledgers are separate, so run the list through
only one of them.

## Copy notes

Tone is the site: short sentences, confident, no hedging. "Built by Yalies who ship."
"Yes. You." "Let's do this." No em dashes or en dashes anywhere; commas, colons, periods,
and parentheses instead. Only the facts above are claimed. The backers strip pairs the
SpaceXAI mark with the MIT-IBM Watson AI Lab and MIT marks, captioned honestly: SpaceXAI
powers the kickoff, the other two hosted us last spring.
