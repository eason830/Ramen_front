import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user
  },
  plugins: [createPersistedState({
    key: 'shop', // 可以叫專題名稱，存localStorage名字要叫什麼
    paths: ['user.token'] // 要存什麼東西，這次存使用者的token，這樣就可以利用token去要使用者的資料
  })]
})
