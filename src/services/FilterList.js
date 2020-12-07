import axios from '../utils/request'

// 全部KOL
export function FilterList() {
  // console.log('https://api.hiifire.com/v1/kol')
  return axios.get(
    'https://api.hiifire.com/v1/kol'
  )
}
