<template>
    <div class="">
        <img :src="src" alt="" :style="{width: width}">

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
            default:"200px"
        }
    }
}

</script>


<style scoped>


</style>