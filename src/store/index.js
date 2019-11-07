import Vue from 'vue'
import Vuex from "vuex";
import config from './modules/config';
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);

let store = new Vuex.Store({
  modules: {
    config
  },
  plugins: [
    // createPersistedState({paths: ['config']})
  ]
});

export default store;