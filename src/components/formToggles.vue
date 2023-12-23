<template>

<div class="toggle" @click="click">
    
<div class="circle" ></div>
</div>


</template>

<script>
export default{
    props:{

    },
    data(){
        return{
         isOn: false,
        }
    },
    methods:{
        click(){
            let circle = document.querySelector(".circle");
            circle.classList.toggle("transfor");
            if(circle.classList.contains("transfor")){
                this.isOn = true;
            }else{
                this.isOn = false;
            }
            this.isActive();
        }
        ,
        isActive(){
            let tog = document.querySelector(".toggle");
         if(this.isOn){
          tog.classList.add("isblue");
         }else{
            tog.classList.remove("isblue");
         }
        }
    }
}

</script>

<style>
.toggle{
width: 50px;
height: 25px;
background-color: gray;
padding: 4px 3px 0 3px;
border-radius: 50px;
}
.circle{
    width: 40%;
    height: 80%;
    background-color: #fff;
    border-radius: 50px;
    transition: all .3s;
}
.transfor{
    transform: translateX(29px);
}
.isblue{
    background-color: blue;
}

</style>