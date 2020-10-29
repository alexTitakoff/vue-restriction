<template>
  <div>
      <div>

        <!-- модалка добавления количества -->
        <div class="modal" id="addingModal" tabindex="-1" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Добавление</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>Точно добавить {{changeDataItem.ruName}}?</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>
                <button type="button" class="btn btn-primary" @click="addItemCount">Добавить
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- модалка  удаления количества -->
        <div class="modal" id="removingModal" tabindex="-1" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Удаление</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>Точно удалить {{changeDataItem.ruName}}?</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>
                <button type="button" class="btn btn-primary" @click="removeItemCount">Удалить
                </button>
              </div>
            </div>
          </div>
        </div>










        <div class="row">
          <div class="col m6 s12">
            <h5>Ограничения {{date}}</h5>
            <router-link to="/new-restriction" class="waves-effect waves-light btn">Добавить</router-link>

            <RestrictionList></RestrictionList>


            <h5>Действия {{date}}</h5>
            <a  class="waves-effect waves-light btn">Добавить</a>

          </div>

          <div class="col m6 s12">
            <Logs></Logs>
          </div>

        </div>
      </div>


      <!--<pre>{{$data}}</pre>-->
    </div>



</template>

<script>
  // @ is an alias to /src

  import Logs from '../components/Logs'
  import RestrictionList from '../components/RestrictionList'
  export default {
    name: 'Home',
    components: {
      Logs,
      RestrictionList
    },
    data: () => ({

      restrictions: [],
      changeDataItem: {
        name: null,
        ruName: null,
      },
      newRestr: {
        name: null,
        ruName: null,
        maxCount: null,
        count: 0
      },
      fbData: null,
      ref: null,
      dateMonthYear: null,
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

      // тестовый тоаст
      // M.toast({html: 'I am a toast!'})

      // получение данных из базы
      let fbData
      // this.$firebase.ref.on("value", function (snapshot) {
      //
      //   fbData = snapshot.val()
      //   vm.fbData = fbData
      //
      //   // установка ограничений
      //   // let fbDataObj = fbData['data_' + vm.dateMonthYear].restrictions
      //   // for(key in fbDataObj){
      //   //   vm.restrictions.push(fbDataObj[key])
      //   // }
      //   console.log('data_' + vm.dateMonthYear)
      //   vm.restrictions = fbData['data_' + vm.dateMonthYear].restrictions
      //
      //
      //   // console.log(vm.fbData.logs)
      //
      // }, function (error) {
      //   console.log("Error: " + error.code);
      // })


      //пример, для установки структуры
      // this.database.ref('data_' + 'test').set({
      //     'date': new Date(),
      //     "restrictions": [
      //         {
      //             "count": 1,
      //             "maxCount": 4,
      //             "name": "shaurma",
      //             "ruName": "Шаурма"
      //         },
      //         {
      //             "count": 3,
      //             "maxCount": 4,
      //             "name": "chocolate",
      //             "ruName": "Шоколадки"
      //         }
      //     ]

      // });

      // //users
      // this.database.ref('users').set({
      //     nika: {
      //         code: 2
      //     },
      //     alex: {
      //         code: 1
      //     }
      // })

    },
    computed: {

    },
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

      //Добавление и удаление количества огранчений
      addItemCount: function () {
        const vm = this
        for (key in this.restrictions) {
          if (this.restrictions[key].name == vm.changeDataItem.name) {
            this.restrictions[key].count++
            let updates = {};
            updates['/restrictions/' + key] = this.restrictions[key];
            this.database.ref('data_' + vm.dateMonthYear).update(updates)

            $('#addingModal').modal('hide')
            vm.setLog('addItemCount')
          }
        }

        console.log()
        return

        this.restrictions.map(function (restriction) {
          if (restriction.name == vm.changeDataItem.name) {
            restriction.count++
            $('#addingModal').modal('hide')
            vm.updateData()
            vm.setLog('addItemCount')
          }
          // return name.length;
        });
      },
      removeItemCount: function () {
        const vm = this
        for (key in this.restrictions) {
          if (this.restrictions[key].name == vm.changeDataItem.name) {
            this.restrictions[key].count--
            let updates = {};
            updates['/restrictions/' + key] = this.restrictions[key];
            this.database.ref('data_' + vm.dateMonthYear).update(updates)

            $('#removingModal').modal('hide')
            vm.setLog('addItemCount')
          }
        }
      },
      updateData: function () {                 // Deprecate or update this func
        const vm = this
        this.database.ref('data_' + vm.dateMonthYear).set({
          restrictions: this.restrictions
        });

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