// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://portfolio-joels-projects-f04d04ca.vercel.app',
  output: 'static',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
