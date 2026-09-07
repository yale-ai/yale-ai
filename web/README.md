# Yale AI website

Next.js 15, Tailwind 4, deployed on Vercel. Design taken from the 2026-27 EC Bazaar banner (`design/`): near-black dot grid, Poppins, Pixelify Sans for the pixel caps, lime `#d9e4a8`, teal `#4fd8c8`, blue `#6ea8ff` for dates.

## Pages

- `/`: landing. Hero, kickoff card, this year's programs, mailing-list signup.
- `/team`: the board. Edit `src/lib/team.ts`; photos go in `public/team/<slug>.jpg` (missing photo shows initials).
- `/api/subscribe`: adds a contact to a Resend audience.

Facts the site states (dates, Luma link, socials, programs) live in `src/lib/site.ts`.

## Env

Set these in Vercel (or a local `.env.local`, which is git-ignored):

| Variable | What |
| --- | --- |
| `RESEND_API_KEY` | Resend API key with contacts write access |
| `RESEND_AUDIENCE_ID` | The audience the newsletter goes to (Resend dashboard, Audiences) |

Without them the join form returns a friendly "email us" message instead of failing.

## Run

```sh
npm install        # from the repo root
npm run dev        # http://localhost:3000
npm run build
```
