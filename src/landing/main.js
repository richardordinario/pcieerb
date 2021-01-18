import Vue from 'vue'
import Index from './Index.vue'
import Vuetify from '../plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify: Vuetify,
  render: h => h(Index),
}).$mount('#app')