import axios from '../utils/request'

// 全部KOL分类列表
export function ContentList() {
  return axios.get('https://api.dev.hiifire.com/v1/kol/recommend')
}

// 跳转kol分类详情页
export function LookForHandel(id) {
  return axios.get('https://api.dev.hiifire.com/v1/kol/category/' + id)
}

// 网红分类列表
export function LookForClassify() {
  return axios.get('http://api.dev.hiifire.com/v1/kol-category')
}

// 网红平台列表
export function LookForPlatform() {
  return axios.get('http://api.dev.hiifire.com/v1/plat')
}

// 全部素材（文章）
export function AllArticle() {
  // return axios.get('http://api.dev.hiifire.com/v1/article')
  return axios.get('https://api.dev.hiifire.com/v1/article?category_id=1')
}
export function AllArticle2() {
  return axios.get('https://api.dev.hiifire.com/v1/article?category_id=2')
}
export function AllArticle3() {
  return axios.get('https://api.dev.hiifire.com/v1/article?category_id=3')
}
export function AllArticle4() {
  return axios.get('https://api.dev.hiifire.com/v1/article?category_id=4')
}
export function AllArticle5() {
  return axios.get('https://api.dev.hiifire.com/v1/article?category_id=5')
}
export function AllArticle6() {
  return axios.get('https://api.dev.hiifire.com/v1/article?category_id=6')
}
export function AllArticle7() {
  return axios.get('https://api.dev.hiifire.com/v1/article?category_id=7')
}
export function AllArticle8() {
  return axios.get('https://api.dev.hiifire.com/v1/article?category_id=8')
}
export function AllArticle9() {
  return axios.get('https://api.dev.hiifire.com/v1/article?category_id=9')
}
export function AllArticle10() {
  return axios.get('https://api.dev.hiifire.com/v1/article?category_id=10')
}

// 素材（文章）详情
// export function ArticleDetails(id) {
//   return axios.get('http://api.dev.hiifire.com/v1/article/' + id)
// }

// export const getArticle = (id = 1) => {
//   return axios.get(`http://api.dev.hiifire.com/v1/article/?${id}`)
// }

// 视频素材分类接口
export function VideoClassify() {
  return axios.get('http://api.dev.hiifire.com/v1/article-category')
}

// 视频素材轮播图
export function VideoBanner() {
  return axios.get('https://api.dev.hiifire.com/v1/article/focus')
}

// 精选热度素材
export function VideoMaterial() {
  return axios.get('https://api.dev.hiifire.com/v1/article/recommend')
}
