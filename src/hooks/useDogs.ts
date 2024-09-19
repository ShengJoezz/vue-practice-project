import {reactive, ref} from 'vue'
import axios from 'axios'

export default function(){
    let dogPhotoList = reactive(['https://images.dog.ceo/breeds/pembroke/n02113023_4972.jpg'])
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
      return {dogPhotoList,addDogPhoto}
}