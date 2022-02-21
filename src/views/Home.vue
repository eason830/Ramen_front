<template >
<v-app >
  <!-- 投影片 --------------------------------------------------------->
  <v-carousel
    cycle
    height="800"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >
    </v-carousel-item>
  </v-carousel>
  <!-- 投影片 --------------------------------------------------------->
  <!-- 品牌介紹 ------------------------------------------------------->
  <v-container style="background-color:rgb(253, 236, 0); flex-direction: column;" class="d-flex justify-center align-center">
    <div class="d-flex justify-center">
    <img src="../assets/logo.png" alt="logo" width="100px">
    <h1 style="text-align: center; margin-top: 30px; font-size: 50px;">品牌介紹</h1>
    </div>
    <v-row class="justify-center mt-3 pt-5" style="background-color:rgb(255, 255, 255); width: 90%;">
      <v-col cols="4">
        <img src="../assets/know001.png" style="object-fit: cover;">
      </v-col>
      <v-col cols="5" style="font-size: 20px; font-weight: 600;">
        <p>一九八一年創立於九州熊本，已遷到東京的總社專注多種餐飲業的經營，以美味及創新為企業宗旨，除了拉麵以外，無論是引領風潮的新式漢堡，或是被評為全東京第一名的日式煎餃，都創造出新的美食型態！

具有部份台灣血統的現任代表取締役坂田健先生賦與台灣分公司的唯一使命，就是將純正日本美食帶到台灣！希望這個分公司能擁有台灣人開創進取的精神，加上日本職人的堅持態度。

樂麵屋是由日本總公司直接在台灣所創立經營，有別於本地的公司代理日本既有拉麵品牌。建立直營的新品牌目的在於能夠即時以日本的標準直接管控餐點品質，同時不需背負既有品牌的限制，更能提出創新的做法及口味！這也是為什麼每個樂麵屋的分店都有不同的裝潢，氣氛及不同口味的特色拉麵，因為我們痛恨重複，創新求變和追求美味是根植在我們的基因裏的啊！</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-btn color="red" height="60" to="/about">
          <h2 style="color: white;">了解更多</h2>
        </v-btn>
      </v-col>
      </v-row>
  </v-container>
  <!-- 品牌介紹 ------------------------------------------------------->
  <!-- 菜單    ------------------------------------------------------->
  <v-container style="background-color:rgb(253, 236, 0); flex-direction: column;" class="d-flex justify-center align-center">
    <div class="d-flex justify-center">
    <img src="../assets/logo.png" alt="logo" width="100px">
    <h1 style="text-align: center; margin-top: 30px; font-size: 50px;">菜單</h1>
    </div>
    <v-row class="justify-center mt-3 pt-5" style="background-color:rgb(255, 255, 255); width: 90%;">
      <v-col cols="3">
        <v-card
          class="justify-center d-flex flex-column align-center"
          max-width="400">
          <v-img
          src="https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFtZW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          height="200px"
          ></v-img>

          <v-card-title>
            <h2>豚骨拉麵</h2>
          </v-card-title>

      <v-card-text class="mx-auto justify-center d-flex flex-column align-center">
        <h3>黯然消魂的豚骨，最經典口味</h3>
      </v-card-text>

  </v-card>
      </v-col>
      <v-col cols="3">
        <v-card
          class="justify-center d-flex flex-column align-center"
          max-width="400">
          <v-img
          src="https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFtZW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          height="200px"
          ></v-img>

          <v-card-title>
            <h2>泡菜拉麵</h2>
          </v-card-title>

      <v-card-text class="justify-center d-flex flex-column align-center">
        <h3>來自韓國的泡菜，阿你唷say唷</h3>
      </v-card-text>

  </v-card>
      </v-col><v-col cols="3">
        <v-card
          class="justify-center d-flex flex-column align-center"
          max-width="400">
          <v-img
          src="https://images.unsplash.com/photo-1618889482923-38250401a84e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFtZW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          height="200px"
          ></v-img>

          <v-card-title>
            <h2>雞白湯拉麵</h2>
          </v-card-title>

      <v-card-text class="mx-auto justify-center d-flex flex-column align-center">
        <h3>24小時舒肥雞肉，加上完美熬煮的雞湯</h3>
      </v-card-text>

  </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-btn color="red" height="60" to="/menu">
          <h2 style="color: white;">更多餐點</h2>
        </v-btn>
      </v-col>
      </v-row>
  </v-container>
  <!-- 菜單    ------------------------------------------------------->

</v-app>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      items: [
        {
          src: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFtZW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
          src: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFtZW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
          src: 'https://images.unsplash.com/photo-1618889482923-38250401a84e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFtZW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
          src: 'https://images.unsplash.com/photo-1632440722549-692fc6af969e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFtZW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        }
      ]
    }
  },

  components: {
  }
}
</script>
