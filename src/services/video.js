import { get } from '../utils/request'

// 全部KOL分类列表
export function Category() {
  console.log('http://api.dev.com/v1/kol-category')
  return get('http://api.dev.com/v1/kol-category')
}
