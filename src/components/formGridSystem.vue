<template>
    <div class="grid-container">
      <div v-for="(item, index) in items" :key="index" class="grid-item">
        {{ item }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          'Item 1',
          'Item 2',
          'Item 3',
          'Item 4',
          'Item 5',
          'Item 6',
          'Item 7',
          'Item 8',
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }
  
  .grid-item {
    background-color: #f0f0f0;
    padding: 20px;
    text-align: center;
  }
  </style>
  