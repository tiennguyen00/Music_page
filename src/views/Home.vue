<template>
  <div class="home">

    <div class="slider">
      <h3 class="title">Featured for you</h3>

      <input v-for="variable in Feature" :key="variable.id" type="radio" :id = "variable.name" name="r">
       
      <div id="HH" style = "display: flex; width: 400%; height: fit-auto;">
        <a href="#" v-for="variable in Feature" :key="variable.id">
          <FeatureForU
          :image = variable.image
          />
        </a>
      </div>
       
      <div class="bar">
        <label
        v-for="variable in Feature" :key="variable.id" :for="variable.name"
        @click="selected = variable.id" :class="{able:selected == variable.id}"></label>
      </div>

    </div>

    <div class="container">
      <h3 class="title">Trending Now</h3>
      <div class="recently_listened">
          <TrendingNow  v-for="variable in TrendingNow" :key="variable.id" style="cursor: pointer;"
          :name_song = "variable.name_song"
          :name_performer = "variable.name_performer"
          :image = "variable.image"
        />
      </div>
      <div style="position: relative; text-align: center; padding-top: 20px;">
        <img style="width: 150px;" src="@/assets/image/Home/tonton_dance.gif" alt="#">
      </div>
    </div>

    <div class="recommended_album">
      <h3 class="title">Recommended Albums</h3>
      <div style="display: flex; margin-top: 15px;">
          <RecommendedAlbum v-for="variable in Album" :key="variable.id"
            :name_song = "variable.name_albums"
            :name_performer = "variable.name_singer"
            :image = "variable.image"
          />
        <strong class="more_album"><i class="fa fa-chevron-circle-right fa-3x" style="color: azure; transform: translateY(3rem); "></i></strong>
      </div>
    </div>

    
  </div>
</template>

<script>
import TrendingNow from "@/components/Home/TrendingNow.vue";
import RecommendedAlbum from "@/components/Home/RAlbums.vue";
import FeatureForU from "@/components/Home/Feature.vue";


import {mapState} from "vuex";
export default {
  components:{
    TrendingNow,
    RecommendedAlbum,
    FeatureForU
  },
  data(){
    return {
      selected: 1 //Biến này để thiết lập poster đc chọn mặc định ban đầu là r1
    }
  },
  mounted: function() {
    this.startSlide();

  },

  methods: {
    startSlide(){

      setInterval(()=>{   
        if(this.selected >= 4)
          this.selected = 1;
        else
          this.selected++;
      }, 10000)

      // setInterval(()=>{   
      //  document.getElementsByClassName("able")[0].click();
      // }, 10000)
    }
  },
  computed: {
    ...mapState(["TrendingNow", "Album", "Feature"]),
  }
 
}
</script>

<style scoped>

.home{
  display: grid;
  grid-template-columns: 2.5fr 0.8fr;
}
.title{
  color: rgba(255, 255, 255, 0.85);
  font-weight: 400;
  font-size: 1.3rem;
  margin-top: 1.3rem;
  margin-bottom: 1.2rem;
}
/* ==============CSS Slider==================== */
.slider .image{
  width: 100%;
}
.slider{
  width: 100%;
  overflow: hidden;
}

.bar{
  width: fit-content;
  position: absolute;
  transform: translate(0rem, -2rem);
}

.bar label{
  width: 50px;
  height: 10px;
  border: 2px solid #fff;
  margin: 6px;
  transition: all .4s;
}
.able{
  background-color: #fff;
}
input[type = "radio"]{
  display: none;
}
#HH{
  transition: all .4s;
}
#r1:checked ~ #HH{
  margin-left: 0%;
}
#r2:checked ~ #HH{
  margin-left: -100%;
}
#r3:checked ~ #HH{
  margin-left: -200%;
}
#r4:checked ~ #HH{
  margin-left: -300%;
}
/* ==============CSS Rencently_listened==================== */
.container{
  padding-right: 0;
}
.recently_listened{
  background-color: #1E1E2D;
  border-radius: 5px;
  padding: 10px 30px;
  border: 2px solid #1DA4B6;
}
/* ===============CSS Recommended_album==================== */
.recommended_album{
  grid-column: 1/3;
}
.more_album{
  font-weight: 400; 
  font-size: 120%; 
 
}



</style>