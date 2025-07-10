import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    port: 3000, // Порт, на котором работает ваше приложение
    proxy: {
      '/api': {
        target: 'https://belparyaj.com/pragmatic', // Целевой URL сервера
        changeOrigin: true, // Изменяет происхождение запроса
        secure: false, // Разрешить небезопасные соединения
        rewrite: (path) => path.replace(/^\/api/, ''), // Перенаправляет пути
      },
    },
  },
  plugins: [react()],
  base: '/EvanTestTask/',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"); `,
      },
    },
  },
});
