import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/fm-intro-component-with-signup-form/',
  plugins: [react()],
});
