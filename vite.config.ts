import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/cv-remake/',
  server: {
    // Allow any host to connect (useful for ngrok and other tunnels during dev)
    allowedHosts: true,
  },
})
