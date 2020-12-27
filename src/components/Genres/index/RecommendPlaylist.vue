<template>
  <div class="recommendplaylist-container">
      <article class="article-recommend">Best Playlist</article>
      <div class="playlist-container">
          <!-- RAP -->
          <WrapPlaylist v-for="item in RecommendedPlaylist" :key="item.id" :Playlist="item"/>
      </div>
  </div>
</template>

<script>
import WrapPlaylist from './WrapPlaylist'
import {mapState} from "vuex";
export default {
    name: 're-playlist',
    components:{
        WrapPlaylist,
    },
    computed: {
        ...mapState(['RecommendedPlaylist'])
    }
}
</script>

<style scoped>
/* CONTAINER */
.recommendplaylist {
    position: relative;
}
.playlist-container {
    background-color: rgba(51,51,51,0.5);
    margin-top: 1%;
    padding: 2%;
}

/* ARTICLE */
.article-recommend {
  font-size: 1.3em;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 3%;
}
</style>