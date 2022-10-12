import axios from 'axios'
// // https://www.axios-http.cn/docs/config_defaults

/*********************老师提供的服务接口********************** */

// 创建自定义axios实例
const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    // 超时时间10s
    timeout: 5000
});

// 配置请求拦截器
instance.interceptors.request.use( 
  config => {
    return config
  },
  error => {
    console.log("拦截器",error)
  }
)
// 配置响应拦截器
instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.log("拦截器",error)
  }
)

// 实际这里也是 Promise方式
export function http(option){
  // 使用测试环境时，全部切换到mock请求实例
  if(process.env.NODE_ENV === 'test') {
    return instance2(option)
  }
  return instance(option)
}


/*********************apifox云端mock数据********************** */

// 链接: https://www.apifox.cn/apidoc/shared-bc1061c9-d155-4efa-9c15-ce073d590740  访问密码 : 9KhuOEFe 
const instance2 = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  // 超时时间5s
  timeout: 5000
});

// 配置请求拦截器
instance2.interceptors.request.use( 
  config => {
    // 注意使用apifox的mock数据需要配置token
    config.headers.common['apifoxToken'] = 'K5FOccF9Y4NtkbKZK0ib2WnWnm4bVdQO';
    return config
  },
  error => {
    console.log("拦截器",error)
  }
)
// 配置响应拦截器
instance2.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.log("拦截器",error)
  }
)

// 实际这里也是 Promise方式
export function http_mock(option){
  return instance2(option)
}



// Promise方式
// export function http_mock(option){
//   return new Promise((resolve,reject) => {
//     instance2(option)
//     .then(resp => resolve(resp))
//     .catch(err => reject(err))
//   } )
// }


// 回调函数方式
// export function http2(option,success,fail){
//   return instance2(option)
//   .then(success).catch(fail)
// }