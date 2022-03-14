<template>
<v-container>
  <h1>總金額 {{ total }}</h1>
  <v-btn @click='checkout' :disabled='products.length === 0'>結帳</v-btn>
  <v-data-table
    :headers="headers"
    :items="products"
    :items-per-page="5"
    :item-class='rowClass'>
        <template #item.product.image="{ item }">
                <v-img :src='item.product.image' height='60' width='100' contain></v-img>
        </template>
        <template #item.product.price="{ item }">
                <v-subheader>
                $ {{ item.product.price }}
                </v-subheader>
        </template>
        <template #item.quantity="{ item }">
                <v-form>
                        <v-text-field
                          readonly
                          dense
                          width='20'
                          type='number'
                          v-model.number='item.quantity'
                          min='10'
                          :rules='qrule'
                          hide-spin-buttons
                          outlined
                          append-icon='mdi-plus'
                          prepend-inner-icon='mdi-minus'
                          @click:append='item.quantity++;updateCart(item._id, item.quantity)'
                          @click:prepend-inner='item.quantity > 0 ? item.quantity-- : null;updateCart(item._id, item.quantity)'
                          @input='updateCart(item._id, item.quantity)'
                          style='width: 140px'
                        >

                        </v-text-field>
                        <v-btn color='error' @click='updateCart(item._id, 0)'> 刪除</v-btn>
                        <h2 v-if='!item.product.sell'>商品已下架</h2>
                </v-form>
        </template>
    </v-data-table>
</v-container>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        {
          text: '圖片',
          align: 'start',
          sortable: false,
          value: 'product.image'
        },
        {
          text: '商品',
          sortable: false,
          value: 'product.name'
        },
        { text: '價格', value: 'product.price' },
        { text: '操作', value: 'quantity' }
      ],
      products: [],
      qrule: [
        v => v > 0 || '數量必須大於 0',
        v => !!v || '必填項目'
      ]
    }
  },
  methods: {
    name: 'Cart',
    async updateCart (id, quantity) {
      try {
        const index = this.products.map(item => item._id).indexOf(id)
        await this.api.patch('/users/me/cart',
          { product: this.products[index].product._id, quantity },
          {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          }
        )
        if (quantity === 0) {
          this.products.splice(index, 1)
          this.$store.commit('user/updateCart', this.user.cart - 1)
        }
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: '修改購物車失敗'
        })
      }
    },
    async checkout () {
      try {
        await this.api.post('/orders', {}, {
          headers: {
            authorization: 'Bearer ' + this.user.token
          }
        })
        this.$router.push('/orders')
        this.$store.commit('user/updateCart', 0)
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: '結帳失敗'
        })
      }
    },
    rowClass (item, type) {
      return !item.product.sell ? 'error' : ''
    }
  },
  computed: {
    total () {
      return this.products.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.quantity * currentValue.product.price
      }, 0)
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/users/me/cart', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.products = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '失敗',
        text: '取得購物車失敗'
      })
    }
  }
}
</script>
