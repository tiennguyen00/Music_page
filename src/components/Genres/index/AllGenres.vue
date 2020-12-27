<template>
  <div class="allgenres-container">
      <ul class="list-genres">
          <div class="genre-item" v-for="genre in AllGenres" :key="genre.id">
              <i class="fa fa-angle-right item-icon"></i>
              <li class="genre-name-item">{{genre.name}}</li>
          </div>
      </ul>
      <i id="expand" @click="expandAllGenres()" :class="active" title="More genres" aria-hidden="true"></i>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
    name:"all-genres",
    data(){
        return {
            isActive: true,
        }
    },
    methods:{
        expandAllGenres(){
            if(this.active['fa-expand']){
                document.getElementById('expand').title = 'Minimize';
                document.querySelector('.allgenres-container').setAttribute('style',' height: 350px');
            }
            else{
                document.getElementById('expand').title = 'More Genres';
                document.querySelector('.allgenres-container').setAttribute('style',' height: 90px');
            }
            this.isActive = !this.isActive;
        }
    },
    computed:{
        ...mapState(['AllGenres']),
        active(){
            return {
                fa: true,
                'expand-compress-icon':true,
                'fa-expand': this.isActive,
                'fa-compress': !this.isActive,
            }
        }
    },
}
</script>

<style scoped>
/* CONTAINER */
.allgenres-container {
    margin: 2% 0%;
    height: 90px;
    position: relative;
    background-color: #025e93;
    border-radius: 10px;
    box-shadow: 5px 5px 10px #025e93;
    overflow: hidden;
    transition: all 1.5s ease;
}
.genre-item {
    display: flex;
    cursor: pointer;
}
/* LIST */
.list-genres {
    position: absolute;
    top: 10%;
    left: 15%;
    column-count: 4;
    column-gap: 4em;
    list-style-type: none;
    padding: 0;
    margin: 0;
    color:  rgba(255, 255, 255, 0.9);
    font-size: 1.2em;
    font-weight: bold;
    line-height: 2em;
}
/* ICON */
.item-icon {
    font-size: 1.2em;
    font-weight: bold;
    margin-right: 3%;
    line-height: 1.5em;
}
.expand-compress-icon {
    position: absolute;
    right: 1%;
    top: 5%;
    color: azure;
    transition: all 0.2s ease-in-out;
}
/* GENRE NAME */
.genre-item:hover .genre-name-item {
    text-decoration: underline;
}
.expand-compress-icon:hover {
    transform: scale(1.3,1.3);
}
</style>