# reordinal-docs

Documentation site for [Reordinal](https://reordinal.com), served at
[docs.reordinal.com](https://docs.reordinal.com). Built with
[Nextra 4](https://nextra.site) (Next.js App Router), statically exported and
hosted on GitHub Pages.

## Dev

```bash
npm install
npm run dev        # http://localhost:3600
```

Content lives in `content/**/*.mdx`; sidebar order in the `_meta.js` files.
Theme and branding are configured in `app/layout.tsx`.

## Build

```bash
npm run build      # next build → out/, then pagefind search index + sitemap
```

## Deploy

```bash
npm run deploy     # build + publish out/ to the gh-pages branch
```

One-time GitHub Pages setup:

1. Repo Settings → Pages → deploy from the `gh-pages` branch.
2. Set custom domain `docs.reordinal.com` (the `CNAME` file keeps it pinned).
3. DNS: CNAME record `docs` → `reordinal.github.io`.

## Keeping docs in sync

The API reference mirrors `reordinal-api/docs/api/v1/` and
`reordinal-api/docs/api/api-keys/`. When an endpoint changes there, update the
corresponding page under `content/api/` here.
