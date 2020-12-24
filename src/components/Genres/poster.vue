<template>
  <div>
      <img :src="image" alt="christmas">
  </div>
</template>

<script>
export default {
    name: "poster",
    data() {
        return {
            image: require("@/assets/image/Genres/christmas_topic.png"),
        }
    }
}
</script>

<style scoped>
    img {
        display: block;
        width: 100%;
        margin: auto;
    }
</style>