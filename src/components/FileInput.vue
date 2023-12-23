<template>
<div class="flex">
<div class="">Choose File:</div>
<input type="file" class="file" @change="FileChange">
</div>
<img src="" id = "img" alt="">


</template>


<script>
export default{
   data(){
    return{
        filesrc:"",
    };
   },
   methods:{
    FileChange(e){
     const file = e.target.files[0];
     console.log(file);
     if(file){
          document.getElementById('img').src =`C:/Users/Олжас/Pictures/${file.name}`;
      
     }

    }
   }

}

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
.file{
    margin-top: 3px;
}
#img{
    width: 100px;

}

</style>