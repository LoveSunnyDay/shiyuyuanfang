import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '@/views/Index'
import Show from '@/views/Index/Show'
import Video from '@/views/Index/Video'
import Look from '@/views/Index/Look'
import LookFor from '@/views/Index/LookFor'
import About from '@/views/About'
import Editor from '@/views/Editor'
import Filter from '@/views/Filter'
import LoadFail from '@/views/LoadFail'
import DetailKuaiShou from '@/views/Detail/DetailKuaiShou'
import DetailDouYin from '@/views/Detail/DetailDouYin'
import DetailBilibili from '@/views/Detail/DetailBilibili'
import Channel from '@/views/Channel/Channel'
import ChannelMCN from '@/views/Channel/ChannelMCN'
import VideoArticle from '@/views/Index/VideoArticle'
import LoginJump from '@/views/LoginJump'

import Pay from '@/views/Pay/Pay'
import PayComplete from '@/views/Pay/PayComplete'
import PaymentAgreement from '@/views/Pay/PaymentAgreement'

import MyCenter from '@/views/MyCenter'
import MyOrder from '@/views/MyCenter/MyOrder'
import Expenditure from '@/views/MyCenter/Expenditure'
import Invoice from '@/views/MyCenter/Invoice'
import OpenInvoice from '@/views/MyCenter/OpenInvoice'
import MyProfile from '@/views/MyCenter/MyProfile'
import News from '@/views/MyCenter/News'
import CompanyInformation from '@/views/MyCenter/CompanyInformation'
import { getUrl, setCookie, getCookie } from '../utils'

// const Index = () => import('../components/Index')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Index'
  },
  {
    path: '/Index',
    component: Index,
    children: [
      {
        path: '',
        redirect: 'Look'
      },
      {
        path: 'Look',
        component: Look
      },
      {
        path: 'Show',
        component: Show
      },
      {
        path: 'Video',
        component: Video
      },
      {
        path: 'LookFor',
        component: LookFor
      }
    ]
  },
  {
    path: '/About',
    component: About
  },
  {
    path: '/Filter',
    component: Filter
  },
  {
    path: '/Editor',
    component: Editor
  },
  {
    path: '/MyCenter',
    component: MyCenter,
    children: [
      {
        path: '',
        redirect: 'MyOrder'
      },
      {
        path: 'MyOrder',
        component: MyOrder
      },
      {
        path: 'Expenditure',
        component: Expenditure
      },
      {
        path: 'Invoice',
        component: Invoice
      },
      {
        path: 'OpenInvoice',
        component: OpenInvoice
      },
      {
        path: 'MyProfile',
        component: MyProfile
      },
      {
        path: 'News',
        component: News
      },
      {
        path: 'CompanyInformation',
        component: CompanyInformation
      }
    ]
  },
  {
    path: '/Pay',
    component: Pay
  },
  {
    path: '/PayComplete',
    component: PayComplete
  },
  {
    path: '/PaymentAgreement',
    component: PaymentAgreement
  },
  {
    path: '/LoadFail',
    component: LoadFail
  },
  {
    path: '/DetailKuaiShou',
    component: DetailKuaiShou
  },
  {
    path: '/DetailDouYin',
    component: DetailDouYin
  },
  {
    path: '/DetailBilibili',
    component: DetailBilibili
  },
  {
    path: '/Channel',
    component: Channel
  },
  {
    path: '/ChannelMCN',
    component: ChannelMCN
  },
  {
    path: '/VideoArticle/:id',
    component: VideoArticle
  },
  {
    path: '/auth_redircect',
    component: LoginJump
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
  // mode: 'hash'
})
router.beforeEach(async (to, from, next) => {
  // add before changing logic
  console.log('window.location.href', window.location.href)
  // const href = window.location.href
  console.log('路由跳转', to, from)
  // /code && state
  if (to.path === '/auth_redircect') {
    // http://localhost:8082/auth_redircect?authclient=wx&code=051nl6Ha1WxZ3A0uLjIa1AkUIf2nl6He
    const code = getUrl(window.location.href, 'code')
    const state = getUrl(window.location.href, 'state')
    console.log('code', code)
    console.log('state', state)
    if (!!code || !!state) {
      window.axios.get(`/auth?authclient=wx&code=${code}&state=${state}`).then((res) => {
        console.log('res', res)
        const { data, success } = res
        const { token, user, profile } = data || {}
        const { avatar_url } = profile || {}
        console.log('授权返回值', data)
        if (success) {
          setCookie('wx-token', JSON.stringify(token.token), window.location.hostname, token.expire_at)
          setCookie('user', JSON.stringify(user), window.location.hostname, token.expire_at)
          setCookie('profile', JSON.stringify(profile), window.location.hostname, token.expire_at)
          setCookie('avatar_url', JSON.stringify(avatar_url), window.location.hostname, token.expire_at)

          window.close()
        }
      })
    }
  } else {
    next()
  }
})

export default router
