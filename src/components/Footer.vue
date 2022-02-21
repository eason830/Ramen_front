<template>
  <v-footer style="background-color:rgb(63, 62, 62);">
    <v-row class="justify-center">
      <v-col cols="2" class="d-flex justify-end">
        <img src="../assets/logo.png" alt="logo" width="100px">
      </v-col>
      <v-col class="d-flex justify-center flex-column" cols="2" style="color: white;">
        <h2 style="color: white; padding-top:20px; padding-left: 60px;">麵屋號</h2>
        <p>Email:ramen666@ramen.com</p>
      </v-col>
    </v-row>
      <v-col class="text-center footer mt-2" cols="12" style="color: white;">
        Copyright © {{ new Date().getFullYear() }} <strong>純粹學習使用</strong>. All
        rights reserved. 版權所有© {{ new Date().getFullYear() }}
      </v-col>
    </v-footer>
</template>

<script>

export default {
  name: 'Footer',

  components: {
  }
}
</script>
