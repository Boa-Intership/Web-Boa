/// <reference types="vitest" />
/// <reference types="@testing-library/jest-dom" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// 👇 we recreate __dirname para ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy para CMS Strapi (local)
      '/api/cms': {
        target: 'https://effortless-strength-42ee47afff.strapiapp.com',
        //target: 'http://localhost:1337/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/cms/, '/api'),
      },
      // Proxy para Backend API - SOLO para development local
      // En production no se usa, va straight a VITE_BACKEND_API_URL
      '/api': {
        //target: 'http://localhost:8080', // change por tu server de development
        target: 'http://192.168.150.220', // change por tu server de development
        changeOrigin: true,
        secure: false,
      },
    },
  },
  resolve: {
    alias: {
      ui: path.resolve(__dirname, 'src/ui/index.ts'),
      assets: path.resolve(__dirname, 'src/assets'),
      router: path.resolve(__dirname, 'src/router'),
      '@': path.resolve(__dirname, 'src'),
      '@config': path.resolve(__dirname, 'src/config'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    include: ['src/__tests__/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    alias: [
      { find: 'ui', replacement: path.resolve(__dirname, './src/ui') },
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: 'assets', replacement: path.resolve(__dirname, './src/assets') },
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      exclude: ['node_modules/', 'src/setupTests.ts'],
    },
  },
});
