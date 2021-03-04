<template>
  <div class="container p-5 mx-auto my-2 rounded-lg">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'Container'
  }
</script>

<style scoped>
  .container {
    background: var(--bg-light);
  }
</style>