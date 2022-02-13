import { App } from 'vue'

import chooseArea from './chooseArea'
import chooseIcon from './chooseIcon'

const components: any = [
    chooseArea,
    chooseIcon
]

export default {
    // 让这个组件可以通过use的形势使用
    install(app: App) {
        components.map((item: any) => {
            app.use(item)
        })
    }
}