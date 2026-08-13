# Portfolio - Tausif Fardin Sinha

Personal portfolio for a backend-focused Full Stack Engineer. Minimalist,
typography-driven, and static: a single prerendered route with no client-side
data fetching.

## Tech stack

| Concern    | Choice                                        |
| ---------- | --------------------------------------------- |
| Framework  | Next.js 14 (App Router)                       |
| Language   | TypeScript (`strict`)                         |
| Styling    | Tailwind CSS 3.4 with HSL design tokens       |
| Animation  | Framer Motion (scroll reveals only)           |
| Icons      | lucide-react                                  |
| Theming    | next-themes (class strategy)                  |
| Fonts      | Inter + JetBrains Mono via `next/font`        |

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

| Script              | Purpose                          |
| ------------------- | -------------------------------- |
| `npm run dev`       | Development server               |
| `npm run build`     | Production build                 |
| `npm start`         | Serve the production build       |
| `npm run lint`      | ESLint (`next/core-web-vitals`)  |
| `npm run typecheck` | `tsc --noEmit`                   |

## Configuration

Copy `.env.example` to `.env.local` and set the deployed origin - it drives
canonical URLs, `sitemap.xml`, and Open Graph image resolution:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Editing content

All copy lives in **`src/lib/content.ts`** - profile, experience, projects,
skills, and publications - typed against `src/lib/types.ts`. No content is
hardcoded in components.

- Publications accept an optional `url`; the external-link affordance appears
  automatically once one is set.
- The current role is flagged with `current: true`, which drives the accent
  marker on the experience timeline.
- `public/og.png` is a committed 1200×630 social card. Regenerate it if the
  name or title changes (it is a static asset rather than a `next/og` route,
  because `next/og`'s bundled asset paths break on Windows builds).

## Design system

Tokens are defined once as HSL triplets in `src/app/globals.css` (`:root` and
`.dark`) and exposed to Tailwind as `background`, `foreground`, `surface`,
`muted`, `border`, and `accent`. The accent colour is used sparingly: focus
rings, link hover, the current-role marker, and text selection.

## Accessibility

Semantic landmarks throughout, a skip link, labelled sections
(`aria-labelledby`), `aria-label` on every icon-only control, and a visible
focus ring on all interactive elements. Motion is disabled under
`prefers-reduced-motion`, and a `<noscript>` rule reveals all scroll-animated
content when JavaScript is unavailable.

## Author

**Tausif Fardin Sinha** - [GitHub](https://github.com/tausif-fardin) ·
[LinkedIn](https://linkedin.com/in/tausif-fardin)
