<template>
  <div>
      <div class="heading-container">
        <article class="article">Featured Genres</article>
        <div class="icon-container">
          <span @click="preImage()"><i :class="activeLeft" style="margin-right:30px;"></i></span>
          <span @click="nextImage()"><i :class="activeRight"></i></span>
        </div>
      </div>
      <div class="slide-list-container">
        <div class="slide-list">
          <div class="wrap" v-for="FeaturedGenre in FeaturedGenres" :key="FeaturedGenre.id">
              <img :src="FeaturedGenre.image" class="image" :alt="FeaturedGenre.name"/>
              <img :src="FeaturedGenre.image" class="image_shadow" :alt="FeaturedGenre.name"/>
              <p class="genre-name">{{FeaturedGenre.name}}</p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: "FeaturedGenres",
    data(){
      return {
        width: 1,//width of slide-list-container
        count: 0,
      }
    },
    props:{
      FeaturedGenres: [],
    },
    methods:{
        nextImage(){
          if(this.count < Math.ceil(this.FeaturedGenres.length / 4 - 1))
            this.count++;
          this.width = Number(document.querySelector('.slide-list-container').clientWidth);
          let sl = document.querySelector('.slide-list');
          sl.setAttribute('style','transform: translateX(' + -this.width  * this.count + 'px)');
        },
        preImage(){
          if(this.count > 0)
            this.count--;
          let sl = document.querySelector('.slide-list');
          sl.setAttribute('style','transform: translateX(' + this.width * this.count + 'px)');
        }
    },
    computed:{
        
        isActiveRight(){
          let length = this.FeaturedGenres.length;
          if(length > 4 && this.count < length / 4 - 1)
            return true;
        },
        isActiveLeft(){
          if(this.count > 0)
            return true;
        },
        activeLeft(){
          return {
            fa: true,
            'fa-angle-left': true,
            'fa-2x':true,
             icon: true,
             active: this.isActiveLeft,
          }
        },
        activeRight(){
          return {
            fa: true,
            'fa-angle-right': true,
            'fa-2x':true,
             icon: true,
             active: this.isActiveRight ,
          }
        }
    }
};
</script>

<style scoped>
.slide-list-container{
  overflow: hidden;
}
.slide-list {
  display: flex;
  transition: transform 0.6s ease;
}
.wrap {
  position: relative;
  margin-right: 45px;
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
.genre-name {
    text-align: center;
    margin: 2% 0%;
    font-size: 1.3em;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.9);
}
/* HEADING-CONTAINER */
.heading-container {
  display: flex;
  justify-content: space-between;
  position: relative;
}
.icon-container {
  margin-top: 1%;
  margin-right: 1%;
}
/* ARTICLE */
.article {
  font-size: 1.3em;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  margin: 1% 0%;
}
/* ICON */
.icon {
  color: azure;
  opacity: 0.3;
  transition: all 0.2 ease;
}
/* HOVER */
.wrap:hover .image{
    transform: scale(1.05,1.05);
}
.active:hover{
  transform: scale(1.1,1.1);
}
/* active */
.active {
  opacity: 1;
}
</style>