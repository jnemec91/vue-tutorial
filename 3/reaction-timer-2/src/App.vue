<template>
  <h1>Reaction timer</h1>
  <button @click="startGame" :disabled="isPlaying">Start</button>
  <GameBlock v-if="isPlaying" :delay="delay"/>
  <GameResult/>
  </template>

<script>
import GameBlock from './components/GameBlock.vue'
import GameResult from './components/GameResults.vue'

export default {
  name: 'App',
  components: {
    GameBlock,
    GameResult
  },
  data() {
    return {
      isPlaying:false,
      delay: null,
    }
  },
  methods: {
    startGame(){
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true
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
</style>
