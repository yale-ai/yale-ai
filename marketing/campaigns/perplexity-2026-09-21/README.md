# perplexity-2026-09-21

The Perplexity recruiting event email for the Yale Artificial Intelligence Association.
One event, one ask: sign up on Luma.

## The event

| | |
| --- | --- |
| What | Perplexity at Yale: an hour with the recruiting team, then a live coding competition |
| When | Monday, September 21, 2026, 6:30 to 9:00 PM (America/New_York) |
| Where | Tsai CITY |
| Sign up | https://luma.com/f7vu165w |

Top performers in the coding competition are selected for an interview for Perplexity's
new grad Member of Technical Staff (MTS) roles. Prizes include Perplexity Max
subscriptions and thousands of dollars in API credits. Free food and drinks. Spots are
limited and registration is required.

Subject: "Perplexity at Yale this Monday: recruiting, a live coding competition, and prizes"

Preheader: "Monday 9/21, 6:30 to 9:00 PM at Tsai CITY. Interviews for new grad MTS roles,
Perplexity Max, API credits, free food."

## Files

- `email.js` exports `CAMPAIGN`, `SUBJECT`, `PREHEADER`, `EVENTS`, `ASSETS`, `FILES`, and
  `renderEmail({ firstName, lumaUrl, siteUrl, markSrc, partnerLogoSrc })`.
- `assets/mark-plate.png` is the lime Yale AI tile with the white Y, corners made
  transparent, 64x64 (shown at 32x32). Derived from `kickoff-2026-27/assets/mark-y.png`.
- `assets/perplexity-plate.png` is the Perplexity logo on a white rounded plate, 210x64
  (shown at 105x32). The logo is the Wikimedia Commons render of the official SVG. Both
  plates were generated with Pillow at 2x; the plate is baked into the PNG so the logo
  keeps its contrast if an email client inverts the stage.
- `assets/flyer.pdf` is the recruiting flyer. It is attached to every send as
  "Perplexity x YaleAI Recruiting Flyer.pdf" through the `FILES` export.
- The two PNGs are also in `marketing/hosted/perplexity-2026-09-21/`, which is what a
  real send links to. Deploy with `vercel --prod` from `marketing/hosted/` whenever they
  change, then confirm each URL returns 200 before sending.
- `sent.tsv` is the send ledger. Do not hand-edit it unless you intend to re-send.

## Light and dark mode

The template declares `color-scheme: light only` (meta tags plus the `:root` rule), the
same approach as `kickoff-2026-27`, so Apple Mail and Outlook leave the black stage and
white text alone. Gmail can still invert, which is why both logos ship on plates: the
Yale AI mark is a solid lime tile and the Perplexity logo sits on a solid white plate, so
neither can disappear against whatever the client decides the background is.

## Attachments and batching

Resend's batch endpoint does not accept attachments, so `scripts/send.js` sends any
campaign that declares `FILES` one message per call (the same path `--inline-images`
uses), with the usual 600 ms pause between sends. Budget accordingly for a full list. The
attachment filenames are part of the idempotency fingerprint, so a rerun with the same
flyer is still a no-op unless you pass `--force`.

## Preview

```sh
npm run preview -- --campaign perplexity-2026-09-21
open ../out/perplexity-2026-09-21.html
```

Run from `marketing/`. Images are inlined as data URIs in the preview only.

## Send

Read the send lock section of `marketing/README.md` first. The short version:

```sh
# always start here
node scripts/send.js --campaign perplexity-2026-09-21 --list yale-college-2027-2030.txt --dry-run

# a test to yourself
node scripts/send.js --campaign perplexity-2026-09-21 --to filippo.fonseca@yale.edu

# the real thing, in waves, once SEND_LOCK is off
node scripts/send.js --campaign perplexity-2026-09-21 --list yale-college-2027-2030.txt --limit 500
```

The first test went to filippo.fonseca@yale.edu on 2026-09-17 (see `sent.tsv`).

## Copy notes

The body text came from Filippo and is used as written, with no em dashes or en dashes.
Only the facts in this file are claimed. Do not add numbers, names, or promises that are
not already here.
