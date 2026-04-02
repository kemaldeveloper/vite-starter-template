import { resolve } from 'path';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

const __dirname = resolve();

export default defineConfig({
  // root: '',
  // base: '/',
  plugins: [tailwindcss()],
  appType: 'mpa',
  build: {
    rolldownOptions: {
      input: {
        index: 'index.html',
        catalog: 'components.html',
      },
    },
  },
  css: {
    devSourcemap: true,
  },
});

