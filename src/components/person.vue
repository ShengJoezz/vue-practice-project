<template>
<h1>姓氏:{{FirstName}}</h1>
<br>
<h1>名字:{{LastName}}</h1>
<br>
<h1>全名:{{FullName}}</h1>
<button @click="changeFullName">改变名字</button>
</template>

<script setup>
import {ref,computed} from 'vue'
const FirstName = ref('Zhang');
const LastName = ref('San');
let FullName = computed( ( )=>{
    return FirstName.value + LastName.value
})
function changeFullName(){
  FirstName.value = 'joe'
}
</script>

<style scoped>
</style>
