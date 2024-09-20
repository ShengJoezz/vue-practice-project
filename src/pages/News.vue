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

])
</script>

<style scoped>
</style>