import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base : 'https://elbenjaz.github.io/fsjs-react-pokemon/'
})
