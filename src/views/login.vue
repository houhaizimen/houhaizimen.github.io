<template>
  <div class="login">
    <div v-if='isAdmin'>
      <h1 class="mb-28 lg-title">管理员登录</h1>
      <el-input v-model="adname" placeholder="请输入管理员账号" class="mb-28"></el-input>
      <el-input v-model="adpwd" placeholder="请输入管理员密码" class="mb-28"  show-password></el-input>
      <el-button type="primary" size='medium' @click='toadPage' class="mb-28">管理员登录</el-button>
    </div>
    <div v-else>
      <h1 class="mb-28 lg-title">用户登录</h1>
      <el-input v-model="uname" placeholder="请输入用户账号" class="mb-28"></el-input>
      <el-input v-model="upwd" placeholder="请输入用户密码" class="mb-28"  show-password></el-input>
      <el-button type="primary" size='medium' @click='touserPage' class="mb-28">用户登录</el-button>
    </div>
     <div class="lg-login" @click='checkPage'>
      {{isAdmin?'用户登录':'管理员登录'}}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      adname: '',
      adpwd: '',
      uname: '',
      upwd: '',
      isAdmin: true
    }
  },
  computed: {
    ...mapState([
      'adminInfo',
      'userInfo'
    ])
  },
  created () {
    if (this.adminInfo) {
      this.adname = this.adminInfo.adname
      this.adpwd = this.adminInfo.adpwd
    }
  },
  methods: {
    checkPage () {
      this.isAdmin = !this.isAdmin
    },
    message (msg) {
      this.$message({
        message: msg,
        type: 'warning'
      })
    },
    toadPage () {
      if (!this.adname && !this.adpwd) {
        this.message('用户名或者密码不能为空')
        return
      }
      if (this.adname === 'admin' && this.adpwd === '123456') {
        let userInfo = { adname: this.adname, adpwd: this.adpwd }
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
        localStorage.setItem('Token', JSON.stringify({ token: '123456789abc' }))
        localStorage.setItem('Role', JSON.stringify({ role: 'Admin' }))
        localStorage.setItem('adminRoutes', JSON.stringify(adminRoutes))
        this.$store.commit('updateuserInfo', userInfo)
        this.$store.commit('SET_TOKEN', '123456789abc')
        this.$router.push('/index')
      } else {
        this.message('用户名或者密码有误')
      }
    },
    touserPage () {
      this.message('功能正在完善，敬请期待')
    }
  }
}
</script>
<style lang='scss'>
.lg-title{
  color:#545c64;
}
  .login{
    width: 400px;
    margin: auto;
    margin-top:200px;
    padding: 20px 10px;
    border: 2px solid #545c64;
    .el-button--primary{
      background-color:#545c64;
      border-color:#545c64;
    }
    .el-button--medium{
      width:100%;
    }
  }
  .mb-28{
    margin-bottom: 28px !important;
  }
  .lg-login{
    color:#545c64;
    text-align: right;
    font-weight:600;
    cursor: pointer;
  }
</style>
