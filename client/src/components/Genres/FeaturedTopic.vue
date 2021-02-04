<template>
  <div class="topic-container">
      <div class="topic" v-for="item in FeaturedTopics" :key="item.id">
           <img :src="item.image" class="image" :alt="item.name_song"/>
           <img :src="item.image" class="image_shadow" :alt="item.name_song"/>
           <p class="topic-name">{{item.name_song}}</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'topic',
    props: {
        FeaturedTopics: Array,
    }
}
</script>

<style scoped>
.topic-container {
  display: flex;
  flex-wrap: wrap;
}
 .topic {
  position: relative;
  margin-right: 2.49%;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  cursor: pointer;
}

/* IMAGE */
.image, .image_shadow {
  width: 260px;
  height: 170px;
  border-radius: 10px;
  transition: 0.5s all;
}
.image {
  z-index: 1;
}
.image_shadow {
  position: absolute;
  transform: translate(-5px, 5px);
  filter: blur(10px);
}
/*GENRES NAME*/
.topic-name {
    text-align: center;
    margin: 2% 0%;
    font-size: 1.3em;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.9);
}
/* HOVER */
.topic:hover .image{
    transform: scale(1.05,1.05);
}

</style>

