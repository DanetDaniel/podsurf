<template>
  <h1 class="text-5xl font-bold text-white">Podsurf</h1>
  <h2 class="text-3xl font-semibold my-3 text-gray-200">Podcasts</h2>
  <CategoryCarousel />
  <PodcastCard />
  <PodcastCard />
  <PodcastCard />
  <PodcastCard />
  <PodcastCard />
  <PodcastCard />
  <PodcastCard />
  <PodcastCard />
  <PodcastCard />
</template>

<script>
import PodcastCard from '../components/PodcastCard.vue';
import CategoryCarousel from '../components/CategoryCarousel.vue'

export default {
  components: {
    PodcastCard,
    CategoryCarousel
  }
}
</script>

<style>
  h1 {
    font-family: 'Jost';
  }
</style>