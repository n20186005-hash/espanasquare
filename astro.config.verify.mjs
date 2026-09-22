import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE = 'https://espanasquare.com';

// TEMPORARY config used only to verify rendered HTML output (static, no Cloudflare adapter).
export default defineConfig({
  site: SITE,
  output: 'static',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] }
});
