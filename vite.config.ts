import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/cv-remake/',
  server: {
    // Allow ngrok and similar tunnels when testing on mobile during dev
    allowedHosts: ['.ngrok-free.app', '.ngrok.io'],
  },
})
