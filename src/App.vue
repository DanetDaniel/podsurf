<template>
  <main class="p-6">
    <router-view></router-view>
  </main>
  <TheFooter />
  <!-- <router-link to="/contact">Contact</router-link> -->
</template>

<script>
import TheFooter from './components/TheFooter.vue';

export default {
  components: {
    TheFooter
  }
}
</script>

<style>
body {
  background: #242424;
}
</style>