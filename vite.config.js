import path from 'path'
import { fileURLToPath } from 'url'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    open: false,
  },
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react':   ['react', 'react-dom'],
          'vendor-motion':  ['framer-motion'],
          'vendor-styled':  ['styled-components'],
          'vendor-i18n':    ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
          'vendor-emailjs': ['@emailjs/browser'],
          'vendor-icons':   ['react-icons'],
          'vendor-gsap':    ['gsap'],
        },
      },
    },
  },
})
