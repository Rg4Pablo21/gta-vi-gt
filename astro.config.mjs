// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://rg4pablo21.github.io',
  base: '/gta-vi-gt',

  vite: {
    plugins: [tailwindcss()]
  }
});