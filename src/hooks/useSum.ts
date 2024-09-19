import {reactive, ref} from 'vue'

export default function(){
let sum = ref(0)

function Add(){
    sum.value += 1
  }
return {sum,Add}
}