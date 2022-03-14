<template>
<v-container>
  <v-data-table
    :headers="headers"
    :items="orders"
    :items-per-page="5">
        <template #item.date="{ item }">
          {{ new Date(item.date).toLocaleString('zh-tw') }}
        </template>
        <template #item.products="{item}">
        <ul>
          <li v-for="product in item.products" :key="product._id">
          {{ product.product.name }} x {{ product.quantity }}
          </li>
        </ul>
        </template>
    </v-data-table>
</v-container>
</template>
<script>
export default {
  data () {
    return {
      orders: [],
      headers: [
        { text: '單號', value: '_id' },
        { text: '日期', value: 'date' },
        { text: '商品', value: 'products' }
      ]
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/orders/me', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.orders = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '失敗',
        text: '取得訂單失敗'
      })
    }
  }
}
</script>
