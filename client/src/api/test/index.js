import axios from '@/assets/js/http.js'

export function testGet(data = {}) {
    console.log(data)
    return axios.get('/api/test',{
      params:data
    });
  }
