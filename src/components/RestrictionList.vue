<template>
  <div>

    <ul v-if="restrictions.length > 0" class="collection ">
      <li class="collection-item" v-for="restriction in restrictions">
        <div>{{restriction.name}}
          <a href="#!" class="secondary-content">
            <i class="material-icons">add_circle</i>
            <i class=" remove material-icons">remove_circle</i>
            <i @click="setRemoveKey(restriction.key)" data-target="remove" class="modal-trigger remove material-icons">delete</i>

          </a>
        </div>
      </li>
      <button data-target="remove" class="btn modal-trigger">Modal</button>

      <pre>{{$data}}</pre>
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
          vm.restrictions = Arr
          vm.restrictionsObj = Obj
          // ...
        })
        vm.initModals()
      },
      remove(key) {
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

<style scoped>
  .collection-item {
    padding-right: 10px;
    padding-left: 10px;
  }

  .remove {
    color: #F44336;
  }
</style>