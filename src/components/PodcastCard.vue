<template>
  <button class="flex items-center w-full h-28 my-3 cursor-pointer rounded  focus:outline-none focus:ring-2 ring-white ring-opacity-20 focus:shadow-2xl  duration-100">
    <img
      src="https://images.unsplash.com/photo-1588072884722-c1e556ac901b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
      alt="Podcast image"
      class="h-full rounded-md mr-2"
    >
    <div class="flex flex-col items-between h-full py-5">
      <h1 class="font-bold text-2xl text-white">Name</h1>
      <h2 class="text-xl text-gray-300 mt-auto">Author</h2>
    </div>
    <i class="bi bi-arrow-right-short ml-auto text-6xl text-white"></i>
  </button>
</template>

<script>
  export default {
    name: 'PodcastCard'
  }
</script>

<style scoped>

</style>
