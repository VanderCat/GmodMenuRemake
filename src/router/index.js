import Vue from 'vue'
import VueRouter from 'vue-router'
import MainMenu from '../views/MainMenu.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main Menu',
    component: MainMenu
  },
  {
    path: '/workshop/:type',
    name: 'Workshop',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Workshop.vue')
  },
  {
    path: '/newgame',
    name: 'New Game',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NewGame.vue')
  },
  {
    path: '/servers',
    name: 'Multiplayer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Multiplayer.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
