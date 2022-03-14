import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// 引入等比适配插件
const px2rem = require("postcss-px2rem");
// 配置基本大小
const postcss = px2rem({
  // 基准大小 baseSize，需要和rem.js中相同
  remUnit: 14,
});

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
    host: "0.0.0.0",
    proxy: {},
  },
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       prependData: `
  //         @import "@/assets/styles/color.scss";
  //       `,
  //     },
  //     postcss: {
  //       plugins: [postcss],
  //     },
  //   },
  // },
  plugins: [vue(), vueJsx()],
});
