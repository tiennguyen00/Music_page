<template>
  <div class="home">

    <div class="slider">
      Slider
    </div>

    <div class="container">
      <h3 class="title">Rencently Listened</h3>
      <div class="recently_listened">
        <RecentlyListened/>
      </div>
    </div>

    <div class="recommended_album">
      recommended_album
    </div>

  </div>
</template>

<script>
import RecentlyListened from "@/components/Home/RecentlyListened.vue";
export default {
  components:{
    RecentlyListened
  }
 
}
</script>

<style scoped>

.home{
  display: grid;
  grid-template-columns: 2.5fr 1fr;
}
.recently_listened{
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 20px;
  width: 105%;
}
.recommended_album{
  grid-column: 1/3;
}

.title{
  color: rgba(255, 255, 255, 0.85);
  font-weight: 400;
}
</style>