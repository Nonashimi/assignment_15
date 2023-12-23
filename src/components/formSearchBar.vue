<template>
    <div class="search-bar">
      <input
        :type="type"
        v-model="searchQuery"
        :placeholder="placeholder"
        @input="handleInputChange"
      />
      <button @click="handleSearch">Поиск</button>
    </div>
    <div class="">{{ searchQuery }}</div>
  </template>
  
  <script>
  export default {
    props:{
     placeholder:String,
     type:{
      type:String,
      default:"text"
     }
    },
    data() {
      return {
        searchQuery: "",
      };
    },
    methods: {
      handleInputChange() {
        console.log("Изменение ввода:", this.searchQuery);
      },
   
    },
  };
  </script>
  
  <style scoped>
  .search-bar {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  input {
    padding: 8px;
    font-size: 16px;
  }
  
  button {
    padding: 8px 12px;
    font-size: 16px;
    cursor: pointer;
  }
  </style>
  