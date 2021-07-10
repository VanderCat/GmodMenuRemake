import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'
var utils = require('./js/utils.js')
for (var id in utils) {
  window[id]=utils[id]
}
Vue.config.productionTip = false

window.Vue = new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
