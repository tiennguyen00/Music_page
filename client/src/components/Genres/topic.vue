<template>
  <div>
    <article class="article">All Topics</article>
    <FeaturedTopic :FeaturedTopics="FeaturedTopics"/>    
  </div>
</template>

<script>
import FeaturedTopic from './FeaturedTopic.vue';
import {mapState} from 'vuex'
export default {
  name: 'featured-topic',
  components: {
    FeaturedTopic,
  },
  computed:{
    ...mapState(['FeaturedTopics'])
  }
}
</script>

<style scoped>
/* ARTICLE */
.article {
  font-size: 1.5em;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  margin: 1% 0%;
  margin-bottom: 2%;
}
</style>