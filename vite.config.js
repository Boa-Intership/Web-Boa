import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      ui: '/src/ui',
      assets: '/src/assets',
      router: '/src/router'
    },
  },
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://192.168.150.220',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
