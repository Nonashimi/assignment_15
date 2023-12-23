<template>
    <div class="divider" :style="{ backgroundColor: `${bacColor}` }"></div>
  </template>
  <script>
 export default{
    props:{
        bacColor:{
            type:String,
            default:"#ccc"
        }
    }
 }

</script>

  <style scoped>
  .divider {
    height: 1px;
    margin: 10px 0;
  }
  </style>