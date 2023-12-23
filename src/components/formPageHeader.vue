<template>
<div class="">
<header class ="header">
    <div class="container">
        <div class="icon">
        <formIconsVue size = "50px" color  ="purple" iconType ="hippo"></formIconsVue>
      <div class="iconName">Hippo</div>
    </div>
<div class="nav">
 <div class="about"><a href="">About</a></div>
 <div class="program"><a href="">Program</a></div>
 <div class="works"><a href="">Works</a></div>
 <div class="footer"><a href="">Footer</a></div>
 <LabelAndBadges class="lll" ></LabelAndBadges>
</div>
    </div>
   
</header>
</div>

</template>

<script>
import formIconsVue from './formIcons.vue';
import LabelAndBadges from './LabelAndBadges.vue';
export default{
    props:{

    },
    data(){

    },
    components:{
     formIconsVue,
     LabelAndBadges
    }
}

</script>

<style scoped>
.header{
    background-color: antiquewhite;
    
}
.container{
    display: flex;
    gap: 150px;
    width: 1200px;
    margin: 0 auto;
    padding: 10px 0;
}
.icon{
    display: flex;
   gap: 20px;
}
.lll{
    padding: 0;
    float: right;
    margin: 0 0 0 150px;
}
.iconName{
    color: rgb(107, 9, 107);
    font-size: 30px;
    font-weight: 600;
    margin-top: 6%;
}
.nav{
    display: flex;
    gap: 70px;
    color: rgb(140, 135, 135);
    font-size: 25px;
    margin-top: 1.2%;

}
.nav div a{
    text-decoration: none;
    color: rgb(140, 135, 135);

}
</style>