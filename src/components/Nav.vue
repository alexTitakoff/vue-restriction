<template>
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">
        <img src="https://cdn.pixabay.com/photo/2016/09/20/03/12/yang-1681698_960_720.png"
             width="30"
             height="30"
             alt="" loading="lazy"> Дзен Ограничения {{getUserName()}}
      </a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a @click.prevent='logout()' href="sass.html">Выйти</a></li>
      </ul>
    </div>
  </nav>

  <nav class="navbar navbar-light bg-light justify-content-between">
    <div class="justify-content-start">
      <a class="navbar-brand" href="#">

      </a>
      <!--<div style="display:inline">Дзен Ограничения / {{user.nick}}</div>-->
    </div>

    <!--<a href="" style="color: inherit;" @click.prevent='logout()'>Выйти</a>-->
  </nav>
</template>

<script>
  export default {
    name: "Nav",
    methods:{
      getUserName() {
        return this.$store.state.user.name
      }
    }
  }
</script>

<style scoped>

</style>