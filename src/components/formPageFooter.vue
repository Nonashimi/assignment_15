<template>
    <footer>
      <div class="footer-content">
        <div class="icon">
        <formIcons size = "50px" color  ="purple" iconType ="hippo"></formIcons>
      <div class="iconName">Hippo</div>
    </div>
        <div class="text">Assignment 15 Footer page</div>
        <div class="fff">Abouit someTHing :></div>
      </div>
    </footer>
  </template>
  
  <script>
  import formIcons from './formIcons.vue';
  export default {
    components:{
        formIcons
    }
  };
  </script>
  
  <style scoped>
  footer {
    background-color: antiquewhite;
    color: #fff;
   margin-bottom: 30px;
  
  }
  .footer-content{
    display: flex;
gap: 150px;
color: rgb(140, 135, 135);
font-size: 30px;
padding: 20px 0;
  }
  .text, .fff{
    margin-top: 10px;

  }
  .icon{
    display: flex;
   gap: 20px;
}
.iconName{
    color: rgb(107, 9, 107);
    font-size: 30px;
    font-weight: 600;
    margin-top: 10px;

}
  
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
  

  }

  </style>
  