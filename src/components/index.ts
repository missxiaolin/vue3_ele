import { App } from "vue";

import chooseArea from "./chooseArea";
import chooseIcon from "./chooseIcon";
import trend from "./trend";
import menu from "./menu";
import container from "./container";
import chooseTime from "./chooseTime";
import chooseDate from "./chooseDate";
import notification from "./notification";
import list from "./list";
import chooseCity from "./chooseCity";
import progress from "./progress";
import calendar from "./calendar";
import form from "./form";
import modalForm from "./modalForm";
import table from "./table";

import "../styles/base.scss";
import "../styles/ui.scss";
import * as Icons from "@element-plus/icons-vue";
import { toLine } from "../utils/index";

const components: any = [
  chooseArea,
  chooseIcon,
  trend,
  menu,
  container,
  chooseTime,
  chooseDate,
  notification,
  list,
  chooseCity,
  progress,
  calendar,
  form,
  table,
  modalForm,
];

export default {
  // 让这个组件可以通过use的形势使用
  install(app: App) {
    // 全局注册图标
    for (let i in Icons) {
      app.component(`el-icon-${toLine(i)}`, (Icons as any)[i]);
    }
    components.map((item: any) => {
      app.use(item);
    });
  },
};
