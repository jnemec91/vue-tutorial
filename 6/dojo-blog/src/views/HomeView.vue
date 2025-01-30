<template>
  <div class="home">
    <h2>Home</h2>
    <PostList v-if="showPosts" :posts="posts"></PostList>
    <button @click="showPosts = !showPosts">toggle posts</button>
    <button @click="posts.pop()">Delete a post</button>
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

    fetch('http://localhost:3000/posts')
    .then(response => response.json())
    .then(data => posts.value = data)
    .catch(err => alert(err))
    return {
      posts, showPosts
    }
  },
}
</script>
