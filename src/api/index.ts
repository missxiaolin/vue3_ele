import fetch from "../utils/fetch";


let BASE_URL = 'https://www.xxx.com'
let TIME_OUT = 5000


const api = new fetch({
    baseURL: BASE_URL,
    timeout: TIME_OUT,

    // 不同的实例可能有不同的拦截器
    // 所以我们将拦截器封装成一个扩展属性进行传入
    // interceptor: {
    //   requestInterceptor: config => {
    //     console.log('请求成功')
    //     return config
    //   },
    //   requestInterceptorCatch: err => console.error(err),
    //   responseInterceptor: res => res.data,
    //   responseInterceptorCatch:  err => console.error(err)
    // }
})

export default fetch