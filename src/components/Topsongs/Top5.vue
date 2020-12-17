<template>
    <div class="wrapper">
        <div class="img">
            <img style="width: 50px;" :src="image" alt="#">
        </div>
        <div class="name">
            <div class="name_song">{{id}}. {{name_song}}</div>
            <em class="name_performer">{{name_performer}}</em>
        </div>
        <div class="option">
            <i class=" fa fa-plus"></i>
            <i class=" fa fa-ellipsis-v"></i>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        id: Number,
        name_song: String,
        name_performer: String,
        image: String
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
    .img{
        flex-grow: 0;
        margin-right: 5px;
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
        color: rgba(255, 255, 255, 0.3);
        font-size: 75%;
    }

</style>