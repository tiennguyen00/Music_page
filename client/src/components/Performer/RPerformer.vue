<template>
    <div class="wrapper">
   
            <img class="image" src="@/assets/image/Performer/Hoa_Thần_Vũ.jpg" alt="#">
            <div class="name_performer">Hoa Thần Vũ</div>
            <button v-if="!follow" @click="follow = !follow" class="btn1" >Follow <i class="fa fa-plus"></i></button>
            <button v-else @click="follow = !follow" class="btn_clicked" ><i class="fa fa-check"></i> Followed</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            follow: false
        }
    }
}
</script>

<style scoped>
    .wrapper{
        display: inline-block;
        margin-bottom: 70px;
        margin-right: 25px;
        margin-left: 25px;
        width: fit-content;
        height: fit-content;
        position: relative;
       
    }
    .image{
        border-radius: 50%;
        width: 200px;
        cursor: pointer;
    }
    .name_performer{
        text-align: center;
        margin-top: 0.8rem ;
        margin-bottom: 0.8rem;
        color: azure;
        font-weight: 500;
        font-size: 90%;
    }
    .btn1{
        transform: translateX(20%);
        background-color: #c4c4c4;
        color: #000000;
        font-weight: 500;
        border-radius: 10px;
        border: 2px solid #3FA2F7;
        padding: 6px 40px;
    }
    .btn1:hover{
        border: 4px solid #3fa2f7;
    }
    .btn_clicked{
        transform: translateX(18%);
        background-color: #0f222b;
        color: #747373;
        font-weight: 500;
        border-radius: 10px;
        border: 2px solid #3FA2F7;
        padding: 6px 30px;
    }
    /*==============Hiệu ứng hover=============== */


    
</style>