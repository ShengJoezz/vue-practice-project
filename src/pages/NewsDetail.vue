<template>
    <div class="container">
      <div class="content-box">
        <!-- 标题 -->
        <h1 class="page-title">新闻详情</h1>
        
        <!-- 动态展示的名称 -->
        <p class="description">您正在查看的新闻名称是：</p>
        <span class="name-text">{{ route.query.name || '未提供新闻名称' }}</span>
        
        <!-- 额外的描述 -->
        <p class="extra-info">
          这是一个示例新闻页面，您可以在此处查看新闻的详细信息。如果您希望返回主页，请点击下面的按钮。
        </p>
        
        <!-- 返回按钮 -->
        <router-link to="/home" class="back-button">返回主页</router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  const route = useRoute();
  
  // 打印查询参数，检查是否正确解析
  console.log(route.query);
  </script>
  
  <style scoped>
  /* 布局容器：居中对齐 */
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* 使内容在视口垂直居中 */
    background-color: #f0f4f8; /* 浅灰色背景 */
  }
  
  /* 内容框：背景、内外边距和圆角 */
  .content-box {
    padding: 30px 50px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
    text-align: center;
    max-width: 500px;
  }
  
  /* 页面标题 */
  .page-title {
    font-size: 28px;
    color: #2c3e50;
    margin-bottom: 20px;
  }
  
  /* 描述文本 */
  .description {
    font-size: 16px;
    color: #7f8c8d;
  }
  
  /* 显示名字的文本：大号字体，醒目的颜色 */
  .name-text {
    font-size: 24px;
    font-weight: bold;
    color: #3498db; /* 蓝色字体 */
    margin: 10px 0;
  }
  
  /* 额外的信息 */
  .extra-info {
    font-size: 14px;
    color: #95a5a6;
    margin-top: 20px;
    margin-bottom: 30px;
    line-height: 1.5;
  }
  
  /* 返回主页按钮 */
  .back-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    text-decoration: none;
    border-radius: 6px;
    transition: background-color 0.3s ease;
  }
  
  .back-button:hover {
    background-color: #2980b9;
  }
  
  /* 响应式设计 */
  @media (max-width: 600px) {
    .content-box {
      padding: 20px 30px;
    }
  
    .page-title {
      font-size: 24px;
    }
  
    .name-text {
      font-size: 20px;
    }
  }
  </style>
