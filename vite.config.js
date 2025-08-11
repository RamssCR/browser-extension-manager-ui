import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import paths from 'vite-tsconfig-paths'

export default defineConfig(() => ({
  plugins: [tailwindcss(), paths()],
  server: { open: true },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor';
        }
      }
    }
  }
}))
