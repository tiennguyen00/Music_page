import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Topsongs from "../views/Topsongs.vue";
import Genres from "../views/Genres.vue";
import Events from "../views/Events.vue";
import Performer from "../views/Performer.vue";
import Playlist from "../views/Playlist.vue";
import Feedback from "../views/Feedback.vue";

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
    component: Genres
  },
  {
    path: "/events",
    name: "Events",
    component: Events
  },
  {
    path: "/performer",
    name: "Performer",
    component: Performer
  },
  {
    path: "/playlist",
    name: "Playlist",
    component: Playlist
  },
  {
    path: "/feedback",
    name: "Feedback",
    component: Feedback
  }
]

const router = new VueRouter({
  routes
})

export default router
