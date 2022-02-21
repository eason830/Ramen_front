<template>
<v-app>
  <v-form v-model="valid">
    <v-container style="background-color:rgb(253, 236, 0)">
      <v-row class="flex-column align-center mt-5">
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="name"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
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
    valid: false,
    name: '',
    nameRules: [
      v => !!v || '名字必填',
      v => v.length <= 10 || '名字最多十個字',
      v => v.length >= 2 || '名字最少兩個字'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
  }),
  methods: {

  }
}
</script>
