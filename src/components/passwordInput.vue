<template>

    <div class="block">
        <div class="flex">
        <label >{{ label }}</label>
        <div class="stat">{{assept}}</div>
    </div>
     <input class = "passwordInput" :placeholder="placeholder" :type="type" v-model="passwordText"
      @input="PasswordInput">
    </div>
    
    
    </template>
    
    <script>
    export default{
        props :{
            type:{
                type:String,
            default:"password",
            },
            label: String,
        placeholder:String,
        },
        data(){
            return{
                passwordText: "",
                assept: "",
            };
        },
       
        methods:{
            PasswordInput(){
                let stat = document.querySelector(".stat");
                if(this.passwordText.length == 0){
                    this.assept = "";
                }else if(this.passwordText.length<=8){
                   this.assept = "Password length must be larger than 8";
                   stat.classList.remove("green");
                   stat.classList.add("red");
                }else{
                    this.assept ="Assept";
                    stat.classList.add("green");
                   stat.classList.remove("red");
                }
            }
        },
    
    };
    
    
    
    
    </script>
    
    <style scoped>
     .block{
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
        border-bottom: 1px solid gray;
        padding-bottom: 10px;
        margin-top: 10px;
     }
     .flex{
        display: flex;
    gap: 10px;
    padding: 5px 0;
     }
     .green{
    color: green;
       }     
       .red{
    color: red;
}
    
     .passwordInput{
        border: none;
        font-size: 20px;
        outline: none;
     }
    </style>