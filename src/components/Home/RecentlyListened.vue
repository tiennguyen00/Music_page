<template>
    <div class="container">
        <img class="image" src="@/assets/image/Home/a_litle_love.jpg" alt="image">
        <div class="name">
            <div class="name_song">A little love</div>
            <em class="name_performer">Fiona Fung</em>
        </div>
    </div>
</template>
<style scoped>
    .container{
        display: flex;
        margin: 10px 0;
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
        font-size: 110%;
        color: rgba(255, 255, 255, 0.7);
    }
    .name_performer{
        color: rgba(255, 255, 255, 0.3);
        font-size: 80%;
    }
</style>