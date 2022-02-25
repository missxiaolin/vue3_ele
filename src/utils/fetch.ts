import axios from 'axios'
import { ElLoading } from 'element-plus'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { LoadingInstance } from 'element-plus/es/components/loading/src/loading'
import type { Config } from './type'

// el-loading是插件不是组件，element-plus的按需引入并不能正确的引入el-loading的样式
// 所以需要自己手动进行引入el-loading的样式
import 'element-plus/theme-chalk/el-loading.css'

export default class {
    instance: AxiosInstance
    loading: LoadingInstance | undefined

    constructor(config: Config) {
        this.instance = axios.create(config)

        if (config.interceptor) {
            const { interceptor } = config
            this.instance.interceptors.request.use(interceptor.requestInterceptor, interceptor.requestInterceptorCatch)
            this.instance.interceptors.response.use(interceptor.responseInterceptor, interceptor.responseInterceptorCatch)
        }

        this.registerGlobalInterceptor()
    }

    registerGlobalInterceptor() {
        this.instance.interceptors.request.use((config: Config) => {
            // ?? --- 当左侧的操作数为 null 或者 undefined 时，返回右侧操作数，否则返回左侧操作数
            if (config?.showLoading ?? true) {
                // 开启loading
                this.loading = ElLoading.service({
                    lock: true,
                    text: 'Loading...',
                    background: 'rgba(0, 0, 0, 0.7)',
                })
            }

            return config
        }, err => err)

        this.instance.interceptors.response.use(res => {
            // 关闭loading
            this.loading?.close()

            // axios返回的是字符串，所以需要反序列化
            return JSON.parse(res.data)
        }, err => {
            this.loading?.close()
            return err
        })
    }

    request(config: AxiosRequestConfig) {
        return this.instance.request(config)
    }
}