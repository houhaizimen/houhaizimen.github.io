<template>
  <div class="id">
    <h3 class="font-color">这是管理员界面</h3>
    <div class="flex-row">
      <div class="id-aside">
       <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <!-- <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu> -->
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">列表</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-location"></i>
            <span slot="title">权限</span>
          </el-menu-item>
          <!-- <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item> -->
        </el-menu>
      </div>
      <div class="id-right">
        <div class="id-add">
            <el-button
            size="medium"
            type="primary" @click="operateAdd">新增</el-button>
        </div>
        <div class="id-cont">
          <div class="id-row bg-545c64">
            <div class="id-col font-juse" v-for='(item, lidx) in list' :key='lidx'>
              {{item.name}}
            </div>
          </div>
          <div class="id-row" v-for='(item, uidx) in userList' :key='uidx'>
            <div class="id-col font-color" v-for='(iitem, iidx) in item' :key='iidx'>
              {{iitem}}
            </div>
            <div class="id-col font-color">
             <el-button
              size="mini"
              type="primary">编辑</el-button>
            </div>
          </div>
        </div>
      </div>
     </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      list: [
        { name: '序号' },
        { name: '用户名' },
        { name: '密码' },
        { name: '操作' }
      ]
    }
  },
  computed: {
    ...mapState([
      'userList'
    ])
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="scss">
.id{
  .id-aside{
    width: 160px;
    height: 800px;
    background-color: #545c64;
    ul>li{
      line-height:800px;
    }
  }
  .flex-row{
    display: flex;
  }
  .id-right{
    flex:1;
    background-color: rgb(243, 243, 243);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .id-cont{
      width: 1000px;
      border:1px solid #bcbec0;
      border-bottom:0;
      .id-row{
        height:44px;
        border-bottom:1px solid #bcbec0;
        display: flex;
        cursor: pointer;
      }
      .id-row:hover{
        background-color: rgba(0,0,0,0.1);
      }
      .id-col{
        flex:1;
        height: 100%;
        border-right: 1px solid #bcbec0;
        text-align: center;
        line-height: 44px;
      }
      .id-col:last-child{
        border:0;
      }
    }
    .id-add{
      align-self:flex-end;
    }
  }
}
.font-color{
  color:rgb(131, 122, 122);
}
.font-juse{
  color:rgb(255, 208, 75);
}
.bg-545c64{
  background-color: #545c64;
}
 .id-add{
        display: block !important;
        text-align: right;
      }
</style>
