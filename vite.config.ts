import { fileURLToPath, URL } from 'node:url';
const isDev = process.env.NODE_ENV === 'development';
const path = require('path');
import { defineConfig, loadEnv } from 'vite';

import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

const root = process.cwd();
const env = loadEnv(process.argv[process.argv.length - 1], root);

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
  define: { 'process.env': {} },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: '@import "@/assets/scss/main.scss";',
      },
    },
  },
  server: {
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://192.168.0.130:3000',
        changeOrigin: true,
      },
    },
  },
});
