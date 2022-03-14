export default {
// VueX的資料要用computed去取
  computed: {
    user () {
    // 取getters的資料方法，這樣取資料就可以寫user.Login
      return this.$store.getters['user/user']
    }
  }
}
