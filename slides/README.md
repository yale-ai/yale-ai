# YaleAI kickoff deck

`kickoff.html` is the whole deck: open it in a browser to present, print it to
get the PDF. Arrow keys, space, click, or swipe move through it; `F` toggles
fullscreen; on slides with a card grid the first presses light one card at a
time. The build slide has a 25 minute timer (click it; `R` resets).

Two looks live in one file:

- `.slide.grok` copies SpaceXAI's Grok Bot template (cream, purple, blob
  mascots). Variants: `.white`, `.purple` (divider with the cloud), `.dark`
  (the product screenshot). Use these for anything SpaceXAI: demo, product
  pitch, redeem, the challenge.
- `.slide.yai` is YaleAI (black, lime and teal, Instrument Serif and Sans, the
  drafting grid from yale-ai.org). Use these for the club's own segment.
  Building blocks: `.wordmark`, `.pixel` (teal pixel caps kicker), `h2` with
  `<i>` for the lime italic, `.lead`, `.cards.c3` / `.c4` with `.card` (`.k`,
  `h3`, `p`), `.people` / `.person` (photo or `.pfp.initials`), `.snaprow` /
  `.snap` polaroids, `.pills`. Drop a `<span class="draft">` stamp on anything
  the co-presidents have not signed off yet, and delete it when they have.

Mascots: `assets/chars/*.png` (cut out, work on cream and black) and the
template's own art in `assets/grok/`. Place them with `class="m"` (add `bob`
for a slow float), absolutely positioned and cut by the frame.

## Presenting

- Live: https://yale-ai.org/deck (same file, published). Arrow keys, space, or
  click to advance; `F` for fullscreen; `Home` / `End` jump to the ends.
- On card slides the first presses light one card at a time before moving on.
- Local: `python3 -m http.server 8787` in this folder, then
  http://localhost:8787/kickoff.html. Opening the file directly also works.
- The URL hash is the slide number (`#12`), so you can deep-link a slide.

## Links and QR codes

`links.json` holds every link the deck prints or encodes. Each one is a short
link on the site, defined as a redirect in `web/next.config.ts`:

| key      | short link                 | goes to                                    |
|----------|----------------------------|--------------------------------------------|
| redeem   | (Cursor room code)         | cursor.com/redeem/event/yale-ai-association-fall-kickoff |
| submit   | yale-ai.org/win            | the Rapid-fire Cursor Google Form          |
| apply    | yale-ai.org/apply          | the project team Google Form               |
| pareto   | yale-ai.org/pareto         | the YaleAI x Pareto dinner Airtable form   |
| slack    | yale-ai.org/slack          | the Slack invite                           |
| join     | yale-ai.org                | the landing page                           |

To change a destination, edit the redirect in `web/next.config.ts` and push;
the QR codes keep working because they encode the short link. To add a new
link, add it to both files, then regenerate the QR codes:

    npm install --no-save qrcode && node qr.mjs

This rewrites `assets/qr-*.svg` and `assets/links.js`. An empty link produces
a dashed placeholder QR so the slide still lays out.

## PDF

    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new \
      --disable-gpu --no-pdf-header-footer --virtual-time-budget=20000 \
      --print-to-pdf="$PWD/kickoff.pdf" "file://$PWD/kickoff.html"

## Publishing to yale-ai.org/deck

The deck is copied into `web/public/deck/` with asset paths rewritten to
`/deck/assets/...` (the site serves `/deck` without a trailing slash, so bare
relative paths 404):

    mkdir -p ../web/public/deck && rsync -a --delete assets/ ../web/public/deck/assets/
    sed -e 's#"assets/#"/deck/assets/#g' -e "s#'assets/#'/deck/assets/#g" -e 's#url("assets/#url("/deck/assets/#g' kickoff.html > ../web/public/deck/index.html

Commit and push `master`; Vercel deploys the `yale-ai` project.

## Assets

- `assets/chars/`: Grok Bot characters, cut out, work on cream and black.
- `assets/grok/`: art from SpaceXAI's Grok Bot template (mascots, app screenshot, purple backgrounds).
- `assets/yai/`: YaleAI photos from the board deck and partner logos (Cursor, OpenAI, MIT, MIT-IBM, IBM, Jane Street, Yale School of Medicine, Pareto, Slack).
- `assets/team/`: board headshots. A missing headshot falls back to initials in the markup.
- `assets/fiona-slack.png` and `assets/grok46-benchmark.png`: real screenshots used on the prizes and benchmark slides.

## Still open

- The fellowship has no application link on its slide.
- Pareto Holdings' website URL is not on the dinner slide (unverified).
- The Pareto dinner date, time, and location come from the co-presidents' deck.
