import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'

import router from './router/index'
import { toLine } from './utils'

const app = createApp(App)

app.use(router).use(ElementPlus)

// 全局注册图标
for (let i in Icons) {
    app.component(`el-icon-${toLine(i)}`, (Icons as any)[i])
}

app.mount('#app')
