<template>
  <h1>{{title}}</h1>
  <img alt="Vue logo" src="./assets/logo.png">
  <br>
  <input type="text" ref="name">
  <button @click="handleClick">click me</button>
  <ModalTest />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ModalTest from './components/ModalTest.vue'

export default {
  name: 'App',
  components: {
    ModalTest
  },
  data() {
    return{
      title : 'My first vue app',
    }
  },
  methods: {
    handleClick () {
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    }
  }
}
</script>

<style>

</style>
