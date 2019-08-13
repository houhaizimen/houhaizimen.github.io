import router from './router'
import store from './store'
import { menusToRoutes, resetTokenAndClearUser } from './utils'

// 是否有菜单数据
let hasMenus = true
router.beforeEach((to, from, next) => {
    const routes = menusToRoutes(store.state.menuItems)
    // 动态添加路由
    router.addRoutes(routes)
    console.log(router)
    if (to.meta.auth) {
      if (store.state.username && store.state.password) {
        next()
      } else {
        alert('您还未登录')
        next('/login')
      }
    } else {
      next()
    }
    // if (store.state.token) {
    //     if (to.path === '/login') {
    //       next({path: '/'})
    //     } else {
    //         if (hasMenus) {
    //             next()
    //         } else {
    //             try {
    //                 // 这里可以用 await 配合请求后台数据来生成路由
    //                 // const data = await axios.get('xxx')
    //                 // const routes = menusToRoutes(data)
    //                 console.log(2222222222)
    //                 const routes = menusToRoutes(store.state.menuItems)
    //                 // 动态添加路由
    //                 router.addRoutes(routes)
    //                 console.log(router)
    //                 hasMenus = true
    //                 next({path: to.path || '/'})
    //             } catch (error) {
    //                 resetTokenAndClearUser()
    //                 next(`/login?redirect=${to.path}`)
    //             }
    //         }
    //     }
    // } else {
    //     hasMenus = false
    //     if (to.path === '/login') {
    //         next()
    //     } else {
    //         next(`/login?redirect=${to.path}`)
    //     }
    // }
})

router.afterEach(() => {
  return
})