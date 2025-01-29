<template>
    <h2>Job details</h2>
    <p>The job id is: {{ id }}</p>
</template>

<script>
export default {
  name: 'JobDetailsView',
  props: ['id'],
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
