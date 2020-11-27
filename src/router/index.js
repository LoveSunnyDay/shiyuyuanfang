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
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
  // mode: 'hash'
})

export default router
