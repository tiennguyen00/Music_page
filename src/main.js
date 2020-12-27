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

// Hàm để add thẳng vào máy file (JSON) trong máy.

// Vue.mixin({
//   methods: {
//     readFromData: function(linkdata){
//       const fs = require('fs');
//       var dataJson = fs.readFileSync(linkdata);
//       var resultObject = JSON.parse(dataJson);
//       return resultObject;
//     },
//     writeToData: function(resultObject, linkdata){
//       const fs = require('fs');
//       var resultString = JSON.stringify(resultObject);
//       fs.writeFileSync(linkdata, resultString);
//     }
//   }
// })





new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
