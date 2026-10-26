# afore-fireside-2026

The invite for YaleAI's fireside chat with Nathan Yu (Principal Investor @ Afore Capital), plus
lightning pitches. Kept short on purpose: the banner, five short paragraphs, one button
to Luma.

## The event

| | |
| --- | --- |
| Who | [Nathan Yu](https://www.linkedin.com/in/nathan-yu), Principal Investor @ Afore Capital |
| What | What a top VC looks for in student founders and builders, and his path from big tech into VC and startups |
| Then | Rapid-fire pitches: 10 to 15 students selected to pitch Afore live |
| Afore | First checks of $500K to $2M+, pre-idea welcome |
| Also | Open Q&A and networking, all majors welcome, Yale students only |
| Where, when | Wednesday, November 4, 2026, 4:30 to 6:30 PM, Tsai CITY |
| Apply | https://luma.com/3qmnfwtw (under 2 minutes, rolling acceptance, capped attendance) |

The body copy is Filippo's, used as written apart from small fixes ("looks for", "Tsai
CITY").

Subject: "Afore Capital is coming to Yale (and they want to meet you)"

## Files

- `email.js`: the template. Plain white layout; the banner carries the brand.
- `banner/banner.html`: the email banner, the Luma cover redrawn as a 2:1 strip. Run
  `banner/render.sh` after editing it; it writes `assets/banner-v7.jpg` (1600x800, shown at
  536x268) and copies it to `marketing/hosted/afore-fireside-2026/`.
- `sent.tsv`: the send ledger. Do not hand-edit it unless you intend to re-send.

The hosted copy has to be deployed (see `marketing/hosted/README.md`) and return 200 at
`https://yale-ai-email-assets.vercel.app/afore-fireside-2026/banner-v7.jpg` before a real send.

## Preview and send

Run from `marketing/`, and read the send lock section of `marketing/README.md` first.

```sh
npm run preview -- --campaign afore-fireside-2026
node scripts/send.js --campaign afore-fireside-2026 --to filippo.fonseca@yale.edu
node scripts/send.js --campaign afore-fireside-2026 --list yale-college-2027-2030.txt --dry-run
node scripts/send.js --campaign afore-fireside-2026 --list yale-college-2027-2030.txt --limit 500
```
