<template>
  <div v-if="job">
    <h2>{{ job.title }} details</h2>
    <p>The job id is: {{ job.id }}</p>
    <p>The job detail is: {{ job.details }}</p>
  </div>
  <div v-else>
    <p>Loading job details...</p>
  </div>
  <div v-if="error">
    <h2>Something went wrong!</h2>
    <p>There was an error when fetching data from server: {{ error }}</p>
  </div>
</template>

<script>
export default {
  name: 'JobDetailsView',
  props: ['id'],
  data () {
    return {
      job: null,
      error: null
    }
  },
  mounted () {
    fetch('http://localhost:3000/jobs?id=' + this.id)
      .then(response => response.json())
      .then(data => this.job = data[0])
      .catch(err => this.error = err.message)
  }  
}
</script>

<style>

</style>
