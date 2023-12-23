<template>
    <div class="carousel">
    <div class="left btn" @click="clickLeft">
        <i class="fa-solid fa-angle-left"></i>
    </div>  
    <div class="images">
  
        <div class="img" :style="{ transform: `translateX(-${count * 530}px)` }">
    <img v-for="(item,index) in src"    :src="item" alt="" :key = "index">
</div>
    </div>

<div class="right btn" @click="clickRight">
    <i class="fa-solid fa-chevron-right"></i>
</div>


    </div>
</template>

<script>
export default{
    props:{
       src:{
        type:Array,
        default: ()=> ["https://wallpapers.com/images/hd/undertale-characters-having-fun-ghg267qhz2bps6gv.webp",
            "https://wallpapers.com/images/hd/undertale-chara-vs-undyne-k94h3e9vttj6cmk3.webp",
           "https://wallpapers.com/images/hd/undertale-black-and-white-pixel-characters-bvtcwkj5usixy10v.webp"],
       }
    },
    data(){
        return{
            count:0
        }
    },
    methods:{
        clickLeft() {
      if (this.count > 0) {
        this.count--;
      } else {
        this.count = this.src.length - 1;
      }
    },
    clickRight() {
      if (this.count < this.src.length - 1) {
        this.count++;
      } else {
        this.count = 0;
      }
    },
    }
}

</script>

<style scoped>

img{
    margin-right: 30px;
    max-width: 500px;
}
.event{
    pointer-events: none;
}
.carousel{
    margin-left: 50px;
    position: relative;

}
.img{
    display: flex;
 
   transition: all .3s;

}
.images{
    max-width:500px ;
    overflow: hidden;

}
.tranform{
    transform: translateX(530px);
}
.btn{
    background-color: rgb(156, 153, 153);
    width:30px;
    padding: 20px 20px;
    border-radius: 50px;
    text-align: center;
    font-size: 25px;
    color: #fff;
    position: absolute;
    top: 40%;
    cursor: pointer;
    z-index: 3;

}
.left{
    left: -34px;
}
.right{
    left: 460px;
}


</style>