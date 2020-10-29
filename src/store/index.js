import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: null,
      password: null,
      login: false,
    },
  },
  mutations: {
    login(state, user) {
      state.user.name = user.name
      state.user.password = user.password
      state.user.login = true

      localStorage.setItem('user', JSON.stringify(user))
    },
    logout(state) {
      state.user.name = null
      state.user.password = null
      state.user.login = false
    },
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    }
  },
  actions: {
  },
  modules: {}
})
