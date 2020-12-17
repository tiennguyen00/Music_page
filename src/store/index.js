import Vue from 'vue'
import Vuex from 'vuex'
// =======================
import TrendingNow from "../assets/data/Home/TrendingNow";
import Album from "../assets/data/Home/Album";
import Feature from "../assets/data/Home/Feature";
import Top5 from '../assets/data/Topsongs/Top5'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    TrendingNow,
    Album,
    Feature,
    Top5
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
