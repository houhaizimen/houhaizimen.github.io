<template>
    <div class="login">
      <div class="con">
        <h1>管理员登录</h1>
        <div><span>用户名：</span><el-input v-model="username" placeholder="请输入用户名"></el-input></div>
        <div><span>密码：</span><el-input v-model="password" placeholder="请输入密码" type='password' show-password></el-input></div>
        <el-button type="primary"  @click='tologin'>登录</el-button>
      </div>
        <!-- <div>用户名:<input type="text" v-model='username'></div>
        <div>密码:<input type="password" v-model='password'></div>
        <button @click='tologin'>登录</button> -->
    </div>
</template>
<script>
export default {
    name: 'login',
    data () {
      return {
        username: '',
        password: ''
      }
    },
    //  watch: {
    //     $route: {
    //         handler: function(route) {
    //             this.redirect = route.query && route.query.redirect
    //         },
    //         immediate: true
    //     }
    // },
    methods: {
      tologin () {
        console.log(typeof this.username)
        if (this.username === '123' && this.password === '123') {
          alert('登录成功')
          this.$store.commit('saveusername', this.username)
          this.$store.commit('savePsw', this.password)
         this.$router.push( '/')
        }
      }
    }
}
</script>
<style lang="scss">
    .login{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color:rgb(139, 135, 175);
      .con{
        position:absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        // transform: translateY(-50%);
        width: 400px;
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background-color: #fff;
        border: 1px solid #ccc;
        padding: 0 10px;
        box-sizing: border-box;
        div{
          display: flex;
          span{
            width: 60px !important;
          }
        }
      }
    }
</style>
