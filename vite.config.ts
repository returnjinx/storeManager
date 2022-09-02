import { fileURLToPath, URL } from 'node:url';
const isDev = process.env.NODE_ENV === 'development';
console.log(isDev);
const path = require('path');
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
// https://vitejs.dev/config/
export default defineConfig({
  // publicPath: process.env.VUE_APP_BASE_URL,
  // assetsDir: 'assets',
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/main.scss";',
      },
    },
  },
});
