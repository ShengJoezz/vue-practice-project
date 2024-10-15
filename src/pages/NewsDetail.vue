<template>
    <ul>
    <li>题目:{{ route.query.name}}</li>
    <li>日期:{{ route.query.data}}</li>
    <li>id:{{ route.query.id}}</li>
    </ul>
</template>

<script setup>
import {reactive} from 'vue'
import { useRoute } from 'vue-router';
const route = useRoute();
console.log('@',route);
</script>

<style lang="css" scoped>
</style>