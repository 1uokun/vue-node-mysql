import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
Vue.prototype.$http = axios;
import store from './vuex/store'
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
})
			