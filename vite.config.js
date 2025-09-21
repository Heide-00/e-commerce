import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  test: {
    environment: 'jsdom', // ← DOM hatasını çözen kritik satır
    globals: true,         // test ve expect gibi global fonksiyonları tanır
  }
 }) 
