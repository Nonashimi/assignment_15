<template>

<div class="block">
    <label for="" style="margin-right: 30px;">{{ label }}</label>
<textarea name="" id="" cols="30" rows="10" v-model= "textarea"></textarea>
</div>

</template>

<script>
export default{
    props:{
        label:String,
        text:String
    }
    ,data(){
        return{
            textarea:"",
        }
    },
    methods(){

    }
}

</script>

<style scoped>
.block{
    display: inline-block;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
}
</style>