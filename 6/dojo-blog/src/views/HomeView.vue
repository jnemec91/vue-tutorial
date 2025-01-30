<template>
  <div class="home">
    <h2>Home</h2>
    <h3>Computed</h3>
    <input type="text" v-model="search">
    <p>search term: {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      <p>{{ name }}</p>
    </div>
    <button @click="stopWatching">Stop watching</button>
    <button @click="addName">Add name</button>
  </div>

</template>

<script>
// @ is an alias to /src
import { ref, computed, watch, watchEffect } from "vue";

export default {
  name: 'HomeView',
  setup() {
    const names = ref(['jarda', 'honza', 'pepa'])
    const search = ref('')
    
    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    // watch function looks up variable in first parameter and watches for the changes,
    // on change, it runs the code inside second parameter
    const stopWatch = watch(search, () => {
      console.log('watch func ran')

    })

    // the difference to watch is that this is ran initially, then the function watches ?every? variable used in func
    // that is inputed as parameter 
    const stopEffect = watchEffect(() => {
      console.log('watchEffect func ran', search.value)
    })
    
    // doesnt look like it works with whole arrays (names.value), but can detect change in length or maybe an output of func
    // but it works with multiple values 
    const watchMultiple = watchEffect(() => {
      console.log('this is a test if im watching multiple vals', search.value, names.value.length)
    })

    // watch and watchEffect functions return a func that when ran, stop them from watching.
    const stopWatching = () => {
      stopWatch()
      stopEffect()
    }

    const addName = () => {
      names.value.push(search.value)
    }

    return {
      names, search, matchingNames, stopWatching, watchMultiple, addName
    }
  },
}
</script>
