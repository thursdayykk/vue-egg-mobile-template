import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = 'http://127.0.0.1:7001'

axios.interceptors.request.use(config => {
        // loading

        // 序列化 post数据
        config.method === 'post' 
            ? config.data = qs.stringify({...config.data})
            : config.params = {...config.params};
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded';

        return config

    },err => {
        // 失败toast

        Promise.reject(err)
    }
  
);

// 响应拦截
axios.interceptors.response.use(
  response => {
    // console.info('响应拦截器数据为:', response);
     // 在接收响应做些什么，例如跳转到登录页

     // loading隐藏


     return response.data;
  },
  err => {
      // 响应出错
    console.log(JSON.stringify(err));

    // toast提示
    
    return Promise.reject(error)
  }
);

export default axios;