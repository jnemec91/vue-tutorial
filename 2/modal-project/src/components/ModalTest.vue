<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{sale : theme === 'sale'}">
      <slot></slot>
      <div class="actions">
        <slot name="links">default content</slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ModalTest',
    props: {
      theme: {
        type:String,
        required: false
      }
    },
    methods: {
      closeModal(){
        this.$emit('close-modal')
      }
    },
  }
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
  .modal h1{
    color: blue;
  }
  .sale{
    background-color: orangered;
  }
</style>