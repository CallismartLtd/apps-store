import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isWordPress = process.env.BUILD_TARGET === 'wordpress'

export default defineConfig({
  plugins: [react()],
  base: isWordPress ? './' : '/',
  build: {
    outDir: 'dist',
    manifest: true,
    rollupOptions: {},
  },
})
