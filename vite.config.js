import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    optimizeDeps: {
      include: ['@mui/material/Tooltip', '@emotion/styled'],
    },
    alias: [
      { find: '~', replacement: '/src' }
    ]
  }
})
