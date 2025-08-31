import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Mini-Ecommance-store-made-with-react-vite/', // 👈 Repo name here
})