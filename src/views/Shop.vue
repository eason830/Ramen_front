<template lang="pug">
<v-container id="shop">
    <v-row>
      <v-col cols="12" md="6" lg='3' v-for='product in products' :key='product._id' >
          <ProductCard :product='product'></ProductCard>
      </v-col>
    </v-row>
</v-container>
</template>
<script>
import ProductCard from '../components/ProductCard.vue'
export default {
  name: 'Shop',

  components: {
    ProductCard
  },
  data () {
    return {
      products: []
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/products')
      this.products = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '商品取得失敗'
      })
    }
  }
}
</script>
