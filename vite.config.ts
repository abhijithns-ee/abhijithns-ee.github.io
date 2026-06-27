import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
<<<<<<< HEAD
    // Add this base line. Replace 'your-repo-name' with your actual GitHub repository name.
     base: "/",
=======
    // Fixed: Changed from "/abhijithns-ee.github.io/" to "/"
    base: "/",
>>>>>>> dd0aff7979941a5edfcc6e2e748cc6a6d04597f1
    
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
