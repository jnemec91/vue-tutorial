<template>
  <div class="home">
    <h2>Home</h2>
    <h3>Refs</h3>
    <p>{{ person.name }} - {{ person.age }}</p>
    <button @click="updatePerson">Update person</button>
    <h3>Reactive</h3>
    <p>{{ another.name }} - {{ another.age }}</p>
    <button @click="updateAnotherPerson">Update another person</button>
  </div>

</template>

<script>
// @ is an alias to /src
import { ref, reactive } from "vue";

export default {
  name: 'HomeView',
  setup() {
    // safer to use, still remain reactive after getting exposed to external funcs
    const person = ref({
      name: 'Jarda',
      age: 33
    })

    // reactive isnt reactive with primitive values (lol wtf), but at least you dont need to \
    // type .value when accessing the data.
    const another = reactive({
      name: 'Honza',
      age: 33
    })

    const updatePerson = () => {
      person.value.age++
    }

    const updateAnotherPerson = () => {
      another.age++
    }    

    return {
      person, updatePerson, another, updateAnotherPerson
    }
  },
}
</script>
