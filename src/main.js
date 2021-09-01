// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import BootstrapVue from 'bootstrap-vue'
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import Vuex from 'vuex'
import Firebase from 'firebase'
import firebaseConfig from '../config/firebase'

Vue.use(Element)
Vue.use(BootstrapVue)
Vue.use(Vuex)

Firebase.initializeApp(firebaseConfig)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Firebase,
  components: {
    App
  },
  template: '<App/>'
})
