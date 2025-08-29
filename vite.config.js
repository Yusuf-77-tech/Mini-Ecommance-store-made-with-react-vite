
// https://vite.dev/config/
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Add this line if it doesn't exist yet
      external: ['react-router-dom']
    }
  }
});
