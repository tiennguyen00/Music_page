<template>
  <div class="container-fuild">
    <div class="navigation">
      <ul class="sub-nav d-flex justify-content-center">
        <li class="nav-item" @click="selected = 1">
          <router-link to="/genres" :class="{'nav-link':true, active:selected == 1}">Genres</router-link>
        </li>
        <li class="nav-item" @click="selected = 2">
          <router-link to="/genres/topic" :class="{'nav-link':true, active:selected == 2}">Topic</router-link>
        </li>
        <li class="nav-item" @click="selected = 3">
          <router-link to="/genres/mood" :class="{'nav-link':true, active: selected == 3}">Mood</router-link>
        </li>
      </ul>
    </div>

    <div class="slider">
      <banner/>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Banner from '../components/Genres/banner.vue';
export default {
  name: "Genres",
  data(){
      return {
          selected: 1,
      }
  },
  computed:{
    //   changeSelect(){
    //       return select
    //   }
  },
  components: {
    Banner,
  },
  
};
</script>

<style scoped>

.sub-nav {
  padding: 0;
  margin: 0;
  list-style-type: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  margin-bottom: 2%;
}

.nav-item {
    font-size: 1.3rem;
    font-family: 'Roboto';
    font-weight: bold;
    opacity: 0.8;
}
.nav-link {
    width: 150px;
    text-align: center;
}
.nav-link:hover {
    color: #1BA3B5;
    border-bottom: 2px solid #1BA3B5;
}
.active {
    color: #1BA3B5;
    border-bottom: 2px solid #1BA3B5;
}
.slider {
  margin-bottom: 5%;
}
</style>