<template>
    <div class="tabs">
      <div class="tab-buttons">
        <button v-for="(tab, index) in tabs" :key="index" @click="changeTab(index)" :class="{ active: activeTab === index }">
          {{ tab.title }}
        </button>
      </div>
      <div class="tab-content">
       {{ TabsContent }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeTab: 0,
        tabs: [
          { title: 'Tab 1', content: 'Content for Tab 1' },
          { title: 'Tab 2', content: 'Content for Tab 2' },
          { title: 'Tab 3', content: 'Content for Tab 3' },
        ],
        TabsContent:""
      };
    },
    methods: {
      changeTab(index) {
        this.TabsContent = this.tabs[index].content;
      },
    },
  };
  </script>
  
  <style scoped>
  .tabs {
    width: 60%;
    margin: auto;
  }
  
  .tab-buttons {
    display: flex;
    margin-bottom: 10px;
  }
  
  button {
    padding: 8px 16px;
    margin-right: 8px;
    background-color: #ddd;
    border: none;
    cursor: pointer;
  }
  
  button.active {
    background-color: #ccc;
  }
  
  .tab-content div {
    display: none;
  }
  
  .tab-content div.show {
    display: block;
  }
  </style>
  