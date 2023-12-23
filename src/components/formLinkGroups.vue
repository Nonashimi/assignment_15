<template>
    <div class="link-groups">
      <div v-for="(group, groupIndex) in linkGroups" :key="groupIndex" class="link-group">
        <h2>{{ group.title }}</h2>
        <ul>
          <li v-for="(item, index) in group.links" :key="index">
            <router-link :to="item.route" active-class="active">
              {{ item.text }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        linkGroups: [
          {
            title: "Group 1",
            links: [
              { text: "Home", route: "/" },
              { text: "About", route: "/about" },
            ],
          },
          {
            title: "Group 2",
            links: [
              { text: "Contact", route: "/contact" },
              { text: "Services", route: "/services" },
            ],
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .link-groups {
    display: flex;
  }
  
  .link-group {
    margin-right: 20px;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    margin-bottom: 10px;
  }
  
  a {
    text-decoration: none;
    color: #333;
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  .active {
    font-weight: bold;
  }
  </style>
  