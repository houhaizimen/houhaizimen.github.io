<template>
  <div class="fixed">
    <!-- 头部 -->
    <div class="top">
      <img src="../assets/logo.png" alt="">
      <div>恭喜你登录成功</div>
    </div>
    <!-- body -->
    <div class="bottom">
      <!-- 左侧 -->
      <div class="left">
        <el-menu
          router
          default-active="2"
          class="el-menu-vertical-demo h-100"
          background-color="rgb(135, 190, 135)"
          text-color="#fff"
          active-text-color="rgb(228, 98, 59)">
          <el-submenu  v-for="(item, index) in menuItems" :key="index" :index="'/'+item.name" >
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>{{item.text}}</span>
            </template>
            <div  v-if='item.children'>
              <el-submenu v-for="(subItem, i) in item.children" :key="index + i"   :index="'/'+subItem.name">
                <template slot="title">{{subItem.text}}</template>
                <div v-if='subItem.children'>
                  <el-menu-item v-for="(threeItem, k) in subItem.children"  :index="'/'+threeItem.name" :key="index + i + k">{{threeItem.text}}</el-menu-item>
                </div>
              </el-submenu>
            </div>
          </el-submenu>
        </el-menu>
      </div>
      <!-- 右侧 -->
      <div class="right">
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
import { resetTokenAndClearUser } from '../utils'
export default {
  data () {
    return {
      routeList: []  
    }
  },
  // 菜单栏
  computed: {
    menuItems() {
      return this.$store.state.menuItems
    },
  },
  created () {
    resetTokenAndClearUser()
  },
  methods: {
    handleOpen (key) {
      console.log(key)
    },
    handleClose (key) {
      console.log(key)
    }
  }
}
</script>
<style lang="scss">
  .fixed{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .top{
      width: 100%;
      height: 20%;
      background-color: rgb(152, 205, 214);
      display: flex;
      justify-content:space-between;
      align-items: center;
      img{
        width: 100px;
        height: 100px;
      }
    }
    .bottom{
      width: 100%;
      height: 80%;
      display: flex;
      .left{
        width: 10%;
        height: 100%;
        // background-color: rgb(228, 98, 59);
      }
      .right{
        flex: 1;
        height: 100%;
        background-color: rgb(166, 125, 170);
      }
    }
  }
  .h-100{
    height: 100%;
  }
</style>