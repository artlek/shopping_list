import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
    server: {
        strictPort: true,
        host: true,      // Opcjonalne: udostępnia apkę w sieci lokalnej (np. na telefonie)
        port: 5173,
        open: true,      // Automatycznie otwiera przeglądarkę po starcie
    },
})
