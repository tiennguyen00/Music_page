<template>
  <div>
        <div class="heading">
            <article class="article">{{Playlist.genre_name}}</article>
            <p class="see-all">See all</p>
        </div>
        <div class="playlist-container">
            <RAlbums class="image" v-for="rplay in Playlist.playlists" :key="rplay.id" :image="rplay.image" :name_song="rplay.name" :name_performer="'V.A'"/>
        </div>
  </div>
</template>

<script>
import RAlbums from "../../Home/RAlbums";
export default {
    name: 'wrap-playlist',
    props:{
        Playlist: {},
    },
    components:{
        RAlbums,
    }
}
</script>

<style scoped>
.heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.see-all {
  font-size: 1em;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.5);
  margin: 3% 0% 1.5% 0%;
  position: relative;
  right: 0%;
  cursor: pointer;
}
.playlist-container {
    display: flex;
}
.article {
  font-size: 1.3em;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
}
/* IMAGE */
.image:not(:last-child) {
    margin-right: 4.5%;
}
/* HOVER */
.see-all:hover {
    text-decoration: underline;
}
</style>