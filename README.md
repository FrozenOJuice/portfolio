# Portfolio

A concise, single-page software development portfolio built with Astro, strict
TypeScript, Tailwind CSS 4, and the official MDX integration. The site is statically
generated, with no backend or database.

## Setup

Use Node.js 24 LTS (`.nvmrc`) and npm. Astro requires Node.js 22.23.4 or later.

```sh
nvm install
nvm use
npm ci
npm run dev
```

Open the local URL printed by Astro, normally `http://localhost:4321`. No environment
variables or external services are required. Use `npm install` when changing
dependencies, and keep the lockfile in sync.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server with hot reload. |
| `npm run check` | Astro and TypeScript checking. |
| `npm run build` | Type check, then generate the static site in `dist/`. |
| `npm run preview` | Serve the existing production build locally. |
| `npm run astro -- --help` | Astro CLI help. |

## Structure

```text
public/                       Favicon and social preview
src/
  assets/projects/            Genuine project images and provenance notices
  components/                 Footer, ProjectShowcase, social links, screenshot viewer
  data/projects.ts            Project summaries, technologies, images, and public links
  data/site.ts                Profile links, skills, and optional resume path
  layouts/BaseLayout.astro    Shared document, metadata, and screenshot viewer
  pages/index.astro           The portfolio homepage
  styles/global.css          Theme, responsive styles, and interaction states
astro.config.mjs              Static output, official MDX integration, Tailwind Vite plugin
tsconfig.json                 Astro's strict TypeScript preset
```

There are no project-detail routes. Public project sources link directly to GitHub;
TradeX has no source-code link. MDX remains configured without adding React.

## Editing

- Keep project summaries brief in `src/data/projects.ts`.
- Update contact links and skills in `src/data/site.ts`.
- Add a resume PDF to `public/` and set `site.resume` to its root-relative path.
  No resume link is shown while it is unset.
- Image sources and retained notices are in `src/assets/projects/README.md`.
  Every168 uses its existing GitHub social preview; no application UI is generated.
- The editable portfolio social card is `src/assets/social-card.svg`; keep its
  PNG export in `public/social-card.png` in sync.

The screenshot viewer supports zoom, keyboard scrolling, Close, Escape, and outside
clicks. It preserves the page position and restores focus when closed. Its image
links still work when JavaScript is disabled. Client code is limited to the screenshot
viewer and dismissing social-link tooltips with Escape; no UI libraries are used.

Social links use borderless SVG icons, accessible labels, and brand-color hover/focus
states. Tooltips appear on hover and keyboard focus, with the address shown for email.
There is no separate header. The footer link scrolls smoothly to the introduction.
Reduced-motion preferences disable scrolling animation and icon movement.

## Verification

Run `npm run check` and `npm run build`, then inspect the production output with
`npm run preview`. Check 1440px, 768px, 390px, and 320px widths, keyboard navigation,
anchor scrolling, screenshot opening/closing and zoom, image loading, and accessibility.

## Static hosting

Vercel can use the Astro preset, repository root, `npm run build`, and `dist`, with
Node.js 24.x. No adapter is needed for static output. Nothing has been deployed.

Set `site` in `astro.config.mjs` when the production domain is known. Canonical URLs
and absolute social-image URLs are emitted only when it is configured, avoiding
localhost metadata. TypeScript stays on 6.x to match the installed Astro checker.

## References

- [Astro](https://docs.astro.build/en/install-and-setup/)
- [MDX integration](https://docs.astro.build/en/guides/integrations-guide/mdx/)
- [Tailwind CSS with Astro](https://tailwindcss.com/docs/installation/framework-guides/astro)
- [Astro on Vercel](https://docs.astro.build/en/guides/deploy/vercel/)
