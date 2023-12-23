<template>
<div class="win none" @click="clickok" >
    </div>
    <slot >
<button @click="clickAl">CLick me for show alert</button>
    </slot>
<div class="modalAlert none">
    <div class="title">ALert</div>
    <div class="subtitle">Lorem ipsum dolor sit amet.
    </div>
    
</div>
</template>

<script>
export default {
 methods:{
    clickAl(){
        let ModalALert = document.querySelector(".modalAlert");
        ModalALert.classList.remove("none");
        let win = document.querySelector(".win");
        win.classList.remove("none");
    },
    clickok(){
        let ModalALert = document.querySelector(".modalAlert");
        ModalALert.classList.add("none");
        let win = document.querySelector(".win");
        win.classList.add("none");
    }
 }
}
</script>

<style scoped>


.modalAlert{
    width:500px;
    padding: 30px 40px;
    background-color: #fff;
    text-align: center;
    position: fixed;

    top: 28%;
    left: 30%;
    padding: 30px 35px;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    border-radius: 4px;
    z-index: 2;
}
.title{
    color: rgb(69, 69, 69);
    font-size: 30px;
    font-weight: 600;
    padding-bottom: 20px;
}

.win{
    width:100%;
    height:100vh;
    position: fixed;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: rgb(10, 10, 10);
    opacity: 0.3;
    z-index: 1;
}
.none{
    display: none;
}

</style>