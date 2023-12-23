<template>
<div class="flex">
<label for="datetimePicker">{{ label }}</label>
  <input :type="type" id="datetimePicker" v-model ="selectedDate" @change="getDate">
</div>
</template>

<script>
export default{ 
    props:{
        type: {
        type: String,
        default: "date",
      },
      label:String,
    },
    data(){
        return{
            selectedDate: this.getFormattedToday(),
            date:"",
        }
    },
methods:{
    getFormattedToday() {
      const today = new Date();
      const year = today.getFullYear();
      const month = (today.getMonth() + 1).toString().padStart(2, '0'); 
      const day = today.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    },
    getDate(e){
        this.date = e.target.value;
    }
  }
}


</script>

<style scoped>

.flex{
    gap: 10px;
    display:flex;
    border-bottom: 1px solid gray;
    padding-bottom: 10px;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
}

</style>