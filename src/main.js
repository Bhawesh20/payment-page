import Vue from 'vue';
import 'babel-polyfill';
/** Vuex Store Integration */
import store from "./store/index.js";
import App from './App.vue';

import ElementUI from 'element-ui'
//internationalization by element
import locale from 'element-ui/lib/locale/lang/en';

import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, { locale });


new Vue({
  el:'#app',
  store,
  render:h =>h(App)
})