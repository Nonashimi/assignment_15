<template>
<div class="wind none" @click="clickWindow" >
    </div>
    <slot >
<button @click="clickModal">CLick me for show modal Window</button>
    </slot>
<div class="ModalWindow none">
    <div class="title">Modal Window</div>
    <div class="subtitle">Subtitle</div>
    
</div>


</template>


<script>
export default{
    methods:{
        clickModal(){
        let modal = document.querySelector(".ModalWindow");
        modal.classList.remove("none");
        let wind = document.querySelector(".wind");
        wind.classList.remove("none");
        },
        clickWindow(){
            let modal = document.querySelector(".ModalWindow");
            modal.classList.add("none");
            let wind = document.querySelector(".wind");
            wind.classList.add("none");

        }
    }
}

</script>


<style scoped>
.ModalWindow{
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
.title{
    color: rgb(69, 69, 69);
    font-size: 30px;
    font-weight: 600;
    padding-bottom: 20px;
}
.wind{
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