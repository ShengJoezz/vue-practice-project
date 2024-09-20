<template>
    <li>{{ name,data }}</li>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
defineProps({name:String,data:Number})

</script>

<style scoped>
</style>