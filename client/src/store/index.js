import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {}
const getters = {}
const actions = {}
const mutations = {}

const modules = {};
(r => {
  
  r.keys().forEach(key => {
      modules[key.split('/')[2]] = r(key).default;
  });
})(require.context('../', true, /\.\/pages\/([^/]+)\/store.js$/));
console.log(modules)
export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations,
    modules
  });