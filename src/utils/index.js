import { asyncRoutes, resetRouter } from '../router'

// 将菜单信息转成对应的路由信息 动态添加
export function menusToRoutes(data) {
    console.log(data)
    const result = []
    const children = []

    result.push({
        path: '/',
        meta: {auth: true},
        component: () => import('../views/loginTest.vue'),
        children,
    })
    data.forEach(item => {
        generateRoutes(children, item)
    })
    console.log(result)
    return result
}

function generateRoutes(children, item) {
    if (item.name) {
        if (asyncRoutes[item.name]) {
        children.push(asyncRoutes[item.name])
        }
    } else if (item.children) {
        item.children.forEach(e => {
            generateRoutes(children, e)
        })
    }
}

export function resetTokenAndClearUser() {
    // 退出登陆 清除用户资料
    // 重设路由
    resetRouter()
}