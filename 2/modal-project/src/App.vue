<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <br>
  <input type="text" ref="name">
  <button @click="handleClick">click me</button>
  <h1>{{title}}</h1>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  border-bottom: 4px solid #2c3e50;
}
</style>
