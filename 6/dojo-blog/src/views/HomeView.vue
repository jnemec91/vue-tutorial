<template>
  <div class="home">
    <h2>Home</h2>
    <div v-if="!error">
      <div v-if="posts.length">
        <PostList v-if="showPosts" :posts="posts"></PostList>
        <button @click="showPosts = !showPosts">toggle posts</button>
        <button @click="posts.pop()">Delete a post</button>
      </div>
      <div v-else>
        <h3>Loading...</h3>
      </div>
    </div>
    <div v-else>
        {{ error }}
    </div>

  </div>

</template>

<script>
// @ is an alias to /src
import { ref } from "vue";
import PostList from '@/components/PostList.vue'

export default {
  name: 'HomeView',
  components: {PostList},
  setup() {
    const posts = ref([])
    const showPosts = ref(true)
    const error = ref(null)

    // fetch('http://localhost:3000/posts')
    // .then(response => response.json())
    // .then(data => posts.value = data)
    // .catch(err => alert(err))

    // loading with async / await
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
    posts.value = load()

    return {
      posts, showPosts, error
    }
  },
}
</script>
