<template >
<v-app>
  <v-app-bar color="red" height="110">
    <router-link class="logo" to="/">
      <div class="navbar_logo">
      <img src="~./assets/logo_nav.png"  alt="logo" contain height="100"/>
      </div>
    </router-link>
    <template>
      <v-tabs
      background-color="deep-red"
      center-active
      centered
      dark
      >
        <v-tab  to="/"><h2>首頁</h2></v-tab>
        <v-tab  to="/about"><h2>品牌介紹</h2></v-tab>
        <v-tab to="/menu"><h2>菜單</h2></v-tab>
        <v-tab to="/shop"><h2>網路商城</h2></v-tab>
        <v-tab v-if="!user.isLogin" to="/register"><h2>註冊</h2></v-tab>
        <v-tab v-if="!user.isLogin" to="/login"><h2>登入</h2></v-tab>
        <v-tab v-if="user.isLogin && user.isAdmin" to="/admin"><h2>管理</h2></v-tab>
        <v-tab v-if="user.isLogin" @click="logout"><h2>登出</h2></v-tab>
        <v-tab to="/cart"><h2>購物車</h2></v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
  <router-view :key='$route.fullPath'></router-view>
  <Footer></Footer>
</v-app>
</template>

<script>
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Footer
  },
  methods: {
    // 登出就是把VueX的資料刪掉，要用非同步，
    // 透過dispatch actions去commit mutations 改 state
    logout () {
      this.$store.dispatch('user/logout')
    }
  },
  async created () {
    this.$store.dispatch('user/getInfo')
  }
}
</script>
