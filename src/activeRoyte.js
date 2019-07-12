import router from './router'
import store from './store'
router.beforeEach((to, from, next) => {
    // 动态路由
    let adminRoutes = {
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
    // 拿到权限
    let role = localStorage.getItem('Role')
    if (to.meta.requireAuth) {
      if (store.state.Token) {
        // 判断权限和动态路由是否拿到 -----省略
        next()
      } else {
        next({ path: '/' })
      }
    } else {
      next()
    }
  })