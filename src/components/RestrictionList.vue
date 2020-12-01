<!--suppress ALL -->
<template>
  <div class="list">
    <div
      v-if="restrictions.length > 0"
      class="restriction btn waves-effect waves-light"
      v-for="restriction in restrictionsObj"
      :key="restriction.key"
    >
      <span>{{restriction.name}}</span>
      <span>{{restriction.count}}</span>
      <div class="actions">
        <i @click="addCount(restriction.key)" class="material-icons large wh">add_circle</i>
        <i @click="removeCount(restriction.key)" class="material-icons large wh">remove_circle</i>
        <i
          @click="setRemoveKey(restriction.key)"
          data-target
          class="modal-trigger large wh material-icons"
        >delete</i>
      </div>
    </div>

    <!-- Modal Structure -->
    <div v-if="restrictionsObj !== null  " id="remove" class="modal">
      <div class="modal-content">
        <h4>Удаление</h4>
        <p v-if="removeKey !== null">Точно удалить {{restrictionsObj[removeKey].name}} ?</p>
      </div>
      <div class="modal-footer">
        <a
          href="#!"
          @click="remove(removeKey)"
          class="modal-close waves-effect waves-green btn-flat"
        >Да</a>
      </div>
    </div>
  </div>
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
    console.log("Restr");
    this.getData();
  },
  methods: {
    setRemoveKey(key) {
      this.removeKey = key;
    },
    async getData() {
      let vm = this
      await this.$firebase
        .ref(this.$dbName + "/restrictions")
        .once("value")
        .then(function (snapshot) {
          let Arr = [];
          let Obj = snapshot.val()
          for (let key in Obj) {
            Arr.push(Obj[key])
          }
          //TODO: удалить массив если так и  не будет нужен
          vm.restrictions = Arr
          vm.restrictionsObj = Obj

         
          // ...
        });
      vm.initModals();
    },
    // увеличить количество
    async addCount(key) {
      let newCount = this.restrictionsObj[key].count + 1;
      this.restrictionsObj[key].count = newCount;
      await this.$firebase
        .ref(this.$dbName + "/restrictions/" + key)
        .update({ count: newCount });
    },
    async removeCount(key) {
      if (this.restrictionsObj[key].count === 0) {
        return;
      }
      let newCount = this.restrictionsObj[key].count - 1;
      this.restrictionsObj[key].count = newCount;
      await this.$firebase
        .ref(this.$dbName + "/restrictions/" + key)
        .update({ count: newCount });
    },
    remove(key) {
      // удаляем ограничение в базе
      firebase
        .database()
        .ref(this.$dbName + "/restrictions/" + key)
        .remove();
      this.restrictions = [];
      this.removeKey = null;
      this.getData();
    },
    initModals() {
      var elems = document.querySelectorAll(".modal");
      var instances = M.Modal.init(elems);
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
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
  color: #f44336;
}

.restriction {
  width: 31%;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  align-items: flex-end;
  cursor: inherit;
  /*margin: 0px 2px;*/
  margin-right: 1%;
  margin-bottom: 5px;

  &:hover {
    background: #26a69a;
  }

  span {
    width: 100%;
    line-height: 1px;
    &:first-child{
      line-height: 14px;
    }
  }

  i {
    position: relative;
    top: -3px;
    font-size: 22px;
    width: 33%;
    cursor: pointer;
    &:nth-child(2) {
      border-left: 2px solid darken(#26a69a, 8%);
      border-right: 2px solid darken(#26a69a, 8%);
    }
  }

  .remove {
    color: #f44336;
  }
  .wh {
    color: #fff;
  }
  .actions {
    width: 100%;
    display: flex;
    justify-content: space-around;
    height: 33px;
    border-top: 2px solid darken(#26a69a, 8%);
    align-items: baseline;
  }
}
</style>