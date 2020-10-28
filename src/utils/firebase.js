// Your web app's Firebase configuration
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

let firebaseDatabase = firebase.database()




export default firebaseDatabase