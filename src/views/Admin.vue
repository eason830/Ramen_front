<template>
<v-app>
  <v-container>
    <v-row>
          <v-col cols="12">
                <template>
                      <v-tabs
                      background-color="deep-red"
                      center-active
                      centered
                      dark
                      >
                              <v-tab  to="/admin/products"><h2>商品管理</h2></v-tab>
                              <v-tab  to="/admin/orders"><h2>訂單管理</h2></v-tab>
                      </v-tabs>
                </template>
          </v-col>
          <v-col cols="12">
                <router-view></router-view>
          </v-col>
    </v-row>
  </v-container>
</v-app>
</template>
