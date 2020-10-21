// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import router from './router'
import './assets/styles/reset.css'
import 'swiper/dist/css/swiper.css'
import scroll from 'vue-seamless-scroll'

import 'vue-area-linkage/dist/index.css'; // v2 or higher
import axios from 'axios'
import VueAxios from 'vue-axios'

import VueAreaLinkage from 'vue-area-linkage';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// http request 拦截器
Vue.use(VueAreaLinkage);
axios.interceptors.request.use(
  config => {
    if (localStorage.token) { //判断token是否存在
      config.headers.authorization = localStorage.token;  //将token设置成请求头
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

Vue.use(VueAxios, axios)
Vue.use(ElementUI)

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
Vue.use(scroll);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
