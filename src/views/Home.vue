<template>
  <div class="home">

    <div class="slider">
      <h3 class="title">Featured for you</h3>
      <img class="image" src="@/assets/image/Home/onmyway_poster.jpg" alt="#">
    </div>

    <div class="container">
      <h3 class="title">Rencently Listened</h3>
      <div class="recently_listened">
        <li style="list-style-type: none;" v-for="variable in RecentlyListened" :key="variable.id">
          <RecentlyListened
          :name_song = "variable.name_song"
          :name_performer = "variable.name_performer"
          :image = "variable.image"
        />
        </li>
      </div>
    </div>

    <div class="recommended_album">
      <h3 class="title">Recommended Albums</h3>
      <div style="display: flex; margin-top: 15px;">
        <li style="list-style-type: none;" v-for="variable in Album" :key="variable.id">
          <RecommendedAlbum
            :name_albums = "variable.name_albums"
            :name_singer = "variable.name_singer"
            :image = "variable.image"
          />
        </li>
        <strong class="more_album"><i class="fa fa-chevron-circle-right fa-3x" style="transform: translateY(3rem); "></i></strong>
      </div>
    </div>

  </div>
</template>

<script>
import RecentlyListened from "@/components/Home/RecentlyListened.vue";
import RecommendedAlbum from "@/components/Home/RAlbums.vue";
import {mapState} from "vuex";

export default {
  components:{
    RecentlyListened,
    RecommendedAlbum
  },
  computed: {
    ...mapState(["RecentlyListened", "Album"])
  }
 
}
</script>

<style scoped>

.home{

  display: grid;
  grid-template-columns: 2.5fr 0.8fr;
}
.container{
  padding-right: 0;
}
.recently_listened{
  background-color: #1E1E2D;
  border-radius: 5px;
  padding: 10px 30px;
}
.recommended_album{
  grid-column: 1/3;
}

.title{
  color: rgba(255, 255, 255, 0.85);
  font-weight: 400;
  font-size: 1.3rem;
  margin-top: 1.3rem;
  margin-bottom: 1.2rem;
}

.more_album{
  font-weight: 400; 
  font-size: 120%; 
  color: #1DA4B6;
}

.slider .image{
  width: 100%;
}
</style>