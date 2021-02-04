import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Topsongs from "../views/Topsongs.vue";
import Genres from "../views/Genres.vue";
import Performer from "../views/Performer.vue";
import Playlist from "../views/Playlist.vue";

import index from "../components/Genres/index.vue";
import topic from "../components/Genres/topic.vue";
import mood from "../components/Genres/mood.vue";

import UsUk from "../components/Performer/UsUk.vue";
import VietNam from "../components/Performer/VietNam.vue";
import Cpop from "../components/Performer/Cpop.vue";

import Register from "../components/Login/login.vue";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/topsongs",
    name: "Topsongs",
    component: Topsongs
  },
  {
    path: "/genres",
    name: "Genres",
    component: Genres,
    children: [
      {path: "", name: 'genre', component: index},
      {path: "topic", name: 'topic', component: topic},
      {path: "mood", name: 'mood', component: mood}
    ]
  },
  {
    path: "/performer",
    name: "Performer",
    component: Performer,
    children: [
      {path: "", name: 'UsUk', component: UsUk},
      {path: "VietNam", name: 'VietNam', component: VietNam},
      {path: "Cpop", name: 'Cpop', component: Cpop},
    ]
  },
  {
    path: "/playlist",
    name: "Playlist",
    component: Playlist
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  }
]

const router = new VueRouter({
  routes
})

export default router
