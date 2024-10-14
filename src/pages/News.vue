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
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
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
  }
  </style>