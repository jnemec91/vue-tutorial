<template>
  <h1>Reaction timer</h1>
  <button @click="startGame" :disabled="isPlaying">Start</button>
  <GameBlock v-if="isPlaying" :delay="delay" @end="endGame" />
  <GameResults v-if="showResults" :score="score"/>
  </template>

<script>
import GameBlock from './components/GameBlock.vue'
import GameResults from './components/GameResults.vue'

export default {
  name: 'App',
  components: {
    GameBlock,
    GameResults
  },
  data() {
    return {
      isPlaying:false,
      delay: null,
      score: null,
      showResults:false
    }
  },
  methods: {
    startGame(){
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true
      this.showResults = false
    },
    endGame(reactionTime){
      this.score = reactionTime
      this.isPlaying = false
      this.showResults = true
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
button{
  background: #0faf87;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin:10px;
}
button:disabled{
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
