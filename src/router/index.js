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
    component: () => import(/* webpackChunkName: "workshop" */ '../views/Workshop.vue')
  },
  {
    path: '/newgame',
    name: 'New Game',
    children: [{
      path: ":map",
      component: () => import(/* webpackChunkName: "newgame" */ '../views/Map.vue')
    }],
    component: () => import(/* webpackChunkName: "newgame" */ '../views/NewGame.vue')
  },
  {
    path: '/servers',
    name: 'Multiplayer',
    component: () => import(/* webpackChunkName: "multiplayer" */ '../views/Multiplayer.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
