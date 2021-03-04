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
    TheFooter,
  }
}
</script>

<style>
.bg-base {
  background: var(--bg-base);
}

.bg-light-hover:hover {
  background: var(--bg-light);
}

:root {
  --bg-base: #242424;
  --bg-light: #2f2f2f;
}

body {
  background: var(--bg-base);
}
</style>