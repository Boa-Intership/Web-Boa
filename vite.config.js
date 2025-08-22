import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      components: '/src/shared/components',
      features: '/src/features',
      pages: '/src/pages',
      information: '/src/features/Information/presentation/components',
      homeComponents: '/src/features/home/presentation/components',
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
