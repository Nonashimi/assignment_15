<template>
<div class="proggressBar">
    <div class="bar" :value = "value" :style="{width: `${value}`}"></div>
</div>
<span>{{ value }}</span>
</template>

<script>
export default{
    props:{
        value:{
            type:String,
            default:"30%"
        },
        label:String,

    }
    ,data(){
        return{
            progress:20,
        }
    }
    ,methods:{
    changeProggress(){
         if (this.progress < 100) {
        this.progress += 10;
      }
    }
    }
}

</script>

<style scoped>
.proggressBar{
    height: 30px;
    position: relative;
    width:500px;
    border: 1px solid gray;
}
.bar{
    background-color: aqua;
    height: 30px;
    width:0;
    transition: all .5s;
}

</style>