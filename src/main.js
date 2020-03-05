import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'
import router from './router'

import './plugins/vuetify'
import './plugins/axios'

Vue.config.productionTip = false

new Vue({
  store,
  router,
	render: h => h(App),
}).$mount('#app')
