/* eslint-disable */
<template>
    <h1>jobs</h1>
    <div class="job" v-for="job in jobs" :key="job.id">
      <router-link :to="{ name: 'JobDetails', params: { id:job.id }}"><h2>{{ job.id }}:{{ job.title }}</h2></router-link>
    </div>

</template>

<script>
export default {
  name: 'JobListView',
  data () {
    return {
      jobs: [
        { title: 'designer', id: 1, details: 'lorem' },
        { title: 'developer', id: 2, details: 'lorem' },
        { title: 'administrator', id: 3, details: 'lorem' }
      ]
    }
  }
}

</script>

<style>
.job h2{
  cursor: pointer;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  color: #444;
  background: #f4f4f4;
}
.job h2:hover{
  background: #ddd;
}
.job a{
  text-decoration: none;
}
</style>
