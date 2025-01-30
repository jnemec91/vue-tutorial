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
import getPosts from "@/composables/getPosts.js";
import PostList from '@/components/PostList.vue'

export default {
  name: 'HomeView',
  components: {PostList},
  setup() {

    const showPosts = ref(true)
    const { posts, error, load } = getPosts()

    load('http://localhost:3000/posts')

    return {
      posts, showPosts, error
    }
  },
}
</script>
