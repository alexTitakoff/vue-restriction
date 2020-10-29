<template>
  <div class="row ">
    <form class="col m6 s12 offset-m3 " @submit.prevent="login()">
      <h3>Вход</h3>
      <div class="form-group">
        <input
                placeholder="Никнейм"
                v-model="user.name"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
        >
      </div>
      <div class="form-group">

        <input
                placeholder="Пароль"
                type="password"
                v-model="user.password"
                class="form-control"
                id="exampleInputPassword1"
        >
      </div>
      <button type="submit" class="btn btn-primary">Войти</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data: () => ({
      user: {
        name: '',
        password: '',
      }
    }),
    beforeCreate() {
      if (localStorage.getItem('user')) {
        this.$router.push('/')
      }
    },
    methods: {
      login() {
        let vm = this
        this.$firebase.ref('/users/' + this.user.name).once('value').then(function (snapshot) {
          let pswd = snapshot.val().password
          if (pswd.toString() === vm.user.password.toString()) {
            vm.loginGo()
          }
        })
      },
      loginGo() {
        this.$store.commit('login', this.user)
        // this.setLog('login')

        this.$setLog(': юзер ' + this.$store.state.user.name + ' зашел ')
        this.$router.push('/')
      },

    }
  }
</script>

<style scoped>

</style>