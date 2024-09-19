<template>
    <ul>
        <li v-for="book in booklist" :key="book.id">{{ book.name }}</li>
    </ul>
</template>

<script setup lang="ts">
import { type BookList } from '@/type/bookitem';
import {ref,reactive} from 'vue'

defineProps({booklist:Array})
</script>

<style scoped>
</style>