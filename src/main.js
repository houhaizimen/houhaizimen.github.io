import Vue from 'vue'
// import store from './store'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
// router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth) {
//     if (store.state.Token) {
//       next()
//     } else {
//       next({ path: '/' })
//     }
//   } else {
//     next()
//   }
// })
router.beforeEach((to, from, next) => {
  // 动态路由
  // 拿到权限
  let role = localStorage.getItem('Role')
  let adminRoutes
  if (adminRoutes) {
     adminRoutes = localStorage.getItem('adminRoutes')
  } else {
    adminRoutes = {
          path: '/index', 
          component: './views/index', 
          redirect: 'index',
          children: [
            {
              path: '/userList',
              component: '/index/userList',
              meta: {
                title: '列表',
                icon: 'userList'
              }
            },
            {
              path: '/role',
              component: '/index/role',
              meta: {
                title: '权限',
                icon: 'role'
              }
            }
          ]
  }
  if (to.meta.requireAuth) {
    if (store.state.Token) {
      // 判断权限和动态路由是否拿到 -----省略
      if (role === 'admin') {
        routerGo(to, next, adminRoutes)
      }
    } else {
      next({ path: '/' })
    }
  } else {
    next()
  }
})
function routerGo (to, next, getRouter) {
  router.addRoutes(getRouter)
  global.antRouter = getRouter
  next({...to, replace: true})
}
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
