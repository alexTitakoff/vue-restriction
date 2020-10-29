<template>
  <div class="row">
    <div class="col m6 s12 offset-m4 ">
      <h5>Новое ограничение</h5>
      <div class="input-field ">
        <input
                v-model="name"
                placeholder="Название"
                type="text"
                class="validate">
      </div>
      <div class="input-field ">
        <input
                v-model="maxCount"
                placeholder="Максимально количество в месяц"
                type="number"
                class="validate">
      </div>

      <a @click="addRestrict" class="waves-effect waves-light btn">Добавить</a>
      <a class="waves-effect red btn">Отменить</a>


    </div>
  </div>

</template>

<script>
  export default {
    name: "Restriction",
    data: () => ({
      name: null,
      maxCount: null
    }),
    methods: {
      addRestrict: function () {
        if (this.validateNewRestr() === false) {
          M.toast({html: 'Поля должные быть заполнены', classes: 'red', })
          return
        }

        let newPostKey = this.$firebase.ref(this.$dbName).child('restrictions').push().key
        let updates = {};
        updates['/restrictions/' + newPostKey] = {
          name: this.name,
          maxCount: this.maxCount,
          count: 0
        }
        this.$firebase.ref(this.$dbName).update(updates)
      },
      validateNewRestr: function () {
        if (this.name == null || this.maxCount == null) {
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
    }
  }
</script>

<style scoped>
  .btn.red {
    margin-left: 10px;
  }

</style>