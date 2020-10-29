import Vue from "vue";
import Vuex from "vuex";
import post from "./post";
import drawer from "./drawer";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { post, drawer }
});
