<template>
  <div class="backdrop hidden">
    <div class="modal hidden">
        <h2>This is a modal</h2>
        <p>Modal content</p>
    </div>
  </div>
</template>

<script>

</script>

<style>
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
    background: rgba(255, 255, 255, 0.3);
  }
  .hidden{
    display: none;
  }
</style>