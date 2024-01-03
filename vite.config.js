import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  // base: '/jeremiahiro.github.io/',
  plugins: [react()]
})
