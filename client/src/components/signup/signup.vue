<template>
    <div>    
        <div class="center">
            <button @click="openLoginForm()" class="signIn_signUp_Btn">SIGN UP</button>
        </div>
        <div v-show = "clickLogin" class="popup-overlay"></div>
        
        <div v-show = "clickLogin" class="wrapper">
            <div class="popup-close" @click="closeLoginForm()">&times;</div>
            <div class="title">Sign up</div>
            <form action="#" @submit.prevent="signUp()">
              <div>
                <avatar class="avatar" @uploadPicture="uploadPicture($event)"/>
              </div>
            <div class="field">
                <input type="text" required name="username" id="username" @change="usernameChange()">
                <label>Username</label>
            </div>
            <div class="field">
                <input type="password" required name="password" id="password">
                <label>Password</label>
            </div>
            <div class="field">
                <input type="email" required name="email" id="email" >
                <label>Email</label>
            </div>
            <div class="field">
                <input type="submit" value="Sign Up" id="submit" >
            </div>
            <div class="signup-link">Adready has an account ? <a href="#" @click="switchSign()">Sign In now</a></div>
            </form>
        </div>
    </div>
</template>


<script>
import firebase from 'firebase'
import avatar from './avatar.vue'
import EventBus from '@/store/eventBus.js';
    export default{
        data(){
            return{
                clickLogin: false,
                datas: [],
                picture:null
            }
        },
        components:{
          avatar
        },
        mounted(){
            let data = [];

          firebase.database().ref().on('value',function(snapshot) {
            snapshot.forEach((childSnapshot)=>{
              var key = childSnapshot.key;
              var vl = childSnapshot.val();
              var x = {name:key,value:vl};
              data.push(x);
            }
            )});
          this.datas = data;
          EventBus.$on('openSignUp', () => {
          this.openLoginForm();
          })
        },
        methods: {
            openLoginForm(){
                this.clickLogin = !this.clickLogin;
            },
            closeLoginForm(){
                this.clickLogin = false;
            },
            usernameChange(){
              let username = document.getElementById("username");
              let submit = document.getElementById("submit");
              for(var data of this.datas){
                  if(data.name == username.value){
                    alert("Tên đăng nhập đã tồn tại");
                    
                    submit.setAttribute("disabled", true);
                    return false;
                }
              } 
              submit.removeAttribute("disabled"); 
              return true;

            },
            signUp(){    
                let username = document.getElementById("username").value;
                let pass = document.getElementById("password").value;
                let mail = document.getElementById("email").value;                

                const storeRef = firebase.database().ref(username );
                storeRef.set({
                  name:username,
                   password:pass,
                    email:mail,
                    picture:this.picture
                });
                this.closeLoginForm();
                EventBus.$emit('openLogin');
                return true;
            },

            switchSign() {
                this.closeLoginForm();
                EventBus.$emit('openLogin');
            },

            uploadPicture(event){
              this.picture = event;

            }
        }

    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

::selection{
  background: #4158d0;
  color: #fff;
}

.avatar {
  margin: 0 auto;
}
.wrapper{   
  position: fixed;
  transition:transform 500ms ease-in-out,opacity 300ms ease-in-out;
  top:65%;
  left:50%;
  height: fit-content;
  transform:translate(-50%,-70%) scale(1.15);
  width: 380px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0px 15px 20px rgba(0,0,0,0.1);
  z-index:100;
}

.wrapper .title{
  font-size: 35px;
  font-weight: 600;
  text-align: center;
  line-height: 100px;
  color: #fff;
  user-select: none;
  border-radius: 15px 15px 0 0;
  background: linear-gradient(-135deg, #c850c0, #e6aa29);
}
.wrapper form{
  padding: 10px 30px 50px 30px;
}
.popup-overlay {
  position:fixed;
  top:0px;
  left:0px;
  width:100%;
  height:100vh;
  z-index:1;
  background:rgba(0,0,0,0.7);
  
}
.signIn_signUp_Btn {
    
    font-size: 16px;
    width: 80px;
    height: 30px;
    border: none;
    outline: none;
    color: #fff;
    background: #1E243A;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
}

.signIn_signUp_Btn:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

.signIn_signUp_Btn:active {
    color: #000
}

.signIn_signUp_Btn:active:after {
    background: transparent;
}

.signIn_signUp_Btn:hover:before {
    opacity: 1;
}

.signIn_signUp_Btn:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #1E243A;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
.wrapper form .field{
  height: 50px;
  width: 100%;
  margin-top: 20px;
  position: relative;
}
.wrapper form .field input{
  height: 100%;
  width: 100%;
  outline: none;
  font-size: 17px;
  padding-left: 20px;
  border: 1px solid lightgrey;
  border-radius: 25px;
  transition: all 0.3s ease;
}
.wrapper form .field input:focus,
form .field input:valid{
  border-color: #4158d0;
}

.wrapper form .field label{
  position: absolute;
  top: 50%;
  left: 20px;
  color: #999999;
  font-weight: 400;
  font-size: 17px;
  pointer-events: none;
  transform: translateY(-50%);
  transition: all 0.3s ease;
}
form .field input:focus ~ label,
form .field input:valid ~ label{
  top: 0%;
  font-size: 16px;
  color: #4158d0;
  background: #fff;
  transform: translateY(-50%);
}
.wrapper .popup-close {
    position:absolute;
    left: 355px;
    top: 5px;
    width:20px;
    height:20px;
    color:#f5f5f5;
    font-size:25px;
    font-weight:600;
    border-radius:10%;
    cursor:pointer;
  }
form .content{
  display: flex;
  width: 100%;
  height: 50px;
  font-size: 16px;
  align-items: center;
  justify-content: space-around;
}
form .content .checkbox{
  display: flex;
  align-items: center;
  justify-content: center;
}
form .content input{
  width: 15px;
  height: 15px;
  background: red;
}
form .content label{
  color: #262626;
  user-select: none;
  padding-left: 5px;
}
form .content .pass-link{
  color: "";
}
form .field input[type="submit"]{
  color: #fff;
  border: none;
  padding-left: 0;
  margin-top: -10px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  background: linear-gradient(-135deg, #c850c0, #e6aa29);
  transition: all 0.3s ease;
}
form .field input[type="submit"]:active{
  transform: scale(0.95);
}
form .signup-link{
  color: #262626;
  margin-top: 20px;
  text-align: center;
}
form .pass-link a,
form .signup-link a{
  color: #4158d0;
  text-decoration: none;
}
form .pass-link a:hover,
form .signup-link a:hover{
  text-decoration: underline;
}
</style>
