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
      '@styles': '/src/styles'
    }
  },
  optimizeDeps: {
    // 对一个包里面，有很多文件的话，如果我们不使用 optimizeDeps 的话，所有的文件都会发送一次请求。会出现卡顿
    // ! 不要随便 exclude
    // exclude: ['lodash-es']
  }
});
