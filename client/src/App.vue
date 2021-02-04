
<template>
<body class="dark-edition">
      <div class="wrapper ">
          <div class="sidebar" data-color="azure" data-background-color="black">
          <!--
          Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"
 
          Tip 2: you can also add an image using data-image tag
          -->
              <div class="logo">
                  <a href="#" class="simple-text logo-normal">
                      <img src="./assets/image/LOGOMS.png" alt="LOGO" width= 81%>
                  </a>
              </div>
              <div class="sidebar-wrapper">
                  <ul class="nav">
<!--sidebar here -->
                  <li class="nav-item"  @click="selected = 1" :class="{active:selected == 1}"> 
                     <router-link to="/" class="nav-link" >
                        <i class="material-icons">home</i>
                        <p>Home</p>
                      </router-link>
                  </li>
                 
                  <li class="nav-item " @click="selected = 2" :class="{active:selected == 2}">
                     <router-link to="/topsongs" class="nav-link" >
                      <i class="material-icons">show_chart</i>
                      <p>Topsongs</p>
                     </router-link>
                  </li>

                  <li class="nav-item" @click="selected = 3" :class="{active:selected == 3}">
                      <router-link to="/genres" class="nav-link">
                        <i class="material-icons">dashboard</i>
                        <p>Genres</p> 
                      </router-link>
                  </li>


                  <li class="nav-item" @click="selected = 4" :class="{active:selected == 4}">
                      <router-link to="/performer" class="nav-link">
                        <i class="material-icons">perm_identity</i>
                        <p>Perfomer</p>
                      </router-link>
                  </li>

                  <li class="nav-item" @click="selected = 5" :class="{active:selected == 5}">
                      <router-link to="/playlist" class="nav-link">
                       <i class="material-icons">clear_all</i>
                        <p>Playlist</p> 
                      </router-link>
                  </li>
 

                  </ul>
              </div>
          </div>

          <div class="main-panel" style="overflow-y: hidden;">
            <!-- Navbar -->
            <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top mod-padding">
              <div class="container-fluid">
                <div class="navbar-wrapper col-sm-5">
                    <!-- <a class="navbar-brand" href="#"></a> -->
                    <i @click = "handleSearch()" id="icon" class="fa fa-search"></i>
                    <div class="form__group field">
                        <input type="input" class="form__field" placeholder="Search" name="search" id='search' @keyup.enter = "handleSearch()" />
                        <label for="search" class="form__label">Search</label>
                    </div>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="navbar-toggler-icon icon-bar"></span>
                  <span class="navbar-toggler-icon icon-bar"></span>
                  <span class="navbar-toggler-icon icon-bar"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end">
                  <ul class="navbar-nav">
                     <li class="nav-item">
                      <a v-if = "!isLogin"  id="formLogin" class="nav-link" href="javascript:void(0)">
                        <Login @abc = "abc($event)"/>
                      </a>
                      <div v-else>
                      <img :src="picture" alt="#" class="avatar">
                      </div>
                    </li>

                     <li class="nav-item">
                      <a v-if = "!isLogin" class="nav-link" href="javascript:void(0)">
                        <SignUp />
                      </a>
                      <div v-else>
                        <p class="name" @click="isLogin = false">{{name}}</p>
                      </div>
                    </li>
                    
                    <li class="nav-item">
                      <a class="nav-link" href="javascript:void(0)">
                        <i class="material-icons">notifications</i>
                        <p class="d-lg-none d-md-block">
                          Notifications
                        </p>
                      </a>
                    </li>

                    <!-- your navbar here (left) -->
                  </ul>
                </div>
              </div>
            </nav>
            <!-- End Navbar -->
          <div class="content mod-padding-top">
            <div class="container-fluid">
              <!-- your content here -->
              
              <router-view></router-view>
            </div>
          </div>
  <!-- Footer -->
        <footer class="footer">
          <div class="container-fluid">
            <nav class="float-left">
              footer
              <br>
              <br>
              <br>
              <br>
              <br>
            </nav>
            <div class="copyright float-right" >
              Footer 
            </div>
          </div>
        </footer>
    
      </div>      
    </div>
    
   
    <!-- Trình phát nhạc  -->
    <MusicPlayer
    :newSong = "{
            name_song: this.name_song,
            name_performer: this.name_performer,
            image: this.image,
            mp3: this.mp3,
        }"/>

