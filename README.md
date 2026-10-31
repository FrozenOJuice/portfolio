# Portfolio

Personal software engineering portfolio built with Astro, strict TypeScript,
Tailwind CSS 4, and MDX. The homepage includes selected projects, background,
technical skills, and contact information. Individual project case-study pages
are reserved for a later phase.

## Setup

Use Node.js 24 LTS (the major version in `.nvmrc`) and npm. Astro requires Node.js
22.23.4 or later; use a supported even-numbered release. If you use nvm:

```sh
nvm install
nvm use
```

From the repository root:

```sh
npm ci
npm run dev
```

Open the local URL printed by Astro (normally `http://localhost:4321`). No
environment variables or external services are required.

Use `npm install` when intentionally changing dependencies, and commit the updated
`package-lock.json` with `package.json`.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server with hot reload. |
| `npm run check` | Generate Astro types and check TypeScript and Astro files. |
| `npm run build` | Run type checking, then generate the static site in `dist/`. |
| `npm run preview` | Serve the existing production build locally. |
| `npm run astro -- --help` | Access the Astro CLI. |

## Structure

```text
public/                          Static files copied unchanged into the build
  favicon.svg                    Portfolio favicon
  social-card.png                1200 × 630 social preview
src/
  assets/projects/               Original screenshots and provenance/notice files
  components/                    Shared Header, Footer, and ProjectShowcase
  content/projects/              Reserved for future MDX case studies
  data/
    projects.ts                  Typed project content, screenshots, and links
    site.ts                      Profile, contact details, resume path, and skills
  layouts/
    BaseLayout.astro             Document metadata, skip link, header, and footer
  pages/
    index.astro                  Homepage sections at /
  styles/
    global.css                   Tailwind CSS entry point
astro.config.mjs                 Static output, MDX integration, Tailwind Vite plugin
tsconfig.json                    Astro's strict TypeScript preset
```

Keep future case-study content in `src/content/projects/`. MDX remains configured;
there are no case-study routes or links to unfinished pages yet.

## Updating homepage content

- Edit project descriptions, technologies, highlights, image captions, and source
  links in `src/data/projects.ts`. TradeX intentionally has no `sourceUrl`.
- Edit profile links and skills in `src/data/site.ts`.
- Add a resume PDF under `public/`, then set `site.resume` to its root-relative
  path (for example `/resume.pdf`). Until then, Resume is visibly marked “soon”
  and is not an interactive link.
- Screenshots are genuine application captures, with demonstration data described
  in their captions. Their sources and retained notices are documented in
  `src/assets/projects/README.md`. Astro emits responsive WebP variants; opening
  a screenshot accesses the unchanged original image.
- Color, typography, spacing, and responsive styles live in
  `src/styles/global.css`, including Tailwind CSS 4 theme tokens. The navigation
  stays visible on mobile and requires no JavaScript.
- The editable social-card source is `src/assets/social-card.svg`; its PNG export
  is `public/social-card.png`. Keep the export in sync when changing the source.

The homepage adds no client-side JavaScript, external fonts, analytics, backend,
or new dependencies.

Tailwind CSS 4 is configured through the official `@tailwindcss/vite` plugin and
`@import "tailwindcss"` in the global stylesheet. There is no legacy Tailwind
integration or JavaScript Tailwind configuration. MDX uses the official
`@astrojs/mdx` integration without React.

TypeScript is kept on the latest supported 6.x release because the installed
`@astrojs/check` version supports TypeScript 5 and 6, but not 7.

## Static hosting compatibility

The project explicitly uses `output: 'static'`. For a future Vercel deployment,
select the Astro framework preset, use the repository root as the project root,
`npm run build` as the build command, and `dist` as the output directory. Choose
Node.js 24.x in the hosting settings. A Vercel adapter is unnecessary for this
static site. No deployment or hosting connection has been created.

Set Astro's `site` URL in `astro.config.mjs` when a production domain is chosen.
The layout already provides page descriptions, Open Graph and Twitter metadata.
Canonical URLs, the Open Graph URL, and absolute social-image URLs are emitted
only when `site` is configured, so builds do not advertise localhost as the
production domain. No hosting account is assumed at this stage.

## References

- [Astro setup](https://docs.astro.build/en/install-and-setup/)
- [Astro TypeScript support](https://docs.astro.build/en/guides/typescript/)
- [Official MDX integration](https://docs.astro.build/en/guides/integrations-guide/mdx/)
- [Tailwind CSS with Astro](https://tailwindcss.com/docs/installation/framework-guides/astro)
- [Astro on Vercel](https://docs.astro.build/en/guides/deploy/vercel/)
