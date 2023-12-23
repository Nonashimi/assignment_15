<template>
    <aside class="sidebar">
      <ul>
        <li v-for="(item, index) in menuItems" :key="index" @click="handleMenuItemClick(index)">
          {{ item.label }}
        </li>
      </ul>
    </aside>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuItems: [
          { label: 'Home', route: '/' },
          { label: 'About', route: '/about' },
          { label: 'Services', route: '/services' },
          { label: 'Contact', route: '/contact' },
        ],
      };
    },
    methods: {
      handleMenuItemClick(index) {
        console.log('Clicked on:', this.menuItems[index]);
      },
    },
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 200px;
    height: 100%;
    background-color: #333;
    color: #fff;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  li:hover {
    background-color: #555;
  }
  </style>
  