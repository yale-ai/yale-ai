# afore-fireside-2026

The invite for YaleAI's fireside chat with Nathan Yu (Investor @ Afore Capital), plus
lightning pitches. Kept short on purpose: the banner, four short paragraphs, one button
to Luma.

## The event

| | |
| --- | --- |
| What | A fireside with Nathan Yu of Afore Capital: what a top VC looks for in student founders, and his path from big tech to startups |
| Then | Lightning pitches: 10 to 15 slots, three minutes each, pitching Afore live |
| Afore | First checks of $500K to $2M+, pre-idea welcome |
| Also | Open Q&A and networking, all majors welcome |
| When | **TBD**: fill `EVENT.dayLine` and `EVENT.timeLine` in `email.js` |
| Where | **TBD**: fill `EVENT.where` |
| Register | **TBD**: set `DEFAULT_LUMA_URL` (or pass `LUMA_URL` in `.env`) |

Every fact above comes from the Luma cover (`afore-vc-scout/luma-banner`). The bracketed
placeholders render visibly in the preview, so a test send makes any gap obvious. Do not
send to a list until all three are filled.

Subject: "A fireside with Afore Capital, and a chance to pitch them"

## Files

- `email.js`: the template. Plain white layout; the banner carries the brand.
- `banner/banner.html`: the email banner, the Luma cover redrawn as a 2:1 strip. Run
  `banner/render.sh` after editing it; it writes `assets/banner.jpg` (1600x800, shown at
  536x268) and copies it to `marketing/hosted/afore-fireside-2026/`.
- `sent.tsv`: the send ledger. Do not hand-edit it unless you intend to re-send.

The hosted copy has to be deployed (see `marketing/hosted/README.md`) and return 200 at
`https://yale-ai-email-assets.vercel.app/afore-fireside-2026/banner.jpg` before a real send.

## Preview and send

Run from `marketing/`, and read the send lock section of `marketing/README.md` first.

```sh
npm run preview -- --campaign afore-fireside-2026
node scripts/send.js --campaign afore-fireside-2026 --to filippo.fonseca@yale.edu
node scripts/send.js --campaign afore-fireside-2026 --list yale-college-2027-2030.txt --dry-run
node scripts/send.js --campaign afore-fireside-2026 --list yale-college-2027-2030.txt --limit 500
```
