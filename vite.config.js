import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/webapp-informatics/',
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    port: 5173,
    // Si es de Windows a Linux (no importa distribucion) y funcione en docker-compose
    // el atributo volumes, es necesario aplicar esta funcionalidad, si no el vite
    // no ejecutará correctamente y no podrá hacer los cambis a tiempo real
      watch: {
        usePolling: true
      }
  }
})
