import Vue from 'vue'
import App from './App.vue'
import store from './store'
import '@/styles/index.scss'
Vue.config.productionTip = false
Vue.prototype.$store = store

new App().$mount()
