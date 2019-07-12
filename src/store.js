import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    adminInfo: {},
    userInfo: {},
    Token: '',
    userList: [{
      id: 1,
      uname: 'test001',
      upwd: '123456'
    },
    {
      id: 2,
      uname: 'test002',
      upwd: '123456'
    },
    {
      id: 3,
      uname: 'test003',
      upwd: '123456'
    },
    {
      id: 4,
      uname: 'test004',
      upwd: '123456'
    },
    {
      id: 5,
      uname: 'test005',
      upwd: '123456'
    }]
  },
  mutations: {
    updateadminInfo (state, data) {
      state.adminInfo = data
    },
    updateuserInfo (state, data) {
      state.adminInfo = data
    },
    updateuserList (state, data) {
      state.userList = data
    },
    SET_TOKEN (state, data) {
      state.Token = data
    }
  }
})
