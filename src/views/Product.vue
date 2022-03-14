<template>
<v-container id="product" class="d-flex flex-column" style="align-items: center;">

  <v-overlay :value="!this.sell" v-if="!this.sell" dark >
      <h1> 商品已下架 </h1>
    <v-btn to="/shop">回到商城頁</v-btn>
  </v-overlay>

    <v-row class="flex-column" style="width:500px">
        <v-col>
          <h1 class="text-center" style="font-size: 50px; font-weight: bold;">{{ name }}</h1>
        </v-col>
        <v-col>
          <v-img :src="image" width="500px"></v-img>
        </v-col>
        <v-col>
          <h4 class="text-center pt-3" style="font-size: 30px; font-weight: bold;">${{ price }}</h4>
          <v-form >
              <v-text-field
                    readonly
                    height='20'
                    width="50px"
                    type='number'
                    v-model.number='quantity'
                    min='0'
                    :rules='qrule'
                    hide-spin-buttons
                    outlined
                    append-icon='mdi-plus'
                    prepend-inner-icon='mdi-minus'
                    @click:append='quantity++'
                    @click:prepend-inner='quantity > 0 ? quantity-- : null'
              ></v-text-field>
          </v-form>
        </v-col>

        <v-col>
          <p class="text-center" style="font-size: 25px; font-weight: bold;">{{ description }}</p>
        </v-col>
        <v-col class="d-flex flex-column" style="align-items: center;">
          <v-btn style="width:200px; height:80px; font-size: 25px;font-weight: bold;" color="primary" @click="addCart">加入購物車</v-btn>
        </v-col>
    </v-row>

</v-container>
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {
      name: '',
      price: 0,
      description: '',
      image: '',
      sell: false,
      category: '',
      quantity: 0,
      qrule: [
        v => v > 0 || '數量必須大於 0',
        v => !!v || '必填項目'
      ]

    }
  },
  methods: {
    addCart () {
      this.$store.dispatch('user/addCart', { product: this.$route.params.id, quantity: this.quantity })
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/products/' + this.$route.params.id)
      this.name = data.result.name
      this.price = data.result.price
      this.description = data.result.description
      this.image = data.result.image
      this.sell = data.result.sell
      this.category = data.result.category
      document.title = `${this.name} | 麵屋號`
    } catch (error) {
      this.$router.push('/')
    }
  }
}
</script>
