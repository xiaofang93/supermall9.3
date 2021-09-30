import axios from "axios"
export function request(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: "http://152.136.185.210:7878/api/hy66",
    timeout: 5000,
  })
  //   2.创建axios拦截器
  instance.interceptors.request.use(
    // 请求拦截
    (config) => {
      // console.log(config)
      return config
    },
    (err) => {
      console.log("请求失败")
    }
  )
  //   响应拦截
  instance.interceptors.response.use(
    (res) => {
      // console.log(res)
      return res.data
    },
    (err) => {
      console.log(err)
    }
  )

  //   3.发送真正的网络请求(返回的是一个promise)
  return instance(config)
}
