# Email assets

Static images referenced by the campaign emails, so nothing is sent as an attachment. Deployed as its own Vercel project (`yale-ai-email-assets`), served with immutable caching.

Files are namespaced per campaign: `/<campaign>/<file>`. When an image changes, give it a new file name; the old one is cached forever.

Deploy from this directory:

```sh
vercel --prod
```

## Deploying: run it from a copy outside the repo

The Vercel CLI walks up to the nearest package.json (marketing/) or the git root and
treats that as the project root, so `vercel --prod` run inside hosted/ either creates a
stray "marketing" project or uploads with an extra path prefix, which 404s every email
image already in inboxes. Deploy from an isolated copy instead:

```sh
D=$(mktemp -d)/hosted && cp -R marketing/hosted/ "$D" && mkdir -p "$D/.vercel" \
  && printf '{"projectId":"prj_nTHMFDxiNGOeUyMjaU35AzWyeEv6","orgId":"team_XpcEeoNL8r0uVIe7oS4hZqUG","projectName":"yale-ai-email-assets"}' > "$D/.vercel/project.json" \
  && (cd "$D" && npx vercel --prod --yes)
```

Then curl a known file under https://yale-ai-email-assets.vercel.app/<campaign>/ and expect 200.
