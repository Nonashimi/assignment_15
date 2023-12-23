<template>
    <div class="d">
<label for="">{{ label }}</label>
<div class="flex">
    <input :type="type" @click ="getData">
<div class="">{{ text }}</div>
</div>
</div>

</template>


<script>
export default{
    props:{
        type:{
            type:String,
            default:"checkbox",
        },
        label:String,
        value:String,
        text:String,
    }
    ,data(){
        return{
            checkData:"",
        }
    }
    ,
    methods: {
       getData(e){
        console.log(this.text+" "+e.target.checked);
       }
    }
}

</script>


<style scoped>
.flex{
    display: flex;
   
}
.d{
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
}

</style>