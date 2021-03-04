<template>
  <Container>
    <h1 class="text-5xl font-bold text-white mb-3">Podsurf</h1>
    <CategoryCarousel />
  </Container>
  <PodcastCard v-for="podcast in podcasts" :key="podcast.name" :name="podcast.name" :author="podcast.author" />
  
</template>

<script>
import { data } from '../dummyData.js';
import Container from '../components/Container.vue';
import PodcastCard from '../components/PodcastCard.vue';
import CategoryCarousel from '../components/CategoryCarousel.vue'

export default {
  components: {
    PodcastCard,
    CategoryCarousel,
    Container
  },
  data() {
    return {
      podcasts: data
    }
  }
}
</script>

<style>
  h1 {
    font-family: 'Jost';
  }
</style>