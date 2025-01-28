<template>
  <h1>Reaction timer</h1>
  <button class="game-button" @click="startGame" :disabled="isPlaying">Play</button>

  <GameBlock v-if="showBox" :delay="delay" @stop-timer="gameReset">
  </GameBlock>
  
  <GameResults v-if="gameEnd" :result="result">
  </GameResults>
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
  data(){
    return {
      isPlaying: false,
      gameEnd: false,
      showBox:false,
      delay: null,
      start: 0,
      result: 0
    }
  },
  methods:{
    startGame(){
      this.gameEnd = false
      this.isPlaying=true
      this.delay = 2000+Math.random()*5000
      setTimeout(() => {
        this.showBox = true
        this.start = Date.now()
      }, this.delay);
    },
    gameReset(){
      this.result = Date.now() - this.start
      this.isPlaying = false
      this.gameEnd = true
      this.showBox = false
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
.game-button{
  background-color: limegreen;
  color: #DDD;
  font-weight: bolder;
  font-size: larger;
  padding: 10px 15px;
  border-radius: 10px;
  cursor: pointer;
}
.game-button:hover{
  background-color: #DDD;
  color: limegreen;
}
.game-button:disabled{
  cursor:not-allowed;
  background-color: crimson;
}
.game-button:disabled:hover{
  color:#DDD;
}
</style>
