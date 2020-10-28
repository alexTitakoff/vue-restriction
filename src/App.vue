<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>

<script>
  import Nav from './components/Nav'

  export default {
    name: "App",
    components:{
      Nav
    },
    mounted(){
      // проверка сессии
      if(localStorage.getItem('user')){
        this.$store.commit('login', JSON.parse(localStorage.getItem('user')))
        this.$router.push('/')
      } else {
        this.$router.push('/login')
      }
    }
  }
</script>

<style lang="scss">

</style>
