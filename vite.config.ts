/// <reference types="vitest" />
/// <reference types="@testing-library/jest-dom" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// 👇 recreamos __dirname para ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      ui: path.resolve(__dirname, 'src/ui/index.ts'),
      assets: path.resolve(__dirname, 'src/assets'),
      router: path.resolve(__dirname, 'src/router'),
      '@': path.resolve(__dirname, 'src'), // 👈 atajo recomendado
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
  server: {
    proxy: {
      '/api': {
        //target: 'http://192.168.150.220',
        target: 'http://ec2-54-92-229-60.compute-1.amazonaws.com',
        changeOrigin: true,
      },
    },
  },
});
