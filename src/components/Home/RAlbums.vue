<template>
    <div class="wrap">
            <img :src="image" class="image" alt="#">
            <img :src="image" class="image_shadow" alt="#">
            <div class="c-review"><i class="fa fa-4x fa-play-circle-o"></i></div>
        
        <div class="name">
            <div class="name_album">{{name_albums}}</div>
            <div class="detail_album">{{name_singer}}</div>
        </div>
    </div>
</template>

<style scoped>
    .wrap{
        position: relative;
        margin-right: 40px;
        display: flex;
        flex-direction: column;
    }
    .image, .image_shadow{  
        width: 150px;
        border-radius: 10px;
        transition: 0.3s all ;
    }
    .image{
        z-index: 1;     
    }
    .image_shadow{
        position: absolute;
        transform: translate(5px, 5px) ;  
        filter: blur(10px)                                                                ;
    }
/* ========================================== */
    .name{
        color: rgba(255, 255, 255, 0.7); 
        margin-top: 20px;
    }
    .name_album{
        font-weight: 400;
        font-size: 90%;
        cursor: pointer;
    }
    .detail_album{
        font-weight: 300;
        font-size: 80%;
        color: rgba(255, 255, 255, 0.3);
    }
/* ==============Hiệu ứng hover=============== */
    .c-review{
        position: absolute;
        top: 0%;
        left: 0%;
        width: 100%;
        height: 150px;
        background: linear-gradient(135deg,#000000 0%,#000000 25%,#1e539e 50%, #ff3083 75%,#7800a8 100%);
        background-size: 150% 150%;
        opacity: 0;
        cursor: pointer;
        transition: 0.3s all;
        border-radius: 10px;
        z-index: 2;
    }

    .fa-play-circle-o{
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .wrap:hover img{
        transform: translateY(-0.8rem);
    }
    .wrap:hover .image_shadow{
        opacity: 0;
    }
    .wrap:hover .c-review{
        transform: translateY(-0.8rem);
        opacity: 0.6;
        background-position: 100% 100%;
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
