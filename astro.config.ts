import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE = ''; // Configure the production origin here only, e.g. https://plazaespanacordoba.com.ar

export default defineConfig({
  site: SITE || undefined,
  output: 'server',
  adapter: cloudflare({ imageService: 'compile' }),
  integrations: SITE ? [sitemap()] : [],
  vite: { plugins: [tailwindcss()] }
});
