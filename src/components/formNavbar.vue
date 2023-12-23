<template>
    <div class="navbar">
      <div class="brand" @click="clickOniks">
        <div>My App</div>
        <div class="x" >{{ onClik?"-":"+" }}</div>
      </div>
      <div class="links">
        <div class="aaa">Home</div>
        <div class="aaa">About</div>
        <div class="aaa">Contact</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data(){
        return{
            onClik:true
        }
    },
   methods:{
    clickOniks(){
        let link = document.querySelector(".links");
        link.classList.toggle("none");
        this.onClik = !this.onClik;
    }
   }
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #333;
    color: #fff;
    padding: 10px;
    width: 300px;
    justify-content: space-between;
   
  }
  .none{
    display: none;
  }
  
  .brand {
    font-size: 1.5em;
    padding:  20px 0;
    border-bottom: 1px solid gray;
    display: flex;

    gap:60%;
  }
  
 
  
  .aaa {
    color: #fff;
    text-decoration: none;
    padding: 10px 10px;
    border-bottom: 1px solid gray;
  }
  
  .aaa:hover {
    text-decoration: underline;
  }
  </style>
  