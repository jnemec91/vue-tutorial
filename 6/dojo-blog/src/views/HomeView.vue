<template>
  <div class="home">
    <h2>Home</h2>
    <h3>Computed</h3>
    <input type="text" v-model="search">
    <p>search term: {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      <p>{{ name }}</p>
    </div>

  </div>

</template>

<script>
// @ is an alias to /src
import { ref, computed } from "vue";

export default {
  name: 'HomeView',
  setup() {
    const names = ref(['jarda', 'honza', 'pepa'])
    const search = ref('')

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    return {
      names, search, matchingNames
    }
  },
}
</script>
