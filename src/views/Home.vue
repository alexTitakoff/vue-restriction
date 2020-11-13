<template>
  <div>
    <div class="row">
      <div class="col m6 s12 ">
        <h5>Ограничения {{date}}</h5>
        <router-link to="/new-restriction" class="btn-floating btn-medium waves-effect waves-light "><i class="material-icons">add</i></router-link>

        <br>
        <br>
        <!--<router-link to="/new-restriction" class="waves-effect waves-light btn">Добавить</router-link>-->

        <RestrictionList></RestrictionList>

        <h5>Действия {{date}}</h5>
        <a class="waves-effect waves-light btn">Добавить</a>

      </div>
    </div>

    <!--<pre>{{$data}}</pre>-->
  </div>

</template>

<script>
  // @ is an alias to /src
  import RestrictionList from '../components/RestrictionList'

  export default {
    name: 'Home',
    components: {
      RestrictionList
    },
    data: () => ({
      date: null,
      dict: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    }),
    mounted() {
      console.log("VUE APP WORK")
      const vm = this
      //Проверка логина
      this.checkLogin()
      // Устанавливаем фунциональную дату
      this.setDateSettings()

    },
    computed: {},
    methods: {
      checkLogin: function () {
        if (!this.$store.state.user.login) {
          this.$router.push('/login')
        }
      },

      setDateSettings: function () {
        let d = new Date()
        this.dateMonthYear = '' + d.getMonth() + d.getFullYear()
        this.date = '/ ' + this.dict[d.getMonth()] + ' ' + d.getFullYear()

        // // test
        // this.dateMonthYear = 'test'
        // this.date = 'test'

      },

      // Служебные методы

      restrictionDiff(count, max) {
        return count - max
      },
    }
  }
</script>

<style lang="scss">
  .max-count {
    display: block;
    font-size: 11px;
  }

  .limit {
    display: block;
    font-size: 11px;
    color: lightcoral;
  }

  .right-col {
    justify-content: flex-end;
    display: flex;
    align-items: center;
  }

  .add-count {
    margin-left: 10px;
  }

  p {
    display: contents;
  }
</style>