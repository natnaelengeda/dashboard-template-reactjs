import { defineConfig } from 'vite'

// React
import react from '@vitejs/plugin-react-swc'

// Tan Stack
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// Tailwind
import tailwindcss from '@tailwindcss/vite'

// Path
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 1010
  },
  plugins: [
    react(),
    TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
