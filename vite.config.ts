import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vite config — https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  // GitHub Pages serves the site from /<repo-name>/
  base: command === 'build' ? '/Grab-Blind-Box-Feature-Version-1/' : '/',
  plugins: [react(), tailwindcss()],
}))
