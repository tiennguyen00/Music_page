<template>
    <div class="wrapper" @mouseenter="updateChart" @click="playIt">
        <div class="img">
            <img style="width: 50px;" :src="payLoad.image" alt="#">
        </div>
        <div class="name">
            <div class="name_song">{{payLoad.id}}. {{payLoad.name_song}}</div>
            <em class="name_performer">{{payLoad.name_performer}}</em>
        </div>
        <div class="option">
            <i class=" fa fa-plus"></i>
            <i class=" fa fa-ellipsis-v"></i>
        </div>
    
    </div>
</template>
<script>
import EventBus from '@/store/eventBus.js';
export default {
    props: {
        payLoad: {
            type: Object
        }
    },
    methods: {
        updateChart(){
            this.$emit('updateChart', this.payLoad.id);
        },
        playIt(){
            EventBus.$emit('playIt', this.payLoad);
        }
    }
}
</script>

<style  scoped>
    .wrapper{
        display: flex;
        margin-left: 1rem;
        margin-top: 0.3rem; 
        height: fit-content;
        background-color: #1d1d1d;
        padding: 7px;
    }
    .wrapper:hover{
        background-color: #047786;
    }
   
    .img{
        flex-grow: 0;
        margin-right: 5px;
        position: relative;
    }
    .name{
        flex-grow: 1;
    }   
    .option i{
        margin-right: 10px;
        color: rgba(255, 255, 255, 0.7);
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
    .name_song{
        font-weight: 400;
        font-size: 100%;
        color: rgba(255, 255, 255, 0.7);
    }
     .name_performer{
        color: rgba(255, 255, 255, 0.4);
        font-size: 75%;
    }

</style>