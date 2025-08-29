/// <reference types="vitest" />
/// <reference types="@testing-library/jest-dom" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'ui': path.resolve(__dirname, 'src/ui/index.ts'),
      'assets': path.resolve(__dirname, 'src/assets'),
      'router': path.resolve(__dirname, 'src/router'),
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
  },
});
