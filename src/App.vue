<script setup lang="ts">
import bookList from './components/bookitem.vue'
import { ref }from 'vue'
const list = ref([
  {name:'sing',pages:100,author:'joe',id:1},
  {name:'song',pages:200,author:'bridge',id:2}
]
)
</script>

<template>
<bookList :booklist="list" />
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
</style>
