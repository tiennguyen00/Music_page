<template>
    <div class="wrap">
        <img :src="image" class="image" alt="#">
        <img :src="image" class="image_shadow" alt="#">
        <div class="name">
            <div class="name_album">{{name_albums}}</div>
            <div class="detail_album">{{name_singer}}</div>
        </div>
    </div>
</template>

<style scoped>
    .wrap{
        margin-right: 40px;
        display: flex;
        flex-direction: column;
    }
    .image, .image_shadow{
        width: 150px;
        margin-bottom: 20px;
        border-radius: 10px;

    }
    .image{
        z-index: 1;       
    }
    .image_shadow{
        position: absolute;
        transform: translate(5px, 5px) ;  
        filter: blur(10px)                                                                ;
    }
    .name{
        color: rgba(255, 255, 255, 0.7); 
    }
    .name_album{
        font-weight: 400;
        font-size: 90%;
    }
    .detail_album{
        font-weight: 300;
        font-size: 80%;
        color: rgba(255, 255, 255, 0.3);
    }
</style>

<script>
export default {
    props: {
        id: Number,
        name_albums: String,
        image: String,
        name_singer:  String
    }
}
</script>
