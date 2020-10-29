<template>
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">
        <img src="https://cdn.pixabay.com/photo/2016/09/20/03/12/yang-1681698_960_720.png"
             width="30"
             height="30"
             alt="" loading="lazy"> Дзен Ограничения | {{getUserName()}}
      </a>
      <ul v-if="checkLogin()" id="nav-mobile" class="right hide-on-med-and-down">
        <li><a @click.prevent='logout()' href="sass.html">Выйти</a></li>
      </ul>
    </div>
  </nav>

</template>

<script>
  export default {
    name: "Nav",
    methods:{
      getUserName() {
        return this.$store.state.user.name
      },
      logout: function () {
        let data = {
          par:'logout',
          username: this.$store.state.user.name,
          firebase: this.$firebase
        }
          
        this.$store.dispatch('setLog',data)

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
    .brand-logo {
      margin-left: 10px;
      font-size: 1rem;
    }
  }
  a {
    text-decoration: none;
    &:hover {
        color: #fff;
     }
  }


</style>