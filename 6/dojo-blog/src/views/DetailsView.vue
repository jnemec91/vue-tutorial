<template>
    <h2>Details</h2>
    <div v-if="!error">
        <div v-for="post in posts" :key="post.id">
            <h2>{{ post. title }}</h2>
            <p>{{ post.body }}</p>
            <span v-for="tag in post.tags" :key="tag"> #{{ tag }}</span>
        </div>
    </div>
    <div v-else>
        {{ error }}
    </div>
    <button @click="this.$router.go(-1)">Back</button>
</template>

<script>
import getPosts from "@/composables/getPosts.js";

export default {
    props: ['id'],
    setup(props) {
        const {posts, error, load} = getPosts()

        load('http://localhost:3000/posts?id='+props.id)

        return {
            posts, error
        }
    }
}
</script>

<style>

</style>