<template>
  <div class="avatar-wrapper">
	<img class="profile-pic" :src="picture" />
	<div class="upload-button" @click="chon_anh">
		<!-- <i class="fa fa-arrow-circle-up" aria-hidden="true"></i> -->
	</div>
	<input class="file-upload" type="file" accept="image/*" id="upload" @change="thay_anh"/>
</div>
</template>
<script>
import firebase from 'firebase';
export default {
  data(){
    return{
        imageData: null,
        picture: "",
        uploadValue: 0
    }
  },
  watch: {
    picture: function(newpicture){
      this.$emit("uploadPicture", newpicture);
    }
  },
  methods:{
    chon_anh(){
      document.getElementById('upload').click();
    },
    thay_anh(event){
      this.uploadValue=0;
      this.picture=null;
      this.imageData = event.target.files[0];

      this.onUpload();
    },
    onUpload(){
      this.picture=null;
      const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
      storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.picture =url;
        });
      }
      );
    }
  }
};
</script>
<style>
@charset "UTF-8";
.avatar-wrapper {
  position: relative;
  height: 100px;
  width: 100px;
  margin: 50px auto;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 1px 1px 15px -5px black;
  transition: all 0.3s ease;
}
.avatar-wrapper:hover {
  transform: scale(1.05);
  cursor: pointer;
}
.avatar-wrapper:hover .profile-pic {
  opacity: 0;
}
.avatar-wrapper .profile-pic {
  height: 100%;
  width: 100%;
  transition: all 0.3s ease;
  display: inline;
}
.avatar-wrapper .profile-pic:after {
  font-family: FontAwesome;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  font-size: 120px;
  background: #ecf0f1;
  color: #34495e;
  text-align: center;
  padding-top: 50px;
}
.avatar-wrapper .upload-button {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.avatar-wrapper .upload-button .fa-arrow-circle-up {
  position: absolute;
  font-size: 234px;
  top: -17px;
  left: 0;
  text-align: center;
  opacity: 0;
  transition: all 0.3s ease;
  width: 100%;
  height: 100%;
  max-width: 200px;
  color: white;
}
.avatar-wrapper .upload-button:hover .fa-arrow-circle-up {
  opacity: 0.9;
}
</style>