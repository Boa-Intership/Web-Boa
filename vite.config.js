import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // o '/web_boa_dev/' si lo estás sirviendo como subcarpeta
  build: {
    outDir: 'dist',
  },
})
