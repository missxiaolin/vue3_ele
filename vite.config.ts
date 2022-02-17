import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 2022,
    host: '0.0.0.0',
    proxy: {}
  },
  plugins: [vue(), vueJsx()]
})
