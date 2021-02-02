import axios from 'axios'

// export default 表示导入者可以自己给到处的东西命名
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })
  //请求拦截
  instance.interceptors.request.use(config =>{
    return config
  },err =>{
  });

  //响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  },err=>{
  });
  
  //将网络请求返回出去
  return instance(config)
}