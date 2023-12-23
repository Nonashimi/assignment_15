<template>
<div class="text" :style="{color: color , fontWeight: fontWeight , fontSize: size}">{{ label }}</div>
</template>

<script>
export default{
    props:{
        color:{
            type:String,
            default:"black",
        },
        fontWeight:{
            type:String,
            default:"500",
        },
        size:{
            type:String,
            default:"16px"
        },
        label:String
    }
}

</script>

<style>

</style>