# kickoff-2026-27

The general kickoff email for the Yale Artificial Intelligence Association, 2026-27.

It goes to two audiences at once: first-years who signed up at the EC Bazaar, and everyone
else on the shared Yale College list who has never heard of us. The copy assumes no prior
context and leads with the event.

## The event

| | |
| --- | --- |
| What | Yale AI Association kickoff, sponsored by SpaceX |
| When | Wednesday, September 9, 2026, 8:00 to 9:30 PM (America/New_York) |
| Where | Tsai CITY, ground floor |
| RSVP | https://luma.com/o5g51mh0 |

Everyone who attends gets 1 month of Cursor Pro free. There are Cursor and Grok credits
to win at the event. Food. All majors, all class years. Capacity is limited, so attending
requires an RSVP on Luma.

## Timeline

- Bazaar was Sunday, September 6. This email is the follow-up.
- Send window: Sunday evening through Monday, so it lands a couple of days before the event.
- After the event, nothing else goes to this campaign. A follow-up gets its own folder.

## Files

- `email.js` exports `CAMPAIGN`, `SUBJECT`, `PREHEADER`, `EVENTS`, `ASSETS`, `PILLS`,
  `PROGRAM`, and `renderEmail({ firstName, lumaUrl, siteUrl, logoSrc, posterSrc })`.
- `assets/` is the EC Bazaar banner, rendered from `design/ec-bazaar-banner-2026-27.pdf`.
  Regenerate it with:

  ```sh
  pdftoppm -jpeg -r 40 -singlefile -x 31 -y 31 -W 1858 -H 3020 \
    ../../../design/ec-bazaar-banner-2026-27.pdf assets/poster
  ```

  The crop flags trim the white page margin the PDF carries, so the artwork's own
  near-black ground runs to the edge and sits flush against the email background. Without
  them you get a white ring around the image. Keep the file under 600 KB, and lower `-r`
  if it grows past that (the crop box is in pixels, so it scales with `-r`).
- `assets/logo.png` does not exist yet. There is no Yale AI logo file, so the template
  falls back to a text wordmark in Poppins 700. Drop a `logo.png` in and it is picked up
  automatically, no code change needed.
- `sent.tsv` is the send ledger. Do not hand-edit it unless you intend to re-send.

## Preview

```sh
npm run preview -- --campaign kickoff-2026-27
open ../out/kickoff-2026-27.html
open ../out/kickoff-2026-27-personalised.html
```

Run from `marketing/`. Images are inlined as data URIs in the preview only.

## Send

Read the send lock section of `marketing/README.md` first. The short version:

```sh
# always start here
node scripts/send.js --campaign kickoff-2026-27 --list yale-college-2027-2030.txt --dry-run

# a test to yourself
node scripts/send.js --campaign kickoff-2026-27 --to filippo.fonseca@yale.edu

# the real thing, in waves, once SEND_LOCK is off
node scripts/send.js --campaign kickoff-2026-27 --list yale-college-2027-2030.txt --limit 500
```

## Copy notes

Tone is the poster: short sentences, confident, no hedging. "Don't get left behind."
"Build the future at Yale AI." "Yeah, we thought so." Only the facts above are claimed.
Do not add numbers, names, or promises that are not already on the poster or in this file.
