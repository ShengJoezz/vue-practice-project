<script setup lang="ts">
import {reactive, ref} from 'vue'
import axios from 'axios'
//数据
let sum = ref(0)
let dogPhotoUrl = axios.get('https://dog.ceo/api/breed/pembroke/images/random')
let dogPhotoList = reactive(
  ['https://images.dog.ceo/breeds/pembroke/n02113023_4972.jpg']
)
//方法
function Add(){
  sum.value += 1
}
async function getPhotoUrl(){
  try{
  let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random');
  return result.data}
  catch(error){
    alert(error)
  }
}
async function addDogPhoto(){
  let newPhotoJson = await getPhotoUrl();
  let newPhotoUrl = newPhotoJson.message
  dogPhotoList.push(newPhotoUrl)
}
</script>

<template>
<h1>现在的数字大小:{{ sum }}</h1>
<br>
<button @click="Add">点我加一</button>
<hr>
<img v-for="(dog,index) in dogPhotoList" :src="dog" :key="index">
<br>
<button @click="addDogPhoto">增加一只小狗</button>

</template>

<style scoped>

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

img{
  height: 100pt;
}
</style>
