import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Added base path for GitHub Pages project site deployment.
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
})
