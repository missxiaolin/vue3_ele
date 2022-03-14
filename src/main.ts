import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as Icons from "@element-plus/icons-vue";
import "./mock";

import lUI from "./components";

import router from "./router/index";
import { toLine } from "./utils";

import "./assets/styles/overall.scss";
import "./assets/styles/color.scss";
import "./assets/styles/resetElement.scss";

const app = createApp(App);

app.config.warnHandler = function () {
  // `trace` 是组件的继承关系追踪
};

app.use(router).use(ElementPlus).use(lUI);

// 全局注册图标
for (let i in Icons) {
  app.component(`el-icon-${toLine(i)}`, (Icons as any)[i]);
}

app.mount("#app");
