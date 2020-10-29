import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import NewRestriction from '../views/NewRestriction.vue'


Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/new-restriction',
    name: 'NewRestriction',
    component: NewRestriction
  },

]

const router = new VueRouter({
  routes
})

export default router
