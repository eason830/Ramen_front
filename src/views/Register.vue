<template>
<v-app>
  <v-form v-model="valid" class="mb-5" ref="form" lazy-validation @submit.prevent="register">
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

            <v-col cols="12" md="4">
                <v-text-field
                  v-model="form.email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>
            </v-col>
            <v-col cols="12" md="4" class="d-flex justify-center mt-5">
                <v-btn style="font-size: 20px;font-weight: 600;color: white;" large color="red" type="submit" @click="accountvalidate">註冊</v-btn>
            </v-col>
        </v-row>
    </v-container>
  </v-form>
</v-app>
</template>

<script>

export default {
  name: 'Register',
  data: () => ({
    form: {
      account: '',
      password: '',
      email: ''
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
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    show: false
  }),
  methods: {
    accountvalidate () {
      this.$refs.form.validate()
    },
    async register () {
      const valid = this.$refs.form.validate()
      if (!valid) return
      try {
        await this.api.post('/users', this.form)
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '註冊成功'
        })
        this.$router.push('/')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: error.response.data.message
        })
      }
    }
  }
}
</script>
