# @yale-ai/marketing

Campaign email for the Yale Artificial Intelligence Association, sent through
[Resend](https://resend.com). Every campaign is a folder under `campaigns/`, and every
script takes `--campaign <name>`, so adding a new email means adding a folder rather than
editing the tooling.

```
marketing/
  lib/            shared: asset loading, recipient parsing, campaign loading
  scripts/        preview, send, check
  recipients/     address lists and the unsubscribe file
  campaigns/
    kickoff-2026-27/
      email.js    the template
      assets/     images for this campaign
      sent.tsv    per-campaign send ledger
      README.md   what this campaign is, dates, how to send it
  out/            rendered previews (gitignored)
```

## Setup

```sh
cd marketing
npm install
```

Then create `marketing/.env`. It is gitignored and is never committed.

| Variable | Required | Default | What it is |
| --- | --- | --- | --- |
| `RESEND_API_KEY` | yes, for real sends | none | Resend API key. `--dry-run` does not need one. |
| `EMAIL_FROM` | no | `YaleAI Association <info@yale-ai.org>` | Sender. Must be on a domain verified in Resend. |
| `REPLY_TO` | no | `filippo.fonseca@yale.edu, yaleaiassociation@gmail.com, aryan.agarwal@yale.edu, addison.shea@yale.edu` | Comma-separated reply addresses. The first one also backs the `List-Unsubscribe` mailto. |
| `ASSET_BASE_URL` | no | `https://yale-ai.org/email-assets` | Public base URL for hosted images. Files are namespaced per campaign, so a poster resolves to `<ASSET_BASE_URL>/<campaign>/poster.jpg`. |
| `LUMA_URL` | no | the campaign's own default | Overrides the RSVP link. |
| `SITE_URL` | no | `https://yale-ai.org` | Overrides the site link. |

A `.env.example` is not checked in, so this table is the authoritative list. Copy the
variable names from here.

## Preview

```sh
npm run preview -- --campaign kickoff-2026-27
```

Writes three files to `out/`:

- `out/<campaign>.html` with no first name, so the greeting reads "Hey there,"
- `out/<campaign>-personalised.html` with a sample first name, so it reads "Hey Filippo,"
- `out/<campaign>.txt`, the plain-text alternative

Images are embedded as data URIs in the preview, so each HTML file opens standalone with
no network. Override the sample name with `--name Ada`.

## Check

```sh
npm run check -- --campaign kickoff-2026-27
```

Preflight before a real send. Reports the campaign's subject, which asset files exist on
disk, how many addresses are already in the ledger, whether the sending domain is verified
in Resend, and whether SPF and DMARC resolve. Google and Yahoo want a DMARC record from
bulk senders, so do not send a list until that line is populated. The campaign half runs
without an API key; the Resend half is skipped if `RESEND_API_KEY` is unset.

## Send

```sh
# one test send
node scripts/send.js --campaign kickoff-2026-27 --to filippo.fonseca@yale.edu

# a few people
node scripts/send.js --campaign kickoff-2026-27 --to a@yale.edu --to b@yale.edu

# a list, printed but not sent
node scripts/send.js --campaign kickoff-2026-27 --list yale-college-2027-2030.txt --dry-run

# the first 500 addresses that have not been sent yet
node scripts/send.js --campaign kickoff-2026-27 --list yale-college-2027-2030.txt --limit 500
```

Flags:

| Flag | Effect |
| --- | --- |
| `--campaign <name>` | Required. The folder under `campaigns/`. |
| `--to <email>` | Repeatable. Accepts `First Last <email>` as well as a bare address. |
| `--list <file>` | A file in `recipients/`, or any path. |
| `--dry-run` | Prints what would go out and sends nothing. Needs no API key. |
| `--limit N` | Cap this run at N recipients, for sending in waves. |
| `--inline-images` | Attach images as CID parts instead of linking hosted URLs. Forces one send at a time, since the batch endpoint rejects attachments. |
| `--force` | Salt the idempotency key so Resend accepts an identical resend. |
| `--ignore-log` | Do not skip addresses found in the campaign ledger. Unsubscribes are still honored. |

Exit codes: `0` all good, `1` one or more sends failed, `2` bad usage or missing config,
`3` the send lock refused a recipient.

Each recipient gets their own message. There is no BCC blast and no exposed list. Lists go
through Resend's batch endpoint at 100 messages per request with a 600 ms pause between
batches. Single sends go through `emails.send` with `List-Unsubscribe` and
`List-Unsubscribe-Post` headers, and every message is tagged
`campaign=<the campaign's tag>` so Resend analytics can split it out.

### The send lock

`scripts/send.js` has a `SEND_LOCK` constant near the top that defaults to `true`, plus a
`LOCK_ALLOWED` allowlist of board addresses. While the lock is on, a real send to anyone
outside that allowlist fails loudly and exits `3`. `--dry-run` is unaffected, so you can
always rehearse a full list.

This is deliberate. Turning it off is a source edit, reviewed like any other change, and
should only happen once the copy is signed off and someone has actually said to send.
Turn it back on after the send.

### Recipients format

One recipient per line. Blank lines and lines starting with `#` are ignored.

```
ada.lovelace@yale.edu
Ada Lovelace <ada.lovelace@yale.edu>
"Ada Lovelace" <ada.lovelace@yale.edu>
```

When a name is present, the first token becomes the greeting: "Hey Ada,". Without one the
template falls back to "Hey there,".

- `recipients/yale-college-2027-2030.txt` is the shared Yale College list.
- `recipients/unsubscribed.txt` is a hard filter applied to every campaign, always, even
  with `--ignore-log`. When someone replies "unsubscribe", add them here immediately.

### The sent ledger

Each campaign keeps its own ledger at `campaigns/<name>/sent.tsv`: one line per successful
send, tab separated, `email` then Resend message id then ISO timestamp. Addresses already
in the ledger are skipped on the next run, so a rerun never double-sends and a crashed run
resumes where it stopped. Combined with `--limit`, this is how a list goes out in waves.

Sends are also idempotent on Resend's side. The idempotency key is a SHA-256 of the
campaign id, subject, recipient, rendered HTML, and attachment names, so re-running with
identical content is a no-op unless you pass `--force`.

## Adding a campaign

1. `mkdir -p campaigns/<name>/assets`
2. Write `campaigns/<name>/email.js` exporting `CAMPAIGN = { id, tag }`, `SUBJECT`,
   `PREHEADER`, `ASSETS`, and `renderEmail(props) -> { subject, html, text }`.
   `renderEmail` should take an optional `firstName` and default every other prop, so
   `preview` works with no environment at all.
3. Create `campaigns/<name>/sent.tsv` with a `#` header comment line.
4. Write `campaigns/<name>/README.md` covering what it is, the dates, and how to send it.
5. `npm run preview -- --campaign <name>`

`ASSETS` entries look like
`{ key: "posterSrc", cid: "poster", file: "poster.jpg", type: "image/jpeg" }`. A file that
is missing from disk is simply skipped, so the template must handle an empty prop.

## Template conventions

The templates are table-based and inline-styled so they survive Gmail, Apple Mail, and
Outlook. Keep the 600px max width, the hidden preheader div, the dark-mode meta tags, and
the MSO VML fallback on any pill button. Brand: `#0b0b0b` ground, white text, lime
`#d9e4a8` for pills and the primary button, teal `#4fd8c8` for the small all-caps
monospace kickers, blue `#6ea8ff` for the italic date line, cards at `#141414` with an
18px radius and a 1px `rgba(255,255,255,0.09)` border. Headline font is Poppins with a
`Helvetica, Arial, sans-serif` fallback.
