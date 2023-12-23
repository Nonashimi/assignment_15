<template>
 <div class="window none" @click="clickOk">
    </div>
    <slot >
<button @click="clickMessage">CLick me for show messageBox</button>
    </slot>
   
        <div class="messegeBox none">
<div class="title">Message Box</div>
<div class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, ea?</div>
<button class="ok" @click="clickOk">Ok</button>
</div>
    

</template>

<script>
export default{
    methods:{
        clickMessage(){
            let window = document.querySelector(".window");
            window.classList.remove("none");
            let message = document.querySelector(".messegeBox");
            message.classList.remove("none");
        },
        clickOk(){
            let window = document.querySelector(".window");
            window.classList.add("none");
            let message = document.querySelector(".messegeBox");
            message.classList.add("none");
        }
    }
}
</script>

<style scoped>
.none{
    display: none;
}
.messegeBox{
    width: 500px;
    text-align: center;
    position: fixed;
    top: 28%;
    left: 30%;
    padding: 30px 35px;
    justify-content: center;

    background-color: #fff;
    font-family: 'Roboto', sans-serif;
    border-radius: 4px;
    z-index: 2;
}
body{
    margin: 0;
}
.window{
    width:100%;
    height:100vh;
    position: fixed;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: red;
    opacity: 0.3;
   
    z-index: 1;
}
.title{
    color: rgb(69, 69, 69);
    font-size: 30px;
    font-weight: 600;
    padding-bottom: 20px;
}
.text{
    font-size: 15px;
    color: rgb(99, 97, 97);
    padding-bottom: 40px;
}
.ok{
    color: #fff;
    background-color: rgb(22, 127, 247);
    border: none;
    padding: 5px 15px;
    border-radius: 4px;
}


</style>