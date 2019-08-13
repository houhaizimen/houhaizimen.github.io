import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import { menusToRoutes, resetTokenAndClearUser } from './utils'

Vue.use(Router)
const commonRoutes = [
  {
      path: '/login',
      name: 'login',
      component: () => import('./views/login.vue')
  },
  {path: '/', redirect: '/home'},
]
// 需要通过后台数据来生成的组件
export const asyncRoutes = {
  'home': {
    path: 'home',
    name: 'home',
    component: () => import('./views/Home.vue')
  },  
  'password': {
      path: 'password',
      name: 'password',
      component: () => import('./views/Password.vue')
  },
  'msg': {
      path: 'msg',
      name: 'msg',
      component: () => import('./views/msg.vue')
  },
  'userinfo': {
      path: 'userinfo',
      name: 'userinfo',
      component: () => import('./views/UserInfo.vue')
  }
}
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: commonRoutes
})

// export function resetRouter() {
//   const newRouter = createRouter()
//   router.matcher = newRouter.matcher 
// }
router.beforeEach((to, from, next) => {
    console.log(store.state.menuItems)
    const routes = menusToRoutes(store.state.menuItems)
    // 动态添加路由
    router.addRoutes(routes)
    console.log(router)
    if (to.meta.auth) {
      if (store.state.username && store.state.password) {
        next()
      } else {
        alert('您还未登录')
        next({path:'/login'})
      }
    } else {
      next()
    }
})

// router.afterEach(() => {
//   return
// })
export default router
