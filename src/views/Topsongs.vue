<template>
        <div class="row">
            <div class="col-xl-8">
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
                                <g class="ct-series ct-series-a">
                                    <path d="M0,188.646 L108,141.49 L216,200 L324,110 L432,110 L540,100 L648,80" class="ct-line"></path>
                                    <line x1="0" y1="188.646" x2="0" y2="188.646" class="ct-point"></line>
                                    <line x1="108" y1="141.49" x2="108" y2="141.49" class="ct-point"></line>
                                    <line x1="216" y1="200" x2="216" y2="200" class="ct-point"></line>
                                    <line x1="324" x2="324" y2="110" y1="110" class="ct-point"></line>
                                    <line x1="432" x2="432" y2="110" y1="110" class="ct-point"></line>
                                    <line x1="540" x2="540" y2="100" y1="100" class="ct-point"></line>
                                    <line x1="648" x2="648" y2="80" y1="80" class="ct-point"></line>
                                </g>
                                <g class="ct-labels">
                                    <foreignObject style="overflow: visible;" x="90" y="260" width="100px" height="20px">
                                        <span class="ct-label ct-horizontal ct-end" style="width: 100px; height: 20px;">22/21</span>
                                    </foreignObject>                    
                                    <foreignObject style="overflow: visible;" x="306" y="260" width="100px" height="20px">
                                        <span class="ct-label ct-horizontal ct-end" style="width: 100px; height: 20px;">24/12</span>
                                    </foreignObject>
                                    <foreignObject style="overflow: visible;" x="522" y="260" width="100px" height="20px">
                                        <span class="ct-label ct-horizontal ct-end" style="width: 100px; height: 20px;">26/12</span>
                                    </foreignObject>                              
                                    <foreignObject style="overflow: visible; " x="660" y="80.82" width="100px" height="20px">
                                        <span class="ct-label ct-horizontal ct-end" style="width: 100px; height: 20px; font-weight: 900; color: #1da4b6">2M víews</span>
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
               <Top5 v-for="variable in Top5" :key="variable.id"
                :id = variable.id
                :name_song = variable.name_song
                :name_performer = variable.name_performer
                :image = variable.image
               />
               <p style="color:#DDD; text-align: right; margin-top: 10px; font-weight: 400">SEE ALL</p>
            </div>
        </div>
</template>

<script>
import Top5 from '@/components/Topsongs/Top5.vue'; 

import {mapState} from "vuex";

export default {
    components: {
        Top5
    },
    computed: {
        ...mapState(['Top5'])
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
</style>
