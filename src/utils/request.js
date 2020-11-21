import axios from 'axios'


// 发起get请求
export function get(url, params) {
  return get(url, {
    params // params:params表示url中传递的参数
  })
}
export default axios
