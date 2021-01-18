import Vue from 'vue'
import Login from './Login.vue'
import Vuetify from '../../plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify: Vuetify,
  render: h => h(Login),
}).$mount('#app')