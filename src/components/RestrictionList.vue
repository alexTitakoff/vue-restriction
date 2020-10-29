<!--suppress ALL -->
<template>
  <div>

    <ul v-if="restrictions.length > 0" class="collection ">
      <li class="collection-item" v-for="restriction in restrictionsObj">

          <div class="decr">
            {{restriction.name}}
            <span>Количество: {{restriction.count}}</span>
          </div>
          <a href="#!" class="secondary-content">
            <i @click="addCount(restriction.key)"   class="material-icons">add_circle</i>
            <i @click="removeCount(restriction.key)" class=" remove material-icons">remove_circle</i>
            <i @click="setRemoveKey(restriction.key)" data-target="remove" class="modal-trigger remove material-icons">delete</i>

          </a>

      </li>

      <!--<pre>{{$data}}</pre>-->
    </ul>

    <!-- Modal Structure -->
    <div v-if="restrictionsObj !== null  " id="remove" class="modal">
      <div class="modal-content">
        <h4>Удаление</h4>
        <p v-if="removeKey !== null" >Точно удалить {{restrictionsObj[removeKey].name}} ? </p>
      </div>
      <div class="modal-footer">
        <a href="#!" @click="remove(removeKey)" class="modal-close waves-effect waves-green btn-flat">Да</a>
      </div>
    </div>
  </div>

  <!--<ul class="list-group ">-->
  <!--<li v-for="restriction in restrictions" class="list-group-item">-->
  <!--<div class="row justify-content-between ">-->
  <!--<div class=" col-6">-->
  <!--{{restriction.ruName}}-->
  <!--<span class="max-count">макс. кол-во: {{restriction.maxCount}}</span>-->
  <!--<span class="limit" v-if="restriction.count > restriction.maxCount">превышено на-->
  <!--{{restrictionDiff(restriction.count,restriction.maxCount)}} </span>-->
  <!--</div>-->
  <!--<div class="col-6 right-col">-->
  <!--<p>Уже съедено: {{restriction.count}} </p>-->

  <!--<button type="button" class=" add-count btn btn-success" data-toggle="modal"-->
  <!--data-target="#addingModal" @click="addModalCount(restriction)">-->
  <!--<i class="fa fa-plus" aria-hidden="true"></i>-->
  <!--</button>-->
  <!--<button type="button" class=" add-count btn btn-danger" data-toggle="modal"-->
  <!--data-target="#removingModal" @click="removeModalCount(restriction)"-->
  <!--v-if="restriction.count > 0">-->
  <!--<i class="fa fa-minus" aria-hidden="true"></i>-->
  <!--</button>-->
  <!--</div>-->
  <!--</div>-->

  <!--</li>-->
  <!--</ul>-->

</template>

<script>
  export default {
    name: "RestrictionList",
    data: () => ({
      restrictions: [],
      restrictionsObj: null,
      removeKey: null
    }),
    mounted() {
      console.log('Restr')
      this.getData()
    },
    methods: {
      setRemoveKey(key) {
        this.removeKey = key
      },
      async getData(){
        let vm = this
        await this.$firebase.ref(this.$dbName + '/restrictions').once('value').then(function (snapshot) {
          let Arr = []
          let Obj = snapshot.val()
          for (let key in Obj) {
            Arr.push(Obj[key])
          }
          //TODO: удалить массив если так и  не будет нужен
          vm.restrictions = Arr
          vm.restrictionsObj = Obj
          // ...
        })
        vm.initModals()
      },
      // увеличить количество
      async addCount(key) {
        let newCount = this.restrictionsObj[key].count + 1
        this.restrictionsObj[key].count =  newCount
        await this.$firebase.ref(this.$dbName + '/restrictions/'+key).update({count: newCount})
      },
      async removeCount(key) {
        if(this.restrictionsObj[key].count === 0) {
          return
        }
        let newCount = this.restrictionsObj[key].count - 1
        this.restrictionsObj[key].count =  newCount
        await this.$firebase.ref(this.$dbName + '/restrictions/'+key).update({count: newCount})
      },
      remove(key) {  // удаляем ограничение в базе
        firebase.database().ref(this.$dbName + '/restrictions/' + key).remove();
        this.restrictions = []
        this.removeKey = null
        this.getData()
        },
      initModals() {
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .collection-item {
    padding-right: 10px;
    padding-left: 10px;
    display: flex;
    justify-content: space-between;
    .decr {
      display: flex;
      flex-wrap: wrap;
      span {
        width: 100%;
        font-size: 12px;
      }
    }
  }

  .remove {
    color: #F44336;
  }
</style>