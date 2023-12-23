<template>
    <div>
      <button @click="toggleDrawer">Toggle Drawer</button>
  
      <div v-show="isDrawerOpen" class="drawer">
        <p>This is the content of the drawer</p>
        <button @click="closeDrawer">Close Drawer</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDrawerOpen: false,
      };
    },
    methods: {
      toggleDrawer() {
        this.isDrawerOpen = !this.isDrawerOpen;
      },
      closeDrawer() {
        this.isDrawerOpen = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .drawer {
    position: fixed;
    top: 0;
    right: 0;
    width: 250px;
    height: 100%;
    background-color: #f0f0f0;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
    padding: 20px;
    z-index: 999;
    overflow-y: auto;
  }
  </style>
  