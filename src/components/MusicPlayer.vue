<template>
    <div class="music_play" >
        <div v-show="isPlay" class="livetime">
            {{a}} <div id="s-area"> 
                    <div id="seek-bar"></div>
                </div> {{b}}
        </div>
        <div class="name_song">
            <div id="a">{{name_song}}</div>
            <div id="b">{{name_performer}}</div>
        </div> 
        <div class="icon">
            <i class="fa fa-bars"></i>
           <div class="icon_control">
                <i class="fa fa-volume-up"></i>
                <i class="fa fa-backward"></i>
                <i id="test" v-if="!isPlay" @click="btn_play" class="fa fa-play"></i>
                <i v-else @click="btn_play" class="fa fa-pause"></i>
                <i class="fa fa-forward"></i>
                <i class="fa fa-usb"></i>
           </div>
            
            
            <i v-if="isLove" @click="love" class="fa fa-heart-o"></i>
            <i v-else @click="love" class="fa fa-heart"></i>
        </div>
        <audio id="audio" :src="mp3" type="audio/mpeg"></audio>
    </div>
</template>

<script>
export default {
    props: {
        name_song: String,
        name_performer: String,
        mp3: String,

    },
    data(){
        return{
            isLove: false,
            isPlay: false,
            x: 0, //Biến này dùng để nhận giá trị setInterval trong livetime,
            a: "0:00", //Biến này để thời gian hiển thị lên dạng chuỗi
            livetime: 0, //Dạng số của a
            b: "", // Biến này thể hiện thời gian của bài hát
            timeduration: 0, //Dạng số của b ,
        }
    },
    mounted(){
        var audio = document.getElementById("audio");
    },
    methods: {
        time_hh_mm(seconds) {
            const h = Math.floor(seconds / 3600);
            const m = Math.floor((seconds % 3600) / 60);
            const s = Math.floor(seconds % 60);
            return [h, m > 9 ? m : h ? "0" + m : m || "0", s > 9 ? s : "0" + s]
            .filter(a => a)
            .join(":");
        },

        love() {
            this.isLove = !this.isLove;
            // console.log("Giá trị:", this.$props.resetMusicPlayer);
        },

        btn_play() {
            // src: https://stackoverflow.com/questions/7638754/html-5-audio-tag-custom-controls
           
            this.isPlay = !this.isPlay;

            this.timeduration = audio.duration;
            this.b = this.time_hh_mm(audio.duration);

            if (this.isPlay) {
                this.x = setInterval(() => {
                this.livetime++;
                this.a = this.time_hh_mm(this.livetime);
                }, 1000);
            } else {
                clearInterval(this.x);
            }

            //Nút play/pause
            var method = this.isPlay ? "play" : "pause";
            audio[method]();
            return false;

        }
    },
    
    beforeUpdate() {

        if (this.livetime >= this.timeduration) {
            clearInterval(this.x);
            this.isPlay = false;
            this.a = ""; //Biến này để thời gian hiển thị lên dạng chuỗi
            this.livetime = 0;
            this.reset = false;
        }
        var caculator = (this.livetime/this.timeduration)*100;
        document.getElementById("seek-bar").style.width = caculator + "%";
    }
}
</script>

<style scoped>
    .music_play{
        position: fixed;
        bottom: 0;
        text-align: center;
        background-color: #000000;
        color: aliceblue;
        z-index: 999;
        width: 83%;
        border-top: 2px solid #1da4b6;
        transform: translate(-30px, 60px); /* Trừ 30 là để lùi vào trái 15+15px, do đag ở trong contain-fuild */
        margin-top: 0.5rem;
        transition: all 0.5s;
    }
    .music_play:hover{
        transform: translate(-30px,0%);
    }
    .icon{
        width: 40%;
        margin: 0 auto 1rem;
        display: flex;
        justify-content: space-between;
        color: azure;
    }
   
    .icon_control .fa-volume-up, .fa-usb{
        margin: 0.5rem 1rem 1rem;
    }
    .icon_control .fa-backward, .fa-forward{
        margin: 0.5rem 2rem 1rem;
    }
    .icon .fa-bars, .fa-heart-o, .fa-heart{
        margin: 9px 0;
    }
    .name_song{
        text-transform: uppercase;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
    #a{
        color:  aqua;
        letter-spacing: 3px;
        /* font-weight: 500; */
    }
    #b{
        word-spacing: 5px;
        color: rgb(173, 169, 169);
        font-size: 80%;
    }
    #s-area{
        display: inline-block;
        width: 20rem;  /* Độ dài của thanh phát nhạc */
        height: 4px;
        border-radius: 4px;
        background-color: #444;
        cursor: pointer;
    }
    #seek-bar{
        background-color: #1da4b6;
        height: 4px;
        border-radius: 4px;
    }
</style>