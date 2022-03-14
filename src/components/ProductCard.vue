<template>
<v-card>
    <v-img
        :src="product.image"
        height="300px"
    ></v-img>
    <v-card-title>
        <router-link :to='"/product/" + product._id'>{{ product.name}}</router-link>
    </v-card-title>
    <v-card-subtitle>
        {{ product.category}} - {{ '$' + product.price}}
    </v-card-subtitle>
    <v-card-text style="white-space" pre >
        {{ product.description}}
    </v-card-text>
</v-card>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
