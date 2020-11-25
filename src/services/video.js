import axios from '../utils/request'
// import router from "../router"

// 全部KOL分类列表
export function ContentList() {
  return axios.get(
    'https://api.dev.hiifire.com/v1/index_recommend'
  )
}

// 跳转kol分类详情页
export function LookForHandel(id) {
  console.log('https://api.dev.hiifire.com/v1/kol/category/' + id)
  return axios.get('https://api.dev.hiifire.com/v1/kol/category/' + id
  )
}
