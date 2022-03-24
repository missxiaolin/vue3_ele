import DefaultTheme from "vitepress/theme";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// import lUI from "../../../../src/components";
import lUI from '../../../../l-ui/index.es'
import '../../../../l-ui/style.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus);
    app.use(lUI);
  },
};
