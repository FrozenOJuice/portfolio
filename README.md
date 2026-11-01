# Portfolio

A concise software development portfolio with MDX project case studies, built with Astro, strict
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
| `npm run check` | Resume preview consistency, Astro, and TypeScript checking. |
| `npm run build` | Type check, then generate the static site in `dist/`. |
| `npm run preview` | Serve the existing production build locally. |
| `npm run resume:preview` | Regenerate resume preview assets on macOS after replacing the PDF. |
| `npm run astro -- --help` | Astro CLI help. |

## Structure

```text
public/                       Resume PDF, favicon, and social preview
src/
  assets/projects/            Genuine project images and provenance notices
  assets/resume/              Generated resume page previews
  components/                 Footer, ProjectShowcase, social links, screenshot viewer
  content/projects/           MDX case studies for OMR System, Every168, and TradeX
  data/projects.ts            Project summaries, technologies, images, and public links
  data/site.ts                Profile links, skills, and optional resume path
  layouts/BaseLayout.astro    Shared document, metadata, and screenshot viewer
  layouts/CaseStudyLayout.astro Shared case-study layout and section navigation
  pages/index.astro           The portfolio homepage
  pages/projects/[slug].astro Statically generated project pages
  styles/global.css          Theme, responsive styles, and interaction states
astro.config.mjs              Static output, official MDX integration, Tailwind Vite plugin
tsconfig.json                 Astro's strict TypeScript preset
```

Project case studies live at `/projects/omr-system/`, `/projects/every168/`, and
`/projects/tradex/`. The dynamic route imports the MDX files at build time and
matches their `projectId` frontmatter to `src/data/projects.ts`. Public sources
link to GitHub; TradeX has no source-code link. No React integration is installed.

## Editing

- Keep project summaries brief in `src/data/projects.ts`.
- Edit detailed project writing in `src/content/projects/*.mdx`. Each page shares
  the same overview, role, architecture, engineering, results, and screenshot sections.
- Update contact links and skills in `src/data/site.ts`.
- The visible **Resume** link beside the introduction's social icons opens an
  overlay with Close, zoom, download, and open-PDF controls. Escape and outside
  clicks close it without changing browser history; keyboard focus returns to
  the link. Only the document area scrolls, keeping the controls in view.
  A screen-reader text copy accompanies the page preview.
- To update the resume, replace `public/Portfolio_Resume.pdf`, run
  `npm run resume:preview` on macOS, and run `npm run build`. The generator uses
  the system's PDFKit to render the original pages and extract their text without
  modifying the PDF. Commit the generated assets and `src/data/resume-preview.json`
  with the PDF. A build-time hash check prevents a stale preview from shipping.
  Production builds use the generated assets and do not require macOS or Swift.
  `site.resume` holds the root-relative PDF path; set it to `null` to hide the link.
- Image sources and retained notices are in `src/assets/projects/README.md`.
  Every168 uses its GitHub social preview on the homepage and its Calendar capture
  on the case study. No application UI is generated.
- The editable portfolio social card is `src/assets/social-card.svg`; keep its
  PNG export in `public/social-card.png` in sync.

The screenshot viewer supports zoom, keyboard scrolling, Close, Escape, and outside
clicks. It preserves the page position and restores focus when closed. Its image
links still work when JavaScript is disabled. Client code is limited to the screenshot
viewer, resume overlay, and dismissing social-link tooltips with Escape; no UI
libraries are used. Without JavaScript, the Resume link opens the original PDF.

Social links use borderless SVG icons, accessible labels, and brand-color hover/focus
states. Tooltips appear on hover and keyboard focus, with the address shown for email.
There is no separate header. Case studies include section navigation and links
back to projects and contact. The footer link scrolls smoothly to the page's top.
Reduced-motion preferences disable scrolling animation and icon movement.

## Verification

Run `npm run check` and `npm run build`, then inspect the production output with
`npm run preview`. Check 1440px, 768px, 390px, and 320px widths, keyboard navigation,
anchor scrolling, screenshot opening/closing and zoom, image loading, and accessibility
on the homepage and all three project pages.

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
