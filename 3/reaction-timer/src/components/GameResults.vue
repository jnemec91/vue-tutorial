<template>
    <div>
        <h2>Your results are:</h2>
        <p>{{ result }}ms</p>
        <div class="results-text">
            <p v-if="result < 200">faaaaast as f boi!</p>
            <p v-else-if="result < 400">good enough!</p>
            <p v-else>You have reactions of a stoner!</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GameResults',
    props: ['result']
}
</script>

<style scoped>
    .results-text{
        font-weight: bold;
    }
</style>