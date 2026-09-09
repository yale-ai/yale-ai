# Yale AI kickoff deck

`kickoff.html` is the whole deck: open it in a browser to present, print it to
get the PDF. Arrow keys, space, click, or swipe move through it; `F` toggles
fullscreen; on slides with a card grid the first presses light one card at a
time. The build slide has a 25 minute timer (click it; `R` resets).

Two looks live in one file:

- `.slide.grok` copies SpaceXAI's Grok Bot template (cream, purple, blob
  mascots). Variants: `.white`, `.purple` (divider with the cloud), `.dark`
  (the product screenshot). Use these for anything SpaceXAI: demo, product
  pitch, redeem, the challenge.
- `.slide.yai` is Yale AI (black, lime and teal, Instrument Serif and Sans, the
  drafting grid from yale-ai.org). Use these for the club's own segment.
  Building blocks: `.wordmark`, `.pixel` (teal pixel caps kicker), `h2` with
  `<i>` for the lime italic, `.lead`, `.cards.c3` / `.c4` with `.card` (`.k`,
  `h3`, `p`), `.people` / `.person` (photo or `.pfp.initials`), `.snaprow` /
  `.snap` polaroids, `.pills`. Drop a `<span class="draft">` stamp on anything
  the co-presidents have not signed off yet, and delete it when they have.

Mascots: `assets/chars/*.png` (cut out, work on cream and black) and the
template's own art in `assets/grok/`. Place them with `class="m"` (add `bob`
for a slow float), absolutely positioned and cut by the frame.

## Links and QR codes

`links.json` holds every link the deck prints or encodes: `redeem` (the
Cursor room code), `submit` (the challenge form; a `mailto:` until the form
exists), `join`, `luma`. After editing it run

    npm install --no-save qrcode && node qr.mjs

which regenerates `assets/qr-*.svg` and `assets/links.js`. An empty link
produces a dashed placeholder QR so the slide still lays out.

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

## Still to fill in

- Yale AI segment (slides stamped Draft): the fellowship application link,
  the three project teams, anything Addison and Aryan change.
- The challenge submission form link (`submit` in `links.json`).
- The exact SpaceXAI credit amounts for the challenge prizes.
- Grok 4.6 benchmark: the slide uses `assets/grok46-benchmark.png` if that
  file exists, otherwise the SVG rebuilt from the chart SpaceXAI shared.
