import { api } from '@/plugins/axios.js'
import swal from 'sweetalert2'
import router from '@/router'
// @/代表src資料夾

// { commit }解構 是 VueX的commit， VueX的用法，VueX的content有很多用法
export const login = async ({ commit }, form) => {
  try {
    // 在VueX這時不能用this.api會找不到，所以要引入api
    const { data } = await api.post('/users/login', form)
    // 在module裡面時，不需要寫user/login
    commit('login', data.result)
    router.push('/')
    swal.fire({
      icon: 'success',
      title: '成功',
      text: '登入成功'
    })
  } catch (error) {
    swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.response.data.message
    })
  }
}

export const logout = async ({ commit, state }) => {
  try {
    // 要傳jwt進去
    await api.delete('/users/logout', {
      headers: {
        authorization: 'Bearer ' + state.token
      }
    })
    commit('logout')
    router.push('/')
    swal.fire({
      icon: 'success',
      title: '成功',
      text: '登出成功'
    })
  } catch (error) {
    swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.response.data.message
    })
  }
}

export const getInfo = async ({ commit, state }) => {
  if (state.token.length === 0) return
  try {
    const { data } = await api.get('/users/me', {
      headers: {
        authorization: 'Bearer ' + state.token
      }
    })
    commit('getInfo', data.result)
  } catch (error) {
    commit('logout')
  }
}
