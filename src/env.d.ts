/*
 * @Author: ShenLing
 * @Date: 2021-06-28 16:41:52
 * @LastEditors: ShenLing
 * @LastEditTime: 2021-07-01 13:44:24
 */
/* eslint-disable */
/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module "*.json" {
  const value: any;
  export default value;
}

declare module "three";
declare module "three/examples/jsm/libs/dat.gui.module";