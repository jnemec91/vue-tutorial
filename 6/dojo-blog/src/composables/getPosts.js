import { ref } from "vue";

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)

    const load = async (url) => {
        try {
          let data = await fetch(url)
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