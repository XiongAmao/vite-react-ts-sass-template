import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import sassDts from 'vite-plugin-sass-dts';
import path from 'path'; // 导入node的path模块

export default defineConfig({
  plugins: [
    react(),
    sassDts({
      enabledMode: ['production', 'development'],
      global: {
        generate: true,
        outFile: path.resolve(__dirname, './src/types/style.d.ts'),
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
    preprocessorOptions: {
      scss: {
       
      },
    },
  },
});
