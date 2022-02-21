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
        <v-tab to="/product"><h2>商品</h2></v-tab>
        <v-tab to="/register"><h2>註冊</h2></v-tab>
        <v-tab to="/login"><h2>登入</h2></v-tab>
        <v-tab to="/cart"><h2>購物車</h2></v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
  <router-view></router-view>
  <Footer></Footer>
</v-app>
</template>

<script>
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>
