import { App } from 'vue'
import navSide from './src/navSide/index.vue'
import navHeader from './src/navHeader/index.vue'

// 让这个组件可以通过use的形式使用
export default {
  install(app: App) {
    app.component('l-nav-side', navSide)
    app.component('l-nav-header', navHeader)
  }
}