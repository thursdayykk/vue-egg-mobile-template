import axios from '@/assets/js/http.js'

// get实例
export function testGet(data = {}) {
    return axios.get('/api/test',{
      params:data
    });
  }

//post实例
export function testPost(data = {}) {
  return axios.post('/api/testPost',data);
}