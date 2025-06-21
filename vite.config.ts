import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/aluminum-kitchen-maintenance-site/',
  plugins: [react()],
})
