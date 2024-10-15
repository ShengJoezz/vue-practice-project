<template>
    <!-- 导航区 -->
    <div class="news-container">
      <h2>新闻列表</h2>
      <ul class="news-list">
        <li v-for="{ name, data, id } in news_list" :key="id" class="news-item">
            <RouterLink :to="`/News/NewsDetail?name=${name}&data=${data}&id=${id}`"><span class="news-name">{{ name }}</span></RouterLink>
          <span class="news-date">{{ formatDate(data) }}</span>
        </li>
      </ul>
    </div>
    <!-- 展示区 -->
     <div class="news-content">
    
    <RouterView></RouterView>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { reactive } from 'vue';
  
  const news_list = reactive([
    { name: 'Fire incident', data: 20240917, id: 1 },
    { name: 'Water shortage', data: 20240916, id: 2 }
  ]);
  
  const formatDate = (dateNumber: number) => {
    const date = new Date(dateNumber);
    return date.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' });
  };
  </script>
  
  <style scoped>
  .news-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  h2 {
    color: #333;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .news-list {
    list-style-type: none;
    padding: 0;
  }
  
  .news-item {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .news-name {
    font-weight: bold;
    color: #2c3e50;
  }
  
  .news-date {
    color: #7f8c8d;
    font-size: 0.9em;
  }
  </style>