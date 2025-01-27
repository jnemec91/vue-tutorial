<template>
  <div class="backdrop hidden">
    <div class="modal hidden">
        <h1>This is a modal</h1>
        <hr>
        <p>Modal content</p>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
  .modal{
    width: 400px;
    height: 300px;
    background-color: white;
    border-radius: 10px;
    position: absolute;
    /* position modal in middle of the screen */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

  }
  .backdrop{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
  }
  .hidden{
    /* display: none; */
  }
  .modal h1{
    color: blue;
  }
</style>