import router from '../../../router.js'
import Vue from 'vue'
import axios from 'axios'

axios.defaults.headers.common['Accept'] = 'application/json'

const actions = {
  login ({ commit, dispatch }, authData) {
    axios.post('http://localhost:3000/users/sign_in', {
      user: {
        email: authData.email,
        password: authData.password
      }
    })
    .then(res => {
      const now = new Date()
      const expirationDate = new Date(now.getTime() + (24 * 60 * 60))
      localStorage.setItem('authorization', res.headers.authorization)
      localStorage.setItem('expirationDate', expirationDate)
      commit('authUser', res.headers.authorization)
      dispatch('getUserInfo', res.data)
      commit('setUsername', authData.username)
      commit('setUserAuthUid', res.data.id)

      router.push({name: 'root_path'})
    })
    .catch(err => {
      console.log(err);
    })
  },
  logout ({ commit }) {
    commit('clearAuthData')
    localStorage.removeItem('authorization')
    localStorage.removeItem('expirationDate')

    router.replace('/sign_in')
  },
  tryAutoLogin ({ commit }) {
    const authorization = localStorage.getItem('authorization')
    if (!token) return

    const expirationDate = localStorage.getItem('expirationDate')
    const now = new Date()

    if (now >= expirationDate) return

    commit('authUser', authorization)
  },
  getUserInfo({ dispatch, commit, state }, user) {
    let userObject = Object.assign({
      auth_uid: user.id,
      token: user.authorization,
      email: user.email
    })

    axios.post(`http://localhost:3000/users/${user.id}`,
      { user: userObject },
      { headers: { 'X-AUTH-TOKEN': state.authorization }
    })
  }
}

export default actions
