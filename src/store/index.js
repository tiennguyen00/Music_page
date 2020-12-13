import Vue from 'vue'
import Vuex from 'vuex'
// =======================
import RecentlyListened from "../assets/data/Home/RecentlyListened";
import Album from "../assets/data/Home/Album";
import Feature from "../assets/data/Home/Feature";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    RecentlyListened,
    Album,
    Feature
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
