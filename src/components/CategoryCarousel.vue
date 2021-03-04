<template>
  <div>
    <p class="text-2xl text-white mb-1">Categories</p>
    <ul class="flex overflow-x-scroll carousel">
      <li
        class="carousel-item"
        v-for="category in categories"
        :key="category"
      >
        {{ category }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CategoryCarousel',
  data() {
    return {
      categories: [
        'Whatever',
        'Movies',
        'Education',
        'Gaming',
        'Tech',
        'Science',
        'Comedy',
        'News',
        'Politics'
      ]
    }
  }
}
</script>

<style scoped>
  .carousel {
    height: max-content;
    overflow-y: hidden;
  }

  .carousel::-webkit-scrollbar {
    width: 0;
    height: 5px;
    background: var(--bg-base);
    @apply rounded-full;
  }

  .carousel::-webkit-scrollbar-button {
    display: none;
  }

  .carousel::-webkit-scrollbar-thumb {
    @apply bg-gray-400 rounded-full;
  }

  .carousel-item {
    @apply text-xl text-gray-400 mr-3 mb-1 rounded-full cursor-pointer hover:text-gray-200 duration-100;
  }
</style>