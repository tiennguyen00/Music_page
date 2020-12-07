<template>
    <div class="wrap">
        <img class="image" :src="image" alt="image">
        <div class="name">
            <div class="name_song">{{name_song}}</div>
            <em class="name_performer">{{name_performer}}</em>
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

<style scoped>
    .wrap{
        display: flex;
        margin: 20px 0;
    }
    .image{
        /* flex-grow: 1; */
        height: 50px;
        border-radius: 10px;
    }
    .name{
        flex-grow: 3;
        margin-left: 30px;
        line-height: 120%;
        transform: translateY(15%);
    }
    /* Code bên trong component */
    .name_song{
        font-weight: 400;
        font-size: 90%;
        color: rgba(255, 255, 255, 0.7);
    }
    .name_performer{
        color: rgba(255, 255, 255, 0.3);
        font-size: 80%;
    }
</style>
