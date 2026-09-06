# Email assets

Static images referenced by the campaign emails, so nothing is sent as an attachment. Deployed as its own Vercel project (`yale-ai-email-assets`), served with immutable caching.

Files are namespaced per campaign: `/<campaign>/<file>`. When an image changes, give it a new file name; the old one is cached forever.

Deploy from this directory:

```sh
vercel --prod
```
