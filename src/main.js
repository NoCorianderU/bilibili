
import Vue from 'vue'
import App from './App'

import router from './router'
import store from './store'

import '@/assets/common.css'
import '@/assets/iconfont.css'

import { sideNav, imgAnim } from '@/assets/global.js'
Vue.prototype.$sideNav = sideNav
Vue.prototype.$imgAnim = imgAnim

import EasyScroll from 'easyscroll'
Vue.use(EasyScroll)

// router.beforeEach((to, from, next) => {
//   console.log('beforeEach')
//   if(to.fullPath == '/app') { next({path: '/login'}) }
// })

// router.beforeResolve((to, from, next) => {
//   console.log('beforeResolve')
//   next()
// })

// router.afterEach((to, from, next) => {
//   console.log('afterEach')
//   next()
// })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})

import '@/assets/global.js'
