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
   default:"https://ichef.bbci.co.uk/images/ic/640x360/p06vcwwr.jpg"
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