import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { renameSync, existsSync } from 'fs'
import { join } from 'path'

const isWordPress = process.env.BUILD_TARGET === 'wordpress'

export default defineConfig({
  plugins: [
    react(),
    // 👇 Fix manifest location for WordPress builds
    {
      name: 'fix-wordpress-manifest',
      closeBundle() {
        if (isWordPress) {
          const from = join(process.cwd(), 'dist/.vite/manifest.json')
          const to = join(process.cwd(), 'dist/manifest.json')
          if (existsSync(from)) {
            renameSync(from, to)
            console.log('✅ Manifest moved to dist/manifest.json')
          }
        }
      },
    },
  ],

  base: isWordPress ? './' : '/',

  build: {
    outDir: isWordPress ? 'dist' : 'build',
    emptyOutDir: true,
    manifest: isWordPress, // Only generate manifest for WP build

    rollupOptions: {
      input: isWordPress ? 'src/main.jsx' : 'public/index.html',
    },
  },
})
