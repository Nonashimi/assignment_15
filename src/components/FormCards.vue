<template>
<div class="card">
<div class="title">{{ title }}</div>
<div class="subtitle">{{ subtitle }}</div>
<div class="text">{{ text }}</div>
</div>
</template>

<script>
export default{
    props:{
        title:String,
        subtitle:String,
        text:{
            text:String,
            default:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae dolor magni libero quas! Praesentium voluptate quisquam consequuntur recusandae tempora accusamus nemo mollitia illum eius, excepturi laudantium aspernatur,doloribus facere id.",
        }
    },
    data(){

    },
    methods:{

    }
}
</script>

<style scoped>
.card{
    width:500px;
    padding: 15px 20px;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    border: 1px solid rgb(172, 168, 168);
    border-radius: 4px;
}
.title{
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 4px;
}
.subtitle{
    color: rgb(180, 176, 176);
    margin-bottom: 4px;
}
.text{
    font-size: 16px;
    color: rgb(75, 73, 73);
}
</style>