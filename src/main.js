import Vue from 'vue';
import VueRouter from "vue-router";
import App from './App.vue';
import router from './router';
import store from './store';

import MusicPlayer from '@/components/MusicPlayer.vue';
Vue.component('MusicPlayer', MusicPlayer);


Vue.config.productionTip = false

const routers = new VueRouter({
  router,
  linkExactActiveClass: "nav-item active"
});
;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
