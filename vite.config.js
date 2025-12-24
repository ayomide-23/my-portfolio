import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // this exposes it to your network
    port: 5173,  // optional, locks the port
  }
})
