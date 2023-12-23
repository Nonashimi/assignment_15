<template>
<div class="block">
    <div class="flex">
        <label :for="emailId">{{ label }}</label>
        <div class="status">{{assept}}</div>
    </div>
<input :type="type" class="emailInput" :placeholder="placeholder" :id ="emailId" v-model="value" @input="assets">
</div>
</template>

<script>
export default{
    props:{
        type:{
            type:String,
            default:"text",
        },
        label: String,
        placeholder:String,
    },
    data(){
      return{
        assept :"",
      }
    },
    computed: {
      emailId() {
        return `input-${Math.random().toString(36).substr(2, 9)}`;
      },
    },
    methods:{
       assets(){
        let stat = document.querySelector(".status");
        if(this.value.length == 0){
            this.assept = "";
        }else if(this.value.includes("@")){
            this.assept = "Assept";
            stat.classList.add("green");
            stat.classList.remove("red");

        }else{
            this.assept = "Dont have ''@''";
            stat.classList.remove("green");
            stat.classList.add("red");
        }
       }
    }

}

</script>

<style scoped>

.flex{
    display: flex;
    gap: 10px;
    padding: 5px 0;
}
.green{
    color: green;
}
.red{
    color: red;
}

.block{
    font-family: 'Roboto', sans-serif;
    border-bottom: 1px solid gray;
    padding-bottom: 10px;
}
.emailInput{
    border: none;
    font-size: 20px;
    outline: none;
}
</style>