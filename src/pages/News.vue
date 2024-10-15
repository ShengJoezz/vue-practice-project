<template>
    <ul class="news-list">
      <li v-for="{ name, data } in news_list" :key="data" class="news-item">
        <div class="news-content">
          <RouterLink :to="`/News/detail?name=${name}&data=${data}`" class="news-name">{{ name }}</RouterLink>
          <span class="news-date">{{ formatDate(data) }}</span>
        </div>
      </li>
    </ul>
    <div>
        <RouterView></RouterView>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { reactive } from 'vue';
  
<<<<<<< HEAD
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
=======
  // 定义新闻列表数据
  const news_list = reactive([
    { name: 'Fire', data: 20240917 },
    { name: 'Water', data: 20240916 }
  ]);
  
  // 格式化日期函数
  function formatDate(date: number) {
    const str = date.toString();
    const year = str.slice(0, 4);
    const month = str.slice(4, 6);
    const day = str.slice(6, 8);
    return `${year}-${month}-${day}`;
  }
  </script>
  
  <style scoped>
  /* 容器样式 */
  .news-list {
    list-style-type: none;
    padding: 0;
    margin: 0 auto;
    max-width: 600px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  /* 列表项样式 */
  .news-item {
    padding: 16px;
    border-bottom: 1px solid #e0e0e0;
    transition: background-color 0.3s ease;
  }
  
  .news-item:last-child {
    border-bottom: none;
  }
  
  /* 列表项 hover 效果 */
  .news-item:hover {
    background-color: #f1f1f1;
  }
  
  /* 内容区域样式 */
  .news-content {
>>>>>>> c4add97787c3acb24ef5c9f329bdef2995c7b2fd
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
<<<<<<< HEAD
  .news-name {
    font-weight: bold;
    color: #2c3e50;
  }
  
  .news-date {
    color: #7f8c8d;
    font-size: 0.9em;
=======
  /* 名称样式 */
  .news-name {
    font-size: 18px;
    font-weight: 600;
    color: #333;
  }
  
  /* 日期样式 */
  .news-date {
    font-size: 14px;
    color: #888;
  }
  
  /* 添加一些响应式设计 */
  @media (max-width: 600px) {
    .news-content {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .news-date {
      margin-top: 8px;
    }
>>>>>>> c4add97787c3acb24ef5c9f329bdef2995c7b2fd
  }
  </style>