<!-- Form thêm bài hát -->
    <div class="card"  v-show="showFormAddSong">
        <div class="card-header card-header-primary">
          <h4 class="card-title">Add new song</h4>
        </div>
        <div class="card-body ">
          <form>
            <div class="form-group">
              <label class="bmd-label-floating">Name song</label>
              <input id = "inputNameSong" type="text" class="form-control" >
            </div>
            
            <div class="form-group">
              <label class="bmd-label-floating">Name performer</label>
              <input id = "inputNamePerformer" type="text" class="form-control" >
            </div>
          
            <div class="form-group">
              <label class="bmd-label-floating">Link image</label>
              <input id="inputLinkImg" type="text" class="form-control" >
            </div>
      
            <div class="form-group">
              <label class="bmd-label-floating">Link mp3</label>
              <input id = "inputLinkMp3" type="text" class="form-control" >
            </div>
        
            <button @click="addShowFormAddSong()" class="btn btn-primary pull-right">Add+</button>
            <button @click="closeShowFormAddSong()" class="btn pull-right">Close</button>
          </form>
        </div>
    </div>
  </body>
</template>

<style src="@/assets/scss/external.css">
 @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons');
 @import url('https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css');
</style>

<style scoped>
/* css tự code ở đây */
#icon{
  margin-right: 1rem;
  font-size: 200%;
  transform: translateY(30%);
}
.sidebar{
  background-image: url("./assets/image/App/background_nav.jpg");
  background-position: center;
  background-size: cover;
}
.main-panel{
  background-image: url("./assets/image/App/melody.jpg");
  background-size: cover;
}
.footer{
  padding: 0;
}

.card{
  width: 30%;
  z-index: 999;
  position: absolute;
  background-color: #1d1d1d;
  border: 5px solid purple;
  transform: translateX(50rem);
  }
.mod-padding {
  padding: 0;
}
.mod-padding-top {
  padding-top: 0;
}
.name{
  font-size: 25px;
  font-style: italic;
  font-weight: bold;
  color:white;
  height: 25px;
  margin: auto 0;
}
.avatar{
  width: 40px;
  height: 30px;
  border-radius: 50%;
}
</style>


<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-analytics.js"></script>

<script>
// import * as a from 'link';    nhúng file tự code js ở đây.
import EventBus from '@/store/eventBus.js';

import Login from '@/components/Login/login.vue';
import SignUp from './components/signup/signup.vue'


export default {
  data(){
    return {
      isLogin: false, //Biến này kiểm trã đã login chưa
      showFormAddSong: false,
      selected: 1, // Biến này dùng để chỉnh sửa câc link nào được chọn
      //===================Các biến bên dưới dùng để nhận thông tin yêu cầu phát nhạc từ các cpnent trong views ========//
      name_song: '',
      name_performer: '',
      image: '',
      mp3: '',
      picture: '',
      name: ''

    }
  },
  
  methods: {
 
  

    abc(event){
      this.isLogin = true;
      this.picture = event.picture;
      this.name = event.name;
      
    },

    async handleSearch(){
      let value = document.getElementById('search').value;
      let flag = 0; //Kiểm tra xem trong mảng đã có bài hát mới truyền vào chưa, nều rồi sẽ trả về

      await fetch("http://localhost:3000/getSongs", {
        method: "GET"
      }).then((res)=>{
        return res.json();
      }).then((data)=>{
        for(var song of data){
          if(song.name_song.toUpperCase() === value.toUpperCase()){
            flag=1;
            EventBus.$emit('playIt', song);      
            break;
          }
        }
      })  

      if(!flag)
        this.showFormAddSong = true;

    },

    closeShowFormAddSong(){
      this.showFormAddSong = false;
    },
    addShowFormAddSong(){
      let inputNameSong = document.getElementById("inputNameSong").value;
      let inputNamePerformer = document.getElementById("inputNamePerformer").value;
      let inputLinkImg = document.getElementById("inputLinkImg").value;
      let inputLinkMp3= document.getElementById("inputLinkMp3").value;

      const payLoad = {
        name_song: inputNameSong,
        name_performer: inputNamePerformer,
        mp3: inputLinkMp3,
        img: inputLinkImg
      }
    
      fetch("http://localhost:3000/", {
          method: "post",
          body: JSON.stringify(payLoad),
          headers: {
            "Content-Type": "application/json"
          }
        }).then((res)=>{
          return res.json();
        }).then((data)=>{
          if(data.result.ok == 1 && data.result.n == 1){
            console.log("data tư việc fetch post", data);
        }
      })
    }
  },

  computed: {

  },
  
  components: {
    Login,
    SignUp
  },
  mounted(){
    //Thiết lập nhạc mặc định cho Trình phát nhạc, tránh tính trạng lỗi phát chồng chéo
    this.mp3 = 'https://c1-ex-swe.nixcdn.com/NhacCuaTui913/JingleBellsNhacChuong-CrazyFrog-4273417.mp3?st=5G5fq57LnH0-0EGt0RVOtg&e=1608721009&download=true';
    // Băt sự kiện trên EventBus
    EventBus.$on('playIt', payLoad => {
      this.name_song = payLoad.name_song;
      this.name_performer = payLoad.name_performer;
      this.image = payLoad.image;
      this.mp3 = payLoad.mp3;
    })
    
  }
}
</script>
