import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

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

import Pay from '@/views/Pay/Pay'
import PayComplete from '@/views/Pay/PayComplete'
import PaymentAgreement from '@/views/Pay/PaymentAgreement'

import MyCenter from '@/views/MyCenter'
import MyOrder from '@/views/MyCenter/MyOrder'
import Expenditure from '@/views/MyCenter/Expenditure'
import Invoice from '@/views/MyCenter/Invoice'
import AllInvoice from '@/views/MyCenter/AllInvoice'
import OpenInvoice from '@/views/MyCenter/OpenInvoice'
import MyProfile from '@/views/MyCenter/MyProfile'
import News from '@/views/MyCenter/News'
import CompanyInformation from '@/views/MyCenter/CompanyInformation'
import { getUrl } from '../utils'

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
        path: 'AllInvoice',
        component: AllInvoice
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
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
  // mode: 'hash'
})
router.beforeEach(async(to, from, next) => {
  // add before changing logic
  console.log('router.app.$options.store', store)
  console.log('window.location.href', window.location.href)
  console.log('asdasdasdasdasdas', to, from)
  const code = getUrl(window.location.href, 'code')
  const state = getUrl(window.location.href, 'state')
  console.log('code', code)
  console.log('state', state)
  // /code && state
  if (to.path === '/auth_redircect' && !!code && !!state) {
    // http://localhost:8082/auth_redircect?authclient=wx&code=051nl6Ha1WxZ3A0uLjIa1AkUIf2nl6He&state=5594d18b3127dc713d272ae145aac62eff071e11ac7e4ab412f760e3a16898a0
    console.log(' if (to.fullPath')
    window.axios.get(`http://api.dev.hiifire.com/v1/auth?authclient=wx&code=${code}&state=${state}`).then((res) => {
      console.log('res', res)
      const { data, success } = res
      if (success) {
        store.commit('wxLogin/setUserInfo', data)
      } else {
        store.commit('wxLogin/wxLoginFailed')
      }
    })
    next(from.path)
  } else {
    next()
  }
})

export default router
