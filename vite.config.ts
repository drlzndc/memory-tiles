/// <reference types="vitest" />

import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  test: {
    globals: true,
    setupFiles: './src/tests/setup.ts',
    environment: 'jsdom'
  },
  base: '/memory-tiles'
})
