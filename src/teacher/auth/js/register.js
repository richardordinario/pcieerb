import Vue from 'vue'
import Register from '../Register.vue'
import Vuetify from '../../../plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify: Vuetify,
  render: h => h(Register),
}).$mount('#app')