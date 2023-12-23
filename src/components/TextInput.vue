<template>
    <div class="flex" 
    :id="flexId">
      <div class="text-input">
        <label :for="inputId">{{ label }}</label>
        <input
          class="textInput"
          :type="type"
          :id="inputId"
          :placeholder="placeholder"
          :value="value"
          @input="handleInput"
        />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      type: {
        type: String,
        default: "text",
      },
      label: String,
      placeholder: String,
      value: String,
    
    },
    computed: {
      inputId() {
        return `input-${Math.random().toString(36).substr(2, 9)}`;
      },
      flexId(){
        return `div-${Math.random().toString(36).substr(2, 9)}`;

      }
    },
    methods: {
      handleInput(event) {
        this.$emit("update:value", event.target.value);
      },
    },
  };
  </script>
  
  <style scoped>
  .flex{
    gap: 10px;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    border-bottom: 1px solid gray;
    padding-bottom: 10px;
  }
  
  .textInput {
    border: none;
    font-size: 20px;
    outline: none;
  }
  </style>
  