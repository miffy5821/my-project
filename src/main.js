// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import router from './router'
import './assets/styles/reset.css'
import 'swiper/dist/css/swiper.css'
import scroll from 'vue-seamless-scroll'

import axios from 'axios'
import VueAxios from 'vue-axios'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueAxios, axios)
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(scroll)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
