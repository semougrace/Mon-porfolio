// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // // https://vitejs.dev/config/
// // export default defineConfig({
// //   plugins: [react()]
// // })

// export default {
//   server: {
//     hmr: {
//       overlay: true, // Montre les erreurs dans une superposition.
//     },
//   },
// };


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: true, // Active une superposition pour les erreurs.
    },
  },
  define: {
    'process.env': {}, // Résout les problèmes potentiels liés à 'process' dans React.
  },
  resolve: {
    alias: {
      '@': '/src', // Permet d'utiliser @ comme alias pour /src.
    },
  },
});

