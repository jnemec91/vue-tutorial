<template>
  <div>
    <div class="rectangle" @click="stopTimer">
      <p>Click me</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameBlock',
  props: ['delay'],
  methods:{
    stopTimer() {
      this.$emit('stop-timer')
      console.log('emiting stop timer')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .rectangle{
    width: 500px;
    height: 300px;
    background-color: limegreen;
    color: #DDD;
    font-size: 32px;
    text-align: center;
    margin: 20px auto;
    border-radius: 10px;
  }
  .rectangle > p{
    padding: 25%;
    cursor: pointer;
  }
</style>
