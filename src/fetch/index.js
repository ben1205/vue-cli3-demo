import axios from 'axios'
import { Toast } from 'vant';

const baseUrl = process.env.NODE_ENV === 'production' ? '/' : '/api'
const http = {}

// console.log(baseUrl);

var instance = axios.create({
  timeout: 5000,
  baseUrl,
  validateStatus(status) {
    switch (status) {
      case 400:
        Toast.fail('请求失败')
        break
      case 401:
        Toast.fail('授权失败')
        break
      case 403:
        Toast.fail('拒绝访问')
        break
      case 404:
        Toast.fail('请求错误，未找到资源')
        break
      case 500:
        Toast.warning('服务端错误')
        break
    }
    return status >= 200 && status < 300
  }
})

// 请求拦截器
instance.interceptors.request.use(
  function(config) {
    // 请求头添加token
    // if (store.state.UserToken) {
    //     config.headers.Authorization = `Bearer ${store.state.UserToken}`
    // }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 响应拦截器即异常处理
instance.interceptors.response.use(
  response => {
    return response.data
  },
  err => {
    // if (err && err.response) {} else {
    //   err.message = '连接服务器失败'
    // }
    return Promise.reject(err.response)
  }
)

http.get = function (url, options) {
  // let loading
  if (!options || options.isShowLoading !== false) {
    // loading = Loading.service({ fullscreen: true });
    document.getElementById('loading').style.display = 'block'
  }
  return new Promise((resolve, reject) => {
    instance
      .get(url, options)
      .then(response => {
        if (!options || options.isShowLoading !== false) {
          // loading.close()
          document.getElementById('loading').style.display = 'none'
        }
        if (response.status === 1) {
          resolve(response.data)
        } else {
          Toast.fail(response.msg)
          reject(response.msg)
        }
      })
      .catch(() => {
        // console.log(err)
      })
  })
}

http.post = function (url, data, options) {
  // let loading
  if (!options || options.isShowLoading !== false) {
    // loading = Loading.service({ fullscreen: true });
    document.getElementById('loading').style.display = 'block'
  }
  return new Promise((resolve, reject) => {
    instance
      .post(url, data, options)
      .then(response => {
        if (!options || options.isShowLoading !== false) {
          // loading.close()
          document.getElementById('loading').style.display = 'none'
        }
        if (response.status === 1) {
          resolve(response.data)
        } else {
          Toast.fail(response.msg)
          reject(response.msg)
        }
      })
      .catch(() => {
        // console.log(e)
      })
  })
}

export default http