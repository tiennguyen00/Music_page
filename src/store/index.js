import Vue from 'vue'
import Vuex from 'vuex'
// =======================
import TrendingNow from "../assets/data/Home/TrendingNow";
import Album from "../assets/data/Home/Album";
import Feature from "../assets/data/Home/Feature";
import FeaturedGenres from "../assets/data/Genres/FeaturedGenres"
import AllGenres from "../assets/data/Genres/AllGenres"
import BannerImage from "../assets/data/Genres/Banner"
import RecommendedPlaylist from "../assets/data/Genres/RecommendedPlaylist"
import FeaturedTopics from "../assets/data/Genres/FeaturedTopics"
import Moods from "../assets/data/Genres/Mood"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    TrendingNow,
    Album,
    Feature,
    FeaturedGenres,
    AllGenres,
    BannerImage,
    RecommendedPlaylist,
    FeaturedTopics,
    Moods
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
