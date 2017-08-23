import axios from 'axios'

// 全局默认配置
// axios.defaults.baseURL = 'http://api.zhuishushenqi.com'
// 代理服务器解决跨域问题
axios.defaults.baseURL = 'http://35.189.165.140:3000'
axios.defaults.headers.post['content-Type'] = 'appliction/x-www-form-urlencoded'
// axios.defaults.timeout = 50000

// 拦截器
// 添加一个请求拦截器
axios.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})
// 添加一个响应拦截器
axios.interceptors.response.use((res) => {
  return res
}, (error) => {
  return Promise.reject(error)
})

export default axios
