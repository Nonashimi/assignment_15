<template>
<div class="">
    <div class="img" :style="{color:color , fontSize:size}" v-html="getIcons()">
    </div>
</div> 
</template>

<script>
export default{
    props:{
        size:{
          type:String,
          default:"20px"
        },
        color:{
            type:String,
            default:"gray",
        },
        iconType:String,
        
    },
    data(){
        return{
            icon:` <i class="fa-solid fa-compact-disc"></i>`,
            date: `<i class="fa-solid fa-calendar-days"></i>`,
            clock: `<i class="fa-solid fa-clock"></i>`,
           hippo:`<i class="fa-solid fa-hippo"></i>`
 
        }
    },
    methods:{
        getIcons(){
            switch (this.iconType) {
        case "icon":
          return this.icon;
        case "date":
          return this.date;
        case "clock":
          return this.clock;
        case "hippo":
          return this.hippo;
        default:
          return this.icon;
      }
        }
    }
}
</script>

<style scoped>
.red{
    color: red;
}

</style>