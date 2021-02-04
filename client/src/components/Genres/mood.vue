<template>
  <div>
    <FeaturedTopic :FeaturedTopics="Moods"/>    
  </div>
</template>

<script>
import FeaturedTopic from './FeaturedTopic.vue';
import {mapState} from 'vuex'
export default {
    name: 'mood',
    components:{
      FeaturedTopic,
    },
    computed: {
      ...mapState(['Moods']),
    }
}
</script>

<style>

</style>