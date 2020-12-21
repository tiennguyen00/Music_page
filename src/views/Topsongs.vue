<template>
    <div class="Topsongs">
        <div class="row">
            <div class="col-xl-8">
                <h3 style="margin: 0; text-align: center; font-weight: 700; color: rgba(255, 255, 255, 0.7);">
                   <i style="color: #1da4b6" class="fa fa-music"></i> {{Top5[id-1].name_song}} <i style="color: #1da4b6" class="fa fa-music"></i>
                </h3>
                <div class="card card-chart">
                    <div class="card-header card-header-success">
                        <div class="ct-chart">
                            <svg class="ct-chart-line" style="height: 100%; width: 100%;">
                                <g class="ct-grids">
                                    <line x1="108" x2="108" y2="300" y1="0" class="ct-grid ct-horizontal"></line>
                                    <line x1="216" x2="216" y2="300" y1="0" class="ct-grid ct-horizontal"></line>
                                    <line x1="324" x2="324" y2="300" y1="0" class="ct-grid ct-horizontal"></line>
                                    <line x1="432" x2="432" y2="300" y1="0" class="ct-grid ct-horizontal"></line>
                                    <line x1="540" x2="540" y2="300" y1="0" class="ct-grid ct-horizontal"></line>
                                    <line x1="648" x2="648" y2="300" y1="0" class="ct-grid ct-horizontal"></line>
                                
                                    <line x1="0" x2="750" y2="0" y1="0" class="ct-grid ct-verical"></line>
                                    <line x1="0" x2="750" y2="47.16" y1="47.16" class="ct-grid ct-horizontal"></line>
                                    <line x1="0" x2="750" y2="94.32" y1="94.32" class="ct-grid ct-horizontal"></line>
                                    <line x1="0" x2="750" y2="141.49" y1="141.49" class="ct-grid ct-horizontal"></line>
                                    <line x1="0" x2="750" y2="188.646" y1="188.164" class="ct-grid ct-horizontal"></line>
                                    <line x1="0" x2="750" y2="235.8" y1="235.8" class="ct-grid ct-horizontal"></line>
                                </g>

                                <Chart 
                                    :y1 = Chart[id-1].y1
                                    :y2 = Chart[id-1].y2
                                    :y3 = Chart[id-1].y3
                                    :y4 = Chart[id-1].y4
                                    :y5 = Chart[id-1].y5
                                    :y6 = Chart[id-1].y6
                                    :y7 = Chart[id-1].y7
                                />

                                <g class="ct-labels">
                                    <foreignObject style="overflow: visible;" x="90" y="280" width="100px" height="20px">
                                        <span class="ct-label ct-horizontal ct-end" style="width: 100px; height: 20px;">22/21</span>
                                    </foreignObject>                    
                                    <foreignObject style="overflow: visible;" x="306" y="280" width="100px" height="20px">
                                        <span class="ct-label ct-horizontal ct-end" style="width: 100px; height: 20px;">24/12</span>
                                    </foreignObject>
                                    <foreignObject style="overflow: visible;" x="522" y="280" width="100px" height="20px">
                                        <span class="ct-label ct-horizontal ct-end" style="width: 100px; height: 20px;">26/12</span>
                                    </foreignObject>
                                </g>
                            </svg>
                        </div>
                    </div>

                    <div class="card-footer">
                        <div class="stats">
                            <i class="material-icons">access_time</i> updated 1 day ago
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-4">
                <a style="display: block; text-align: right; color:#DDD; cursor: pointer; right: 0; margin-top: 10px; font-weight: 400">SEE ALL</a>
                <Top5 v-for="variable in Top5" :key="variable.id" style="cursor: pointer;"
                    @updateChart="id = $event" 
                    @playIt = playIt
                    :payLoad = "{
                        id: variable.id,
                        name_song: variable.name_song,
                        name_performer: variable.name_performer,
                        image: variable.image,
                        mp3: variable.mp3,
                    }"
                />
            </div>
        </div>

        <div class="row" style="padding-left: 1rem; margin-bottom: 3rem;">
            <h3 class="title">Top Playlist</h3>
            <div style="display: flex; margin-top: 15px;">
                <a href="#" v-for="variable in Album" :key="variable.id">
                <RecommendedAlbum
                    :name_albums = "variable.name_albums"
                    :name_singer = "variable.name_singer"
                    :image = "variable.image"
                />
                </a>
                <strong class="more_album"><i class="fa fa-chevron-circle-right fa-3x" style="color: azure; transform: translateY(3rem); "></i></strong>
            </div>
        </div>

        <div class="row" style="padding-left: 1rem;">
            <h3 class="title">Top Album</h3>
            <div style="display: flex; margin-top: 15px;">
                <a href="#" v-for="variable in Album" :key="variable.id">
                <RecommendedAlbum
                    :name_albums = "variable.name_albums"
                    :name_singer = "variable.name_singer"
                    :image = "variable.image"
                />
                </a>
                <strong class="more_album"><i class="fa fa-chevron-circle-right fa-3x" style="color: azure; transform: translateY(3rem); "></i></strong>
            </div>
        </div>

        <MusicPlayer
        :newSong = "{
            name_song: this.name_song,
            name_performer: this.name_performer,
            image: this.image,
            mp3: this.mp3,
        }"
        />
    </div>
</template>

<script>
import Top5 from '@/components/Topsongs/Top5.vue'; 
import Chart from '@/components/Topsongs/Chart.vue';
import RecommendedAlbum from '@/components/Home/RAlbums.vue';
import MusicPlayer from '@/components/MusicPlayer.vue';

import {mapState} from "vuex";

export default {
    data(){
        return{
            id: 1,
            name_song: '',
            name_performer: '',
            image: '',
            mp3: '',
        }
    }, 
    components: {
        Top5,
        Chart,
        RecommendedAlbum,
        MusicPlayer
    },
    computed: {
        ...mapState(['Top5', 'Chart', 'Album'])
    },
    methods: {
        playIt(payLoad){
            this.name_song = payLoad.name_song;
            this.name_performer = payLoad.name_performer;
            this.mp3 = payLoad.mp3; 
            this.image = payLoad.image;
          
        }
    }
    
}
</script>

<style scoped>
    .card{
        background-color: transparent !important;
    }
    .card-header{
        background: transparent !important;
        margin-top: 0 ;
        height: 320px;
        border-left: 2px solid #1da4b6;
        border-bottom: 2px solid #1da4b6;
        padding-left: 0 !important;
        padding-bottom: 0 !important;
    }
    .ct-chart{
        height: 100%;
    }
    .title{
        color: rgba(255, 255, 255, 0.85);
        font-weight: 400;
        font-size: 1.3rem;
        margin-top: 0rem;
        margin-bottom: 0rem;
    }
</style>
