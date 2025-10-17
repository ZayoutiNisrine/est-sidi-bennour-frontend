import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ Mets ici ton nom GitHub + le nom du repo
export default defineConfig({
  plugins: [react()],
  base: '/est-sidi-bennour-frontend/',
})
