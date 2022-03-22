import DefaultTheme from "vitepress/theme";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import lUI from "../../../../src/components";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus);
    app.use(lUI);
  },
};
