<template>
   <div class="pagination">
    <li><i class="fa-solid fa-chevron-left" @click="minus"></i></li>
    <ul class="ul">
        <li v-for="int in arr" :key = "int" :id="int" >{{ int }}</li>
    </ul>
    <li><i class="fa-solid fa-angle-right" @click="plus"></i></li>

   </div>
  </template>
  
  <script>
  export default {
    props: {
      current: {
        type: Number,
        required: true,
      },
    },
   data(){
    return{
        arr:this.array(),
        count:1
    }
   },
    methods: {
        createPaginationHTML() {
       console.log(this.arr);
    },
    array(){
        let ar = [];
        for(let i = 1;i<=this.current;i++){
            ar[i-1] = i;
        }

        return ar;
    },
    plus(){
      
      let ul = document.querySelector(".ul");
      if(this.count==ul.children.length){
        return;
      }
      this.count++;
      console.log(this.count);

      for(let i = 0;i<ul.children.length;i++){
        ul.children[i].classList.remove("gray");
      }
      ul.children[this.count-1].classList.add("gray");
     
    },
    minus(){
        let ul = document.querySelector(".ul");
      if(this.count== 1){
        return;
      }
      this.count--;
      console.log(this.count);
      for(let i = 0;i<ul.children.length;i++){
        ul.children[i].classList.remove("gray");
      }
      ul.children[this.count-1].classList.add("gray");

    }
    
    },
  };
  </script>
  
  <style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}
.btn{
    pointer-events: none;
}
.gray{
    background-color: #ccc;
}
.pagination{
    display: flex;
    list-style: none;
}

li {
  cursor: pointer;
  padding: 10px;
  margin: 0 2px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  color: #333;
}


  

  
 
  

  </style>
  