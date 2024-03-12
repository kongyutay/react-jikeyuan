//axios 封装处理
import axios from "axios";
//拥有同样的域名
//拥有同样的异步延迟和超时时间
//拥有同样的请求和相应拦截器

const http = axios.create({
    baseURL: 'http://geek.itheima.net/v1_0',
    timeout: 5000
  })
  
  // 添加请求拦截器
  http.interceptors.request.use((config)=> {
      return config
    }, (error)=> {
      return Promise.reject(error)
  })
  
  // 添加响应拦截器
  http.interceptors.response.use((response)=> {
      // 2xx 范围内的状态码都会触发该函数。
      // 对响应数据做点什么
      return response.data
    }, (error)=> {
      // 超出 2xx 范围的状态码都会触发该函数。
      // 对响应错误做点什么
      return Promise.reject(error)
  })
  
  export { http }
