<template>
    <ul>
        <li v-for="{name,data} in news_list">
                {{ name }}{{ data }}
        </li>
    </ul>
</template>

<script lang="ts" setup>
import xinwen from '../component/xinwen.vue'
import { reactive } from 'vue';

const news_list  = reactive([
    {name : 'fire',data:20240917},
    {name : 'water',data:20240916}

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
</style>