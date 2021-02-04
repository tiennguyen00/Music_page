<template>
  <div class="performer">
    <div class="navigation">
      <ul class="sub-nav d-flex justify-content-center">
        <li class="nav-item" @click="selected = 1">
          <router-link to="/performer" :class="{'nav-link':true, active:selected == 1}">UsUk</router-link>
        </li>
        <li class="nav-item" @click="selected = 2">
          <router-link to="/performer/VietNam" :class="{'nav-link':true, active:selected == 2}">VietNam</router-link>
        </li>
        <li class="nav-item" @click="selected = 3">
          <router-link to="/performer/Cpop" :class="{'nav-link':true, active: selected == 3}">Cpop</router-link>
        </li>
      </ul>
      
    </div>

    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data(){
      return {
          selected: 1,
      }
  },
  
}
</script>

<style scoped>
.performer{
    padding: 25px 25px 10px;
}
.sub-nav {
  padding: 0;
  margin: 0;
  list-style-type: none;
  border-bottom: 1px solid rgba(255,255,255, 0.1);
  margin-bottom: 2%;
}

.nav-item {
    font-size: 1.3rem;
    font-family: 'Roboto';
    font-weight: bold;
    opacity: 0.7;
    
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


</style>