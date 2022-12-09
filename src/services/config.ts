import axios from "axios"

import { Tip } from "@/common/tip"
import { errorMessage } from "@/common/message"

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL as string,
  timeout: 5000,
  withCredentials: true
})
// 请求拦截 统一配置
service.interceptors.request.use(config => {
  // showLoading()
  if (config.url === '/fileUpload/upload') {
    (config as any).headers['Content-Type'] = 'multipart/form-data';
  }
  return config
}, err => {
  // hideLoading()
  errorMessage(err)
  return Promise.reject(new Error(err))
})
// 统一在此处解构一层data
service.interceptors.response.use(data => {
  return data.data;
}, err => {
  // hideLoading()
  errorMessage(err)
  return Promise.reject(new Error(err))
})

// get method
export function get(url: string, params: any = {}) {
  return new Promise((resolved, rejected) => {
    service.get(url, params)
      .then((resp) => {
        resolved(resp)
      }, err => {
        errorMessage(Tip.NETWORK_ERROR)
        rejected(err)
      })
      .catch(err => {
        // 弹出错误提示
        rejected(err)
        errorMessage(Tip.NETWORK_ERROR)
      })
  })
}
// post method
export function post(url: string, data: any = {}) {
  return new Promise((resolved, rejected) => {
    service.post(url, data)
      .then(resp => {
        resolved(resp)
      }, err => {
        errorMessage(Tip.NETWORK_ERROR)
        rejected(err)
      })
      .catch(err => {
        // 弹出错误提示
        errorMessage(Tip.NETWORK_ERROR)
        rejected(err)
      })
  })
}