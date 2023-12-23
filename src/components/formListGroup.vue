<template>
    <div class="list-group">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="list-group-item"
        @click="selectItem(index)"
        :class="{ active: selectedIndex === index }"
      >
        {{ item }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: ["Item 1", "Item 2", "Item 3", "Item 4"],
        selectedIndex: null,
      };
    },
    methods: {
      selectItem(index) {
        this.selectedIndex = index;
      },
    },
  };
  </script>
  
  <style scoped>
  .list-group {
    width: 200px;
  }
  
  .list-group-item {
    padding: 10px;
    cursor: pointer;
    border-bottom: 1px solid #ddd;
  }
  
  .list-group-item:hover {
    background-color: #f0f0f0;
  }
  
  .list-group-item.active {
    background-color: #007bff;
    color: #fff;
  }
  </style>
  