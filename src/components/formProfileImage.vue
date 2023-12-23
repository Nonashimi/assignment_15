<template>
<div class="">
<img :src = "src" :style="{width: width}" alt="" class = "profile">
</div>
</template>

<script>
export default{
    props:{
        src:{
            type:String,
            default:""
        },
        width:{
     type:String,
     default:"50px"
        }
    }
}

</script>

<style scoped>
.profile {
    border-radius:50px;
    
}

</style>