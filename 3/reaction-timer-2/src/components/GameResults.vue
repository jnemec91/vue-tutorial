<template>
    <div class="results">
       <p>Reaction time: {{ score }}ms</p>
    </div>
</template>

<script>
export default {
    name: 'GameResults',
    props: ['score']
}

</script>

<style>

</style>