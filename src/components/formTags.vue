<template>
    <div class="tags-container">
      <div v-for="(tag, index) in selectedTags" :key="index" class="tag">
        {{ tag }}
        <button @click="removeTag(index)">×</button>
      </div>
      <input
        type="text"
        v-model="newTag"
        @keydown.enter.prevent="addTag"
        placeholder="Добавить тег"
      />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedTags: [],
        newTag: "",
      };
    },
    methods: {
      addTag() {
        if (this.newTag && !this.selectedTags.includes(this.newTag)) {
          this.selectedTags.push(this.newTag);
          this.newTag = "";
        }
      },
      removeTag(index) {
        this.selectedTags.splice(index, 1);
      },
    },
  };
  </script>
  
  <style scoped>
  .tags-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  
  .tag {
    background-color: #007bff;
    color: #fff;
    padding: 4px 8px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .tag button {
    margin-left: 8px;
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
  }
  </style>
  