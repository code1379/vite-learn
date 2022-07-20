import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), eslint({})],
  resolve: {
    alias: {
      '@': '/src',
      '@styles': '/src/styles',
    },
  },
});
