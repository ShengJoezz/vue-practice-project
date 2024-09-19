<script setup lang="ts">
import useSum from './hooks/useSum';
import useDogs from './hooks/useDogs';
//数据
let {dogPhotoList,addDogPhoto}=useDogs()
let {sum,Add} = useSum()

//方法


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
