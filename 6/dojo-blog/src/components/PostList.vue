<template>
    <h2>Post list</h2>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id">
            <SinglePost :post="post"></SinglePost>
        </div>
    </div>
</template>

<script>
import SinglePost from '@/components/SinglePost.vue'
import { onUpdated, onMounted, onUnmounted } from 'vue';

export default {
    props: ['posts'],
    components: {SinglePost},
    setup(props){
        // console.log(props.posts)
        onMounted(() => console.log('component mounted'))
        onUnmounted(() => console.log('component unmounted'))
        onUpdated(() => console.log('component updated'))
        return {
            props
        }
    }
}
</script>

<style>

</style>