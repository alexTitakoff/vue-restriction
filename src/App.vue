<template>
  <div id="app">
    <Nav/>
    <div class="container">
      <router-view/>
    </div>

  </div>
</template>

<script>
  import Nav from './components/Nav'

  export default {
    name: "App",
    components: {
      Nav
    },
    mounted() {
      // проверка сессии
      if (localStorage.getItem('user')) {
        this.$store.commit('login', JSON.parse(localStorage.getItem('user')))
        this.$router.push('/')
      } else if (this.$router.currentRoute.path !== '/login') {
        this.$router.push('/login')
      }
    }
  }
</script>

<style lang="scss">
  @media only screen and (min-width: 993px) {
    .container {
      width: 1000px;
    }
  }

  toast.red {
    background: red;
  }

</style>
