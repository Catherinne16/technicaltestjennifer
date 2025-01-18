import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5174,  // Verifica que el puerto esté disponible
    open: true,  // Esto abrirá automáticamente el navegador al iniciar el servidor
  },
});
