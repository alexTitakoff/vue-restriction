import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


var firebaseConfig = {
  apiKey: "AIzaSyCiHrYTwisX9wniYo8cN7nlc6bWLu0Vc8s",
  authDomain: "vue-dzen-restriction.firebaseapp.com",
  databaseURL: "https://vue-dzen-restriction.firebaseio.com",
  projectId: "vue-dzen-restriction",
  storageBucket: "vue-dzen-restriction.appspot.com",
  messagingSenderId: "546683537555",
  appId: "1:546683537555:web:f17d266c5f7bcc22846566",
  measurementId: "G-GKRY0MQ9EV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()


Vue.config.productionTip = false
Vue.prototype.$firebase = firebase.database()
Vue.prototype.$dateMonth = dateMonth()
if(localStorage.getItem('user')) {
  Vue.prototype.$dbName =  'users/'+ JSON.parse(localStorage.getItem('user')).name + '/' + 'data_' + dateMonth()
}
Vue.prototype.$setLog = function (message) {
  function formatDate(d) {
    const ye = new Intl.DateTimeFormat('ru', {year: 'numeric'}).format(d)
    const mo = new Intl.DateTimeFormat('ru', {month: '2-digit'}).format(d)
    const da = new Intl.DateTimeFormat('ru', {day: '2-digit'}).format(d)
    const h = new Intl.DateTimeFormat('ru', {hour: '2-digit'}).format(d)
    const m = new Intl.DateTimeFormat('ru', {minute: '2-digit'}).format(d)
    const s = new Intl.DateTimeFormat('ru', {second: '2-digit'}).format(d)
    return da + "." + mo + "." + ye + ' ' + h + ':' + m + ':' + s
  }

  async function firebaseAddLog(logData) {

    // Get a key for a new Post.
    var newLogKey = firebase.database().ref().child('logs').push().key;
    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/logs/' + newLogKey] = logData;
    return await firebase.database().ref().update(updates);
  }
   return firebaseAddLog(formatDate(new Date()) + message)
}

function dateMonth () {
  let d = new Date()
  return   (d.getMonth()+1) + '_' + d.getFullYear()
}


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
