import { ref } from "vue";

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
        try {
          let data = await fetch('http://localhost:3000/posts')
          if (!data.ok) {
            throw Error('No data available')
          }
          posts.value = await data.json() // this is also asynchronous
  
          return data
        }
        catch (err){
          error.value = err.message
          alert(error.value)
        }
      }
      
      return { posts, error, load }
}

export default getPosts