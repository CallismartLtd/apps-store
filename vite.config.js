import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // important so assets resolve relative to theme
  build: {
    outDir: 'dist',
    manifest: true,
    rollupOptions: {
      input: '/src/main.jsx', // your app entry
    },
  },
})
