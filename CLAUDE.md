# reordinal-docs

Documentation site for Reordinal, served at docs.reordinal.com. Built with
Nextra 4 (Next.js App Router), statically exported and hosted on GitHub Pages.

- Content lives in `content/**/*.mdx`; sidebar order in the `_meta.js` files.
- Theme and branding are configured in `app/layout.tsx`.
- The API reference mirrors `reordinal-api/docs/api/v1/` and
  `reordinal-api/docs/api/api-keys/`.

## Writing style

- **Never use the em dash (—) or double hyphen (--) in prose.** It reads as
  AI-generated. Rephrase with a comma, colon, semicolon, period, or
  parentheses instead. This applies to page content, frontmatter descriptions,
  metadata strings in `app/layout.tsx`, and the README. Markdown syntax is
  exempt (frontmatter `---` delimiters and table separator rows like
  `| --- |`).
- Brand: always "Reordinal" in user-facing copy; the navbar wordmark is the
  lowercase "reordinal" logotype, kept in sync with the react-app lander
  header (`reordinal-react-app/components/lander/nav/Header.tsx`).
