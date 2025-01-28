<template>
  <h1>{{title}}</h1>
  <img alt="Vue logo" src="./assets/logo.png">
  <br>
  <!-- <input type="text" ref="name">
  <button @click="handleClick">click me</button> -->
  <div v-if="showModal">
    <ModalTest @close-modal="toggleModal">
      <template v-slot:links>
        <p>This is a named slot</p>
        <a href="https://github.com/jnemec91">Github</a><br>
        <a href="https://jnemec91.github.io/#contact">Contact</a>
      </template>
      <!-- <h1>This is a slot</h1>
      <p>This is also a slot</p> -->
    </ModalTest>
  </div>
  <br>
  <button @click="toggleModal">Open Modal</button>
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
      header: 'This is a header',
      text: 'This is a really nice marketing text!',
      showModal: false,
    }
  },
  methods: {
    handleClick () {
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    toggleModal() {
      this.showModal = !this.showModal
    }
  },
}
</script>

<style>

</style>
