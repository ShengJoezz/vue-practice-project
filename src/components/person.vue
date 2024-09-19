<template>
    <div>
        学生姓名:{{person.name}}
        <br>
        学生年龄:{{ person.age }}
        <hr>
        学生学号:{{ person.id }}
        <button @click="changeName">anxia</button>
        <input type="text" :text=id>
</div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import  { type personInter } from '@/type';
let person:personInter = ref<personInter>({
   name :'joe',
   age : 23 ,
   id : 'M202471934'
})
function changeName(){

}
const id = ref(2)
</script>

<style scoped>
</style>