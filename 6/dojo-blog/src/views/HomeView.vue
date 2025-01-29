<template>
  <div class="home">
    <h2 @click="handleClick">Home</h2>
    My name {{ name }} and my age is {{ age }}
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  setup() {
    console.log('setup')
    let name = 'jarda'
    let age = 33

    const handleClick = () => {
      console.log('Youve killed me!')
    }

    return {
      name, age, handleClick
    }
  },
}
</script>
