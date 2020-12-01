<template>
  <nav>
    <div class="nav-wrapper">
      <router-link to="/" class="logo">
        <img src="https://cdn.pixabay.com/photo/2016/09/20/03/12/yang-1681698_960_720.png"
             width="30"
             height="30"
             alt="" loading="lazy"> Дзен Ограничения | {{getUserName()}}
      </router-link>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul v-if="checkLogin()" id="nav-mobile" class="right ">
        <li><router-link  to="/logs" >Журнал</router-link></li>
        <li><a @click.prevent='logout()' >Выйти</a></li>
      </ul>

      <ul  v-if="checkLogin()" class="sidenav" id="mobile-demo">
        <li><router-link  to="/logs" >Журнал</router-link></li>
        <li><a @click.prevent='logout()'>Выйти</a></li>
      </ul>
    </div>
  </nav>

</template>

<script>
  export default {
    name: "Nav",
    mounted(){
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems);
    },
    methods: {
      getUserName() {
        return this.$store.state.user.name
      },
      logout: function () {
        this.$setLog(': юзер ' + this.$store.state.user.name + ' вышел ')
        this.$store.commit('logout')
        delete localStorage.user
        this.$router.push('/login')
      },
      checkLogin() {
        return localStorage.getItem('user')
      }
    }
  }
</script>

<style lang="scss" scoped>
  nav {
    background-color: #7952b3;
    .logo {
      margin-left: 10px;
      font-size: 1rem;

      img {
        position: relative;
        top: 10px;
      }
    }
  }

  a {
    text-decoration: none;
    &:hover {
      color: #fff;
    }
  }


</style>