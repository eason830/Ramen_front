<template>
<v-app>
  <v-form v-model="valid" class="mb-5" ref="form" lazy-validation @submit.prevent="login">
      <v-container style="background-color:rgb(253, 236, 0);height: 800px;padding-top: 100px;">
        <v-row class="flex-column align-center mt-5">
            <v-col cols="12" md="4">
                <v-text-field
                  v-model="form.account"
                  :rules="accountRules"
                  :counter="10"
                  label="帳號"
                  required
                ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
                <v-text-field
                    v-model="form.password"
                    :rules="passwordRules"
                    counter="10"
                    label="密碼"
                    required
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show ? 'text' : 'password'"
                    @click:append="show = !show"
                ></v-text-field>
            </v-col>

            <v-col cols="12" md="4" class="d-flex justify-center mt-5">
                <v-btn style="font-size: 20px;font-weight: 600;color: white;" large color="red" type="submit" @click="accountvalidate">登入</v-btn>
            </v-col>
        </v-row>
    </v-container>
  </v-form>
</v-app>
</template>

<script>

export default {
  name: 'Login',
  data: () => ({
    form: {
      account: '',
      password: ''
    },
    valid: true,
    account: '',
    accountRules: [
      v => !!v || '帳號必填',
      v => v.length <= 10 || '帳號最多十個字',
      v => v.length >= 4 || '帳號最少四個字'
    ],
    password: '',
    passwordRules: [
      v => !!v || '密碼必填',
      v => v.length >= 4 || '密碼最少四個字'
    ],
    show: false
  }),
  methods: {
    accountvalidate () {
      this.$refs.form.validate()
    },
    // 這種寫法，非同步放在actions.js裡，不能放在mutations.js裡
    // actions要改state一樣要commit呼叫mutations去改state
    login () {
      // .dispatch() 是呼叫actions.js
      // 外層要加module的名稱，user/login
      this.$store.dispatch('user/login', this.form)
    }
  }
}
</script>
