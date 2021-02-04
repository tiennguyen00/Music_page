<template>
  <div>
    <AllGenres/>
    <FeaturedGenres :FeaturedGenres="FeaturedGenres" :article="'Featured Genres'"/>
    <RecommendedPlaylist/>
  </div>
</template>

<script>
import FeaturedGenres from './index/FeaturedGenres.vue'
import AllGenres from './index/AllGenres'
import RecommendedPlaylist from './index/RecommendPlaylist'
import {mapState} from 'vuex'
export default {
  name:"sub-genres",
  methods:{
    
  },
  components:{
    FeaturedGenres,
    AllGenres,
    RecommendedPlaylist
  },
  computed:{
    ...mapState(["FeaturedGenres"]),
  }
}
</script>

<style scoped>
hr {
  color:  rgba(255, 255, 255, 0.9);
}

</style>