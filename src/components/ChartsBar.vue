<template>
<div class="bar"  >
    <div class="bar_tip" v-for="item in arr" :key = "item" :style ="{ height: `${item}%`  }"></div>
</div>
</template>

<script>
export default{
    props:{
        arr:Array,
    },
    data(){
      return{
       color:["red","green","purple","blue","gray","yellow","pink","black","orange","brown"]
      }
    
    },
    mounted(){
     this.transform();
    },
    methods:{
        transform(){
            let bar = document.querySelector(".bar");
            for(let i = 0;i<bar.children.length;i++){
                let li = bar.children[i];
                li.style.backgroundColor =this.color[i];
                li.style.left=`${(i)*bar.scrollWidth/10+7}px`;
                console.log("sdfgh");
            }
        }
     }
    }

</script>

<style scoped>
.bar{
    position: relative;
    width: 400px;
    height: 200px;
    border-left: 3px solid gray;
    border-bottom: 3px solid gray;
    margin: 10px 25px;

}
.bar_tip{
    width:30px;
    background-color: rgb(33, 224, 33);
    position: absolute;
    bottom: 0;
}

</style>