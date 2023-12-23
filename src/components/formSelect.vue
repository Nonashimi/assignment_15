<template>
<label for="Choose" >{{ label }}</label>
<select name="" id="" v-model="choise" @change="getDate">
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    <option value="D">D</option>
    <option value="E">E</option>
</select>


</template>
<script>
export default{
    props:{
       label:String,
       value:String,
    },
data(){
    return{
      choise:"",  

    }
},
methods:{
    getDate(){
        console.log(this.choise);
    }
}



}

</script>



<style>


</style>