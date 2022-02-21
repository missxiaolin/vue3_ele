import { App } from 'vue'

import chooseArea from './chooseArea'
import chooseIcon from './chooseIcon'
import trend from './trend'
import menu from './menu'
import container from './container'
import chooseTime from './chooseTime'
import chooseDate from './chooseDate'
import notification from './notification'
import list from './list'
import chooseCity from './chooseCity'
import progress from './progress'
import calendar from './calendar'
import form from './form'

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
    form
]

export default {
    // 让这个组件可以通过use的形势使用
    install(app: App) {
        components.map((item: any) => {
            app.use(item)
        })
    }
}