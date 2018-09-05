import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/index.vue'
import Video from '@/views/video.vue'
import Account from '@/views/account'

const register = () => import('@/views/register')

const phone = () => import('@/components/register/RePhone')
const email = () => import('@/components/register/ReEmail')
const login = () => import('@/components/Login')
const action = () => import('@/components/Action')

const home = () => import('@/components/account/Home')
const big = () => import('@/components/account/Big')
const points = () => import('@/components/account/Points')
const setting = () => import('@/components/account/Setting')
const face = () => import('@/components/account/Face')
const nameplate = () => import('@/components/account/Nameplate')
const security = () => import('@/components/account/Security')
const blacklist = () => import('@/components/account/Blacklist')
const coin = () => import('@/components/account/Coin')
const record = () => import('@/components/account/Record')
const identification = () => import('@/components/account/Identification')
const invitation = () => import('@/components/account/Invitation')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },

    {
      path: '/video/:av',
      name: 'video',
      props: true,
      component: Video
    },

    {
      path: '/account',
      name: 'account',
      component: Account,
      children: [
        {
          path: 'home',
          component: home,
          meta: {
            active: '/home'
          }
        },
        {
          path: 'big',
          component: big,
          meta: {
            active: '/big'
          }
        },
        {
          path: 'points',
          component: points,
          meta: {
            active: '/points'
          }
        },
        {
          path: 'setting',
          component: setting,
          meta: {
            active: '/setting'
          }
        },
        {
          path: 'face',
          component: face,
          meta: {
            active: '/face'
          }
        },
        {
          path: 'nameplate',
          component: nameplate,
          meta: {
            active: '/nameplate'
          }
        },
        {
          path: 'security',
          component: security,
          meta: {
            active: '/security'
          }
        },
        {
          path: 'blacklist',
          component: blacklist,
          meta: {
            active: '/blacklist'
          }
        },
        {
          path: 'coin',
          component: coin,
          meta: {
            active: '/coin'
          }
        },
        {
          path: 'record',
          component: record,
          meta: {
            active: '/record'
          }
        },
        {
          path: 'identification',
          component: identification,
          meta: {
            active: '/identification'
          }
        },
        {
          path: 'invitation',
          component: invitation,
          meta: {
            active: '/invitation'
          }
        },
      ]
    },

    {
      path: '/register',
      name: 'register',
      component: register,
      children: [
        {
          path: 'phone',
          component: phone,
          meta:{
            title:'哔哩哔哩弹幕视频网 - ( ゜- ゜)つロ 乾杯~ - bilibili'
          }
        },
        {
          path: 'email',
          component: email,
          meta:{
            title:'哔哩哔哩弹幕视频网 - ( ゜- ゜)つロ 乾杯~ - bilibili'
          }
        },
      ]
    },

    {
      path: '/login',
      name: 'login',
      component: login
    },

    {
      path: '/action',
      name: 'action',
      component: action
    },
      // path: '/animate/:id',
      // props: true,
      // props: (route) => ({id: route.query.a}),
      // children: [
      //   {
      //     path: 'test',
      //     component: Index
      //   }
      // ],
      // beforeEnter(to, from, next) {   }
  ],
  mode: 'history',
  fallback: true
})
