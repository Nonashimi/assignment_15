<template>

    <div class="flex">
     <div class="">Number Input:</div>
     <input type="number" class="number" placeholder="000" v-model="number">
    </div>
    
    
    </template>
    
    <script>
    export default{
        data(){
            return{
                number: "",
            };
        },
        methods:{
            handleInput(){
            console.log(this.inputText);
            }
        },
    
    };
    
    
    
    
    </script>
    
    <style scoped>
     .flex{
        display: flex;
        gap: 10px;
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
        border-bottom: 1px solid gray;
        padding-bottom: 10px;
        margin-top: 10px;
     }
    
     .number{
        border: none;
        font-size: 20px;
        outline: none;
     }
    </style>