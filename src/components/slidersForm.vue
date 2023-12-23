<template>
<input :type="type" :min="min" :max ="max" :value = "value" @change="setData">
</template>


<script>
export default{
    props:{
      type:{
        type:String,
        default:"range"
      },
      max:{
        max:String,
        default:"100"
      },
      min:{
        min:String,
        default:"0"
      }
      ,
      value:{
        value:String,
        default:"10"
      }
    },
    data(){
      return{
        data:"",
      }
    },
     methods:{
        setData(){
          this.data = this.value;
        }
     }
}
</script>

<style>

</style>