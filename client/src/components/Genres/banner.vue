<template>
  <div class="banner-container">
    <div class="left-image-container">
      <img
            id="b1"
            class="img l-img"
            :src="BannerImage[0].image"
            :alt="BannerImage[0].name"
      />
      <i class="fa fa-chevron-circle-left fa-4x icon" ></i>
    </div>
    <div class="center-image-container">
        <img
            id="b2"
            class="img c-img"
            :src="BannerImage[1].image"
            :alt="BannerImage[1].name"
        />
    </div>
    <div class="right-image-container">
        <img
            id="b3"
            class="img r-img"
            :src="BannerImage[2].image"
            :alt="BannerImage[2].name"
        />
        <i class="fa fa-chevron-circle-right fa-4x icon" ></i>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "banner",
  data() {
    return {};
  },
  computed: {
    ...mapState(["BannerImage"]),
  },
};
</script>

<style scoped>
/* CONTAINER */
.banner-container {
  display: flex;
  position: relative;
  height: 300px;
}
.icon-container {
  display: flex;
  justify-content: space-between;
}
.left-image-container {
  opacity: 0.5;
  position: relative;
  left: 0%;
  top: 10%;
}
.right-image-container {
  position: relative;
  right: -33%;
  top: 10%;
}
.center-image-container {
  position: relative;
  right: 34%;
  top: 0%;
}
.left-image-container,.right-image-container {
    height: 230px;
    opacity: 0.5;
}
.left-image-container,.right-image-container,.center-image-container {
    cursor: pointer;
}
/* IMAGE */
#b1, #b3 {
  width: 400px;
  height: 230px;
  z-index: 0;
}
#b2 {
  width: 520px;
  height: 291.5px;
  z-index: 1;
  position: absolute;
  top: 0px;
  left: 325px;
}
.img {
  border-radius: 15px;
}
/* ICON */
.icon {
  color: azure;
  visibility: hidden;
}
.fa-chevron-circle-left {
    position: absolute;
    left: 2%;
    top: 35%;
}
.fa-chevron-circle-right {
    position: absolute;
    right: 2%;
    top: 35%;
}
/* HOVER */
.left-image-container:hover .fa-chevron-circle-left{
    visibility: visible;
}
.right-image-container:hover .fa-chevron-circle-right{
    visibility: visible;
}
</style>