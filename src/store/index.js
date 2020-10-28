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
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    }
  },
  actions: {
    async setLog ({dispatch, commit, state}, {par, username, firebase}) {
      try {
        console.log(par, 'setlogin')
        console.log(par)
        function formatDate(d) {
          const ye = new Intl.DateTimeFormat('ru', {year: 'numeric'}).format(d)
          const mo = new Intl.DateTimeFormat('ru', {month: '2-digit'}).format(d)
          const da = new Intl.DateTimeFormat('ru', {day: '2-digit'}).format(d)
          const h = new Intl.DateTimeFormat('ru', {hour: '2-digit'}).format(d)
          const m = new Intl.DateTimeFormat('ru', {minute: '2-digit'}).format(d)
          const s = new Intl.DateTimeFormat('ru', {second: '2-digit'}).format(d)
          return da + "/" + mo + "/" + ye + ' ' + h + ':' + m + ':' + s
        }

        // let logs = JSON.parse(this.fbData.logs)
        if (par === 'login') {
          console.log(firebase, 'firebase')
          // A post entry.
          var logData = formatDate(new Date()) + ': юзер ' + username + ' зашел '
          // Get a key for a new Post.
          var newLogKey = firebase.ref().child('logs').push().key;
          // Write the new post's data simultaneously in the posts list and the user's post list.
          var updates = {};
          updates['/logs/' + newLogKey] = logData;
          return await firebase.ref().update(updates);
        }


        // if (par == 'addItemCount') {
        //   logs.push(this.formatDate(new Date()) + ': юзер ' + this.user.nick + ' добавил ' + this.changeDataItem.ruName + ' в базу ' + 'data_' + this.dateMonthYear)
        //   this.database.ref('logs').set(JSON.stringify(logs))
        // }
        //
        // if (par == 'removeItemCount') {
        //   logs.push(this.formatDate(new Date()) + ': юзер ' + this.user.nick + ' удалил ' + this.changeDataItem.ruName + ' из базы ' + 'data_' + this.dateMonthYear)
        //   this.database.ref('logs').set(JSON.stringify(logs))
        // }
        //
        // if (par == 'addRestrict') {
        //   logs.push(this.formatDate(new Date()) + ': юзер ' + this.user.nick + ' добавил ограничение ' + this.newRestr.ruName + ' в базу ' + 'data_' + this.dateMonthYear)
        //   this.database.ref('logs').set(JSON.stringify(logs))
        // }
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
  },
  modules: {}
})
