
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
                      Search
                  </a>
              </div>
              <div class="sidebar-wrapper">
                  <ul class="nav">
<!--sidebar here -->
                  <li class="nav-item"  @click="selected = 1" :class="{active:selected == 1}"> 
                     <router-link to="/" class="nav-link" >
                        <i class=" fa fa-home"></i>
                        <p>Home</p>
                      </router-link>
                  </li>
                 
                  <li class="nav-item " @click="selected = 2" :class="{active:selected == 2}">
                     <router-link to="/topsongs" class="nav-link" >
                      <i class="fa fa-line-chart"></i>
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
                    <router-link to="/events" class="nav-link">
                      <i class="fa fa-music"></i>
                      <p>Events</p>                
                    </router-link>
                  </li>

                  <li class="nav-item" @click="selected = 5" :class="{active:selected == 5}">
                      <router-link to="/performer" class="nav-link">
                        <i class="fa fa-user-o"></i>
                        <p>Perfomer</p>
                      </router-link>
                  </li>

                  <li class="nav-item" @click="selected = 6" :class="{active:selected == 6}">
                      <router-link to="/playlist" class="nav-link">
                        <i class="fa fa-tasks"></i>
                        <p>Playlist</p> 
                      </router-link>
                  </li>
 
                  <li class="nav-item" @click="selected = 7" :class="{active:selected == 7}">
                    <router-link to="/feedback" class="nav-link">    
                        <i class="fa fa-question"></i>
                        <p>Feedback</p>
                    </router-link>    
                  </li> 

                  </ul>
              </div>
          </div>

          <div class="main-panel">
            <!-- Navbar -->
            <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
              <div class="container-fluid">
                <div class="navbar-wrapper col-sm-5">
                  <!-- <a class="navbar-brand" href="#"></a> -->
                  <i id="icon" class="fa fa-search"></i>
                  <div class="form__group field">
                      <input type="input" class="form__field " placeholder="Search" name="search" id='search' required />
                      <label for="name" class="form__label">Search</label>
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
          <div class="content">
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
            </nav>
            <div class="copyright float-right" >
              Footer
            </div>
          </div>
        </footer>
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
</style>

<script>
// import * as a from 'link';    nhúng file tự code js ở đây.
export default {
  data(){
    return {
      selected: 1 // Biến này dùng để chỉnh sửa câc link nào được chọn
    }
  },
  methods: {
  }
}
</script>