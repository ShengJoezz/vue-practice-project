<template>
  <h1>joe的第一个vue-router项目</h1>
 
  <nav>
    <RouterLink to="/Home">主页</RouterLink>
    <RouterLink to="/News">新闻</RouterLink>
    <RouterLink to="/About">关于</RouterLink>
  </nav>

  <div class="box">
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
import { RouterView,RouterLink } from 'vue-router';

// 这里可以添加您的逻辑
</script>

<style scoped>
h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
}

a {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  padding: 10px 15px;
  border: 2px solid #007bff;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

a:hover {
  background-color: #007bff;
  color: white;
}

.box {
  background-color: #e0f7fa; /* 浅蓝色背景 */
  border: 1px solid #b2ebf2; /* 边框颜色 */
  border-radius: 10px; /* 圆角 */
  padding: 20px; /* 内边距 */
  text-align: center; /* 文字居中 */
  margin: 20px auto; /* 上下外边距，左右居中 */
  width: 80%; /* 宽度 */
  max-width: 600px; /* 最大宽度 */
}
</style>