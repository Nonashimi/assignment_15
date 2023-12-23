<template>
<div class="flex">
    <formIconsVue size="35px" color="black"></formIconsVue>
<div class="data">
    <div class="title">{{ title }}</div>
    <div class="text">{{ text }}</div>
</div>

</div>
</template>

<script>
import formIconsVue from './formIcons.vue';
export default{
  components:{
    formIconsVue
  }
  ,
  props:{
    title:String,
    text:String
  },
  methods:{

  }
}

</script>

<style scoped>
.flex{
    display: flex;
    gap:5px;
}
.title{
    font-size: 20px;
}
.text{
    font-size: 14px;
    color: gray;
}

</style>