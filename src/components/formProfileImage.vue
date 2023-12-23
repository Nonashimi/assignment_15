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
            default:"https://thicc-af.mywaifulist.moe/waifus/yuta-okkotsu-sorcery-fight/3DQkg87cFXIigaUzRunm7v3bLXIWTc9BLePplwFu.jpg?class=thumbnail" 

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
    border-radius:50%;
    
}

</style>