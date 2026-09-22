import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE = 'https://espanasquare.com'; // Production origin: enables canonical, absolute OG and sitemap

export default defineConfig({
  site: SITE || undefined,
  output: 'server',
  adapter: cloudflare({ imageService: 'compile' }),
  integrations: SITE ? [sitemap()] : [],
  vite: { plugins: [tailwindcss()] }
});
