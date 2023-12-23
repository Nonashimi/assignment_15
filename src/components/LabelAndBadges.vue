<template>
    <div class="all" @click="clickOn">
        <div class="bd"><i class="fa-solid fa-basket-shopping"></i>   <div class="badge">{{ value }}</div></div>
      
    </div>
</template>


<script>
export default{
    props:{
        value:{
            value:String,
            default:"0"
        }
        ,label:String,

    }
    ,
    data(){
        return{
            data:"",
        }
      
    },
    methods:{
        clickOn(){
        }
    }
}

</script>

<style scoped>
.all{
    font-size: 30px;
    font-family: 'Roboto', sans-serif;
    position: relative;
   
}
.bd{
    position: relative;
 width:30px;
}
.badge{
    font-size: 16px;
    position: absolute;
    background-color: rgb(77, 47, 47);
    color: #fff;
    padding: 2px 7px;
    border-radius: 50px;
    top: -10px;
    right:-20px;
}

</style>