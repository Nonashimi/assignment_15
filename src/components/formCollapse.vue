<template>
    <div class="collapse">
        <div class="flex" @click="Collapse">
            <label for="title">{{ title }}</label>  
        <div class="isOpen">{{ isOpen?"+":"-" }}</div>
        </div>
     <div class="conten">{{ content }}</div>
    </div>
    </template>
    <script>
    export default{
        props:{
            title:String,
            content:{
                content:String,
                 default:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, fugit?"},
        },
        data(){
        return{
            isOpen:true,
        }
        },
        methods:{
            Collapse(){
                let content = document.querySelector(".conten");
            content.classList.toggle("active");
            this.isOpen = !this.isOpen;
            }
        }
    
    }
    
    
    </script>
    
    <style scoped>
    .collapse{
        color: aliceblue;
        width: 600px;
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
        padding: 15px;
        background-color: #4cb85a;
        border-radius: 4px;
    
    }
    .flex{
        display: flex;
       
    }
    .isOpen{
        float: right;
        margin: 0 0 0 auto;
        font-size: 30px;
    }
    .conten{
      padding:0;
      width: 80%;
      visibility: hidden;
      height:0;
      margin:auto;
      overflow:hidden;
      background-color: #4cb85a;
      font-size: 16px;
      opacity:0;
      transition:all 0.2s ease-out;
    }
    .active{
      padding:10px;
      height: auto;
      visibility: visible;
      overflow:none;
      opacity:1;
      }
    
    </style>