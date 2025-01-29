<template>
  <div class="home">
    <h2 @click="handleClick">Home</h2>
    <p ref="p">My name {{ name }} and my age is {{ age }}</p>
  </div>
  <input type="text" v-model="name">
  <button @click="age++">Age++</button>
</template>

<script>
// @ is an alias to /src
import { ref } from "vue";

export default {
  name: 'HomeView',
  setup() {
    const p = ref(null)
    console.log(p, p.value)

    console.log('setup')
    // ref makes variable reactive (vue reacts to their change and updates dom)
    let name = ref('jarda')
    let age = ref(33)

    // when assigning to the refs, use .value
    age.value += 1

    const handleClick = () => {
      console.log(p, p.value)
      p.value.textContent = 'Button clicked'
    }

    return {
      name, age, handleClick, p
    }
  },
}
</script>
