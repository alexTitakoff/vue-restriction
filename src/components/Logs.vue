<template>
  <div>
    <h5>Журнал</h5>
    <p style="display: block; font-size: 12px; margin-bottom: 0px;" v-for="log in logs">
      {{log}}
    </p>
  </div>

</template>

<script>
  export default {
    name: "Logs",
    data: () => ({
      logs: []
    }),

    mounted() {
      let vm = this
      this.$firebase.ref('/logs').once('value').then(function (snapshot) {
        let logsArr = []
        let logsObj = snapshot.val()
        for (let key in logsObj) {
          logsArr.unshift(logsObj[key])
        }
        vm.logs = logsArr
        // ...
      })
    }
  }
</script>

<style scoped>

</style>