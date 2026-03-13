// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://lautxon.github.io',
  base: '/indica/',
  integrations: [tailwind()],
  output: 'static',
});