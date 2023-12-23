<template>
    <div class="navigation">
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <router-link :to="item.route" active-class="active">
            {{ item.text }}
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          { text: "Home" },
          { text: "About"},
          { text: "Contact"},
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .navigation {
    background-color: #b9b9b9;
    padding: 10px;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }
  
  li {
    margin-right: 20px;
  }
  
  a {
    text-decoration: none;
    color: #fff;
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  .active {
    font-weight: bold;
  }
  </style>
  