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
Vue.prototype.$dbName =  'users/'+ JSON.parse(localStorage.getItem('user')).name + '/' + 'data_' + dateMonth()


function dateMonth () {
  let d = new Date()
  return   (d.getMonth()+1) + '_' + d.getFullYear()
}


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
