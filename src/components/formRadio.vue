<template>
<div class="all">
<input :type="type" name="" id="" value="GGG" v-model="data" @click="grt">
<span>GGG</span>
<input :type="type" value = "Olzhas" v-model="data">
<span>Olzhas</span>
</div>
</template>

<script>
export default{
    props:{
        type:{
            type:String,
            default:"radio"
        },
        text:String,
        value:String,
    },
    data(){
        return{
            data:"",
        }
    }
    ,methods:{
    }
}

</script>

<style>
.all{
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
}
</style>