# Yale AI Association

Monorepo for the Yale Artificial Intelligence Association (Yale AI).

- `web/`: the website, Next.js on Vercel. Landing page, team page, mailing-list signup.
- `marketing/`: email campaigns sent through [Resend](https://resend.com). One folder per campaign under `marketing/campaigns/`.
- `design/`: source design files. The 2026-27 EC Bazaar banner lives here; the site and emails take their look from it.

## Setup

```sh
npm install            # installs both workspaces
npm run dev            # web on http://localhost:3000
npm run preview        # renders the current campaign email to marketing/out/
```

Each workspace has its own README with details.
