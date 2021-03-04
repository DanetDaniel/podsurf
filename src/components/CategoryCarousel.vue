<template>
  <div>
    <p class="text-2xl text-white">Categories</p>
    <ul class="flex overflow-x-scroll carousel">
      <li class="carousel-item">Movies</li>
      <li class="carousel-item">Education</li>
      <li class="carousel-item">Gaming</li>
      <li class="carousel-item">Tech</li>
      <li class="carousel-item">Science</li>
      <li class="carousel-item">Comedy</li>
      <li class="carousel-item">News</li>
      <li class="carousel-item">Politics</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CategoryCarousel'
}
</script>

<style scoped>
  .carousel {
    height: max-content;
    overflow-y: hidden;
  }

  .carousel::-webkit-scrollbar {
    width: 0;
  }

  .carousel-item {
    @apply text-xl text-gray-400 mr-5 cursor-pointer hover:text-gray-200 duration-100
  }
</style>