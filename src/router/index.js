import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../components/Index'
import Show from '../components/Show'
import Video from '../components/Video'
import Look from '../components/Look'
import LookFor from '../components/LookFor'
import About from '../components/About'
import Footer from '../components/Footer'
import Filter from '../components/Filter'
import Editor from '../components/Editor'
import MyCenter from '../components/MyCenter'
import MyOrder from '../components/MyCenter/MyOrder'
import Expenditure from '../components/MyCenter/Expenditure'
import Invoice from '../components/MyCenter/Invoice'
import AllInvoice from '../components/MyCenter/AllInvoice'
import OpenInvoice from '../components/MyCenter/OpenInvoice'
import MyProfile from '../components/MyCenter/MyProfile'
import News from '../components/MyCenter/News'
import CompanyInformation from '../components/MyCenter/CompanyInformation'
import Pay from '../components/Pay/Pay'
import PayComplete from '../components/Pay/PayComplete'
import LoadFail from '../components/LoadFail'
import Shopping from '../components/Shopping'
import Header from '../components/Header'

// const Index = () => import('../components/Index')
// const LookFor = () => import('../components/LookFor')
// const Show = () => import('../components/Show')
// const Video = () => import('../components/Video')
// const About = () => import('../components/About')
// const Footer = () => import('../components/Footer')
// const Filter = () => import('../components/Filter')
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
    path: '/Footer',
    component: Footer
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
    path: '/LoadFail',
    component: LoadFail
  },
  {
    path: '/Shopping',
    component: Shopping
  },
  {
    path: '/Header',
    component: Header
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
  // mode: 'hash'
})

export default router
