<template>
  <div>
    <div class="container">

      <div>
        <!-- Just an image -->

        <!-- тоаст уведомление -->
        <div class="toast" autohide="true" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-body">
            {{toast}}
          </div>
        </div>


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

        <!-- модалка  добавления ограничения-->
        <div class="modal" id="addRestrictModal" tabindex="-1" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Добавить Ограничение</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="form-group">
                  <label for="name">Название ограничения</label>
                  <input v-model="newRestr.ruName" class="form-control">
                  <label for="name">Максимальное число</label>
                  <input type="number" v-model="newRestr.maxCount" class="form-control">
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>
                <button type="button" class="btn btn-primary" @click="addRestrict">Добавить</button>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <h3>Ограничения {{date}}</h3>
            <button style="margin-left: 0;
                        margin-bottom: 20px;
                        margin-top: 5px;" type="button" class=" add-count btn btn-success" data-toggle="modal"
                    data-target="#addRestrictModal">
              Добавить Ограничение
            </button>
            <ul class="list-group ">
              <li v-for="restriction in restrictions" class="list-group-item">
                <div class="row justify-content-between ">
                  <div class=" col-6">
                    {{restriction.ruName}}
                    <span class="max-count">макс. кол-во: {{restriction.maxCount}}</span>
                    <span class="limit" v-if="restriction.count > restriction.maxCount">превышено на
                      {{restrictionDiff(restriction.count,restriction.maxCount)}} </span>
                  </div>
                  <div class="col-6 right-col">
                    <p>Уже съедено: {{restriction.count}} </p>

                    <button type="button" class=" add-count btn btn-success" data-toggle="modal"
                            data-target="#addingModal" @click="addModalCount(restriction)">
                      <i class="fa fa-plus" aria-hidden="true"></i>
                    </button>
                    <button type="button" class=" add-count btn btn-danger" data-toggle="modal"
                            data-target="#removingModal" @click="removeModalCount(restriction)"
                            v-if="restriction.count > 0">
                      <i class="fa fa-minus" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>

              </li>

            </ul>
          </div>
          <div v-if="fbData !== null" class="col-md-6">
            <h3>Журнал</h3>
            <p style="display: block; font-size: 12px; margin-bottom: 0px;" v-for="log in niceLogs">
              {{log}}
            </p>
          </div>

        </div>
      </div>


      <!--<pre>{{$data}}</pre>-->
    </div>
  </div>


</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'Home',
    components: {},
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
      toast: null,
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
      niceLogs() {
        return JSON.parse(this.fbData.logs).slice().reverse();
      },
    },
    methods: {
      checkLogin: function () {
        if (!this.$store.state.user.login) {
          this.$router.push('/login')
        }
      },

      logout: function () {
        this.user = {
          nick: null,
          code: null,
          login: false,
        }
        delete localStorage.login
      },
      setDateSettings: function () {
        let d = new Date()
        this.dateMonthYear = '' + d.getMonth() + d.getFullYear()
        this.date = '/ ' + this.dict[d.getMonth()] + ' ' + d.getFullYear()

        // // test
        // this.dateMonthYear = 'test'
        // this.date = 'test'

      },
      addRestrict: function () {
        if (this.validateNewRestr() == false) {
          this.toast = 'Поля должные быть заполнены'
          $('.toast').toast('show')
          return
        }

        let vm = this
        this.newRestr.name = this.toTranslit(this.newRestr.ruName)
        let newPostKey = this.database.ref('data_' + vm.dateMonthYear).child('restrictions').push().key
        let updates = {};
        updates['/restrictions/' + newPostKey] = this.newRestr
        this.database.ref('data_' + vm.dateMonthYear).update(updates)

        $('#addRestrictModal').modal('hide')
        vm.setLog('addRestrict')
      },
      //Добавление и удаление количества огранчений
      addModalCount: function (restriction) {
        this.changeDataItem.name = restriction.name
        this.changeDataItem.ruName = restriction.ruName

      },
      removeModalCount: function (restriction) {
        this.changeDataItem.name = restriction.name
        this.changeDataItem.ruName = restriction.ruName

      },
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
      validateNewRestr: function () {
        if (this.newRestr.ruName == null || this.newRestr.maxCount == null) {
          return false
        }
        return true
      },
      toTranslit: function (text) {
        return text.replace(/([а-яё])|([\s_-])|([^a-z\d])/gi,
            function (all, ch, space, words, i) {
              if (space || words) {
                return space ? '-' : '';
              }
              var code = ch.charCodeAt(0),
                  index = code == 1025 || code == 1105 ? 0 :
                      code > 1071 ? code - 1071 : code - 1039,
                  t = ['yo', 'a', 'b', 'v', 'g', 'd', 'e', 'zh',
                    'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p',
                    'r', 's', 't', 'u', 'f', 'h', 'c', 'ch', 'sh',
                    'shch', '', 'y', '', 'e', 'yu', 'ya'
                  ];
              return t[index];
            });
      },
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

  .toast {
    position: absolute;
    z-index: 99999999999999;
    right: 10px;
  }

  p {
    display: contents;
  }
</style>