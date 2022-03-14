<template>
<v-app>
    <v-row justify="center" class="d-flex flex-column">
    <v-dialog
      v-model="dialog"
      max-width="600px"
      @click:outside='resetForm()'
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          新增商品
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">{{ isEdit }}</span>
        </v-card-title>
          <v-form ref='form' v-modal="valid" lazy-validation>
          <v-container>
            <v-row>
              <v-col>
                <img-inputer
                accept="image/*"
                v-model="form.image"
                theme="light"
                size="large"
                bottom-text="點選或拖拽圖片以修改"
                hover-text="點選或拖拽圖片以修改"
                placeholder="點選或拖拽選擇圖片"
                :max-size="1024"
                exceed-size-text="檔案大小不能超過"
                ></img-inputer>
              </v-col>
              <v-col cols="12">
                    <v-text-field
                      label="商品名稱"
                      :rules="nameRules"
                      :counter="10"
                      v-model="form.name"
                      required
                    ></v-text-field>
              </v-col>
              <v-col cols="12">
                    <v-text-field
                      label="商品價格"
                      v-model="form.price"
                      required
                      prefix='$'
                    ></v-text-field>
              </v-col>
              <v-col cols="12">
                    <v-select
                      label="商品分類"
                      :items='categories'
                      v-model="form.category"
                      required
                      :rules="[v => !!v || 'Item is required']"
                    ></v-select>
              </v-col>
              <v-col cols="12">
                    <v-text-field
                      label="商品說明"
                      :counter="20"
                      v-model="form.description"
                      required
                    ></v-text-field>
              </v-col>
              <v-col cols="12">
                    <v-radio-group v-model="form.sell" mandatory>
                      <v-radio label="上架" :value="true"></v-radio>
                      <v-radio label="下架" :value="false"></v-radio>
                    </v-radio-group>
              </v-col>
            </v-row>
          </v-container>
          </v-form>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            @click='resetForm()'
            :disabled='modalSubmitting'
            color='error'
          >
            取消
          </v-btn>
          <v-btn
            :disabled='!valid || modalSubmitting'
            color='success'
            @click='validate();submitModal()'
          >
            送出
          </v-btn>
        </v-card-actions>
      </v-card>
      </v-dialog>
      <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left" v-for="thead in theads" :key="thead.name">
            {{ thead }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(product, index) in products"
          :key="product._id"
        >
          <td>
            <img v-if="product.image" :src="product.image" style="height:50px">
          </td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.category  }}</td>
          <td>{{ product.description  }}</td>
          <td>
            <h1>{{ product.sell ? 'v' : '' }}</h1>
          </td>
          <td>
            <v-btn @click="editProduct(index)">編輯</v-btn>
          </td>
        </tr>
      </tbody>
    </template>
    </v-simple-table>
  </v-row>
</v-app>
</template>
<script>
export default {
  data () {
    return {
      dialog: false,
      valid: true,
      modalSubmitting: false,
      products: [],
      form: {
        name: '',
        price: null,
        description: '',
        image: null,
        sell: false,
        category: '',
        _id: '',
        index: -1
      },
      nameRules: [
        v => !!v || '商品名稱必填',
        v => v.length <= 10 || '商品名稱最多十個字',
        v => v.length >= 2 || '商品名稱最少兩個字'
      ],
      priceRules: [
        v => !!v || '商品價格必填',
        v => v.length >= 0 || '商品價格最少0元'
      ],
      categories: [
        { text: '請選擇分類', value: '' },
        '飾品', '皮件', '鞋子'
      ],
      theads: ['圖片', '名稱', '價格', '分類', '說明', '上架', '操作']

    }
  },
  computed: {
    isEdit () {
      return this.form._id ? '編輯商品' : '新增商品'
    },
    editDontNeedImg () {
      if (this.form._id.length === 0) {
        return ''
      } else {
        return this.form.image === null
      }
    }

  },
  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
      this.form = {
        image: null,
        category: null,
        _id: '',
        index: -1
      }
    },
    async submitModal () {
      this.modalSubmitting = true
      const fd = new FormData()
      for (const key in this.form) {
        if (key !== '_id') {
          fd.append(key, this.form[key])
        }
      }
      try {
        if (this.form._id.length === 0) {
          const { data } = await this.api.post('/products', fd, {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
          this.products.push(data.result)
        } else {
          const { data } = await this.api.patch('/products/' + this.form._id, fd, {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
          console.log(data)
          // console.log(...this.form)
          // this.products[this.form.index] = { ...this.form, image: data.result.image }
          // 編輯後 table 不會更新，所有這裡編輯後整條刪除後再丟編輯後的進去那該位置
          this.products.splice(this.form.index, 1, data.result)
        }
        this.dialog = false
        this.reset()
      } catch (error) {
        if (this.form.name === '' || (this.form.price === null || '') || this.form.category === null) {
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: '必填欄位不能為空'
          })
        } else if (this.form.image === null) {
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: '圖片欄位不得為空'
          })
        } else {
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: error.response.data.message
          })
        }
      }
      this.modalSubmitting = false
    },
    resetForm (event) {
      if (this.modalSubmitting) {
        event.preventDefault()
      }
      this.dialog = false
      this.form = {
        name: '',
        price: null,
        description: '',
        image: null,
        sell: false,
        category: null,
        index: -1
      }
    },
    editProduct (index) {
      this.form = { ...this.products[index], image: null, index }
      this.dialog = true
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/products/all', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.products = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得商品失敗'
      })
    }
  }
}
</script>
