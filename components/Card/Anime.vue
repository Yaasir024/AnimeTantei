<script setup>
const props = defineProps(["anime"]);
</script>

<template>
  <div class="card text-center">
    <div class="cover-img h-[220px] relative overflow-hidden">
      <img
        :src="anime.images.jpg.large_image_url"
        alt=""
        class="cover-pic h-full w-full"
      />
      <!-- <div class="ep absolute top-2 left-2 bg-sk-blue-600 py-1 px-4 rounded">
        <h1 v-if="anime.score">{{ anime.score }}</h1>
        <h1 v-else>8.2</h1>
      </div> -->
    </div>
    <div class="pt-3 text-sm leading-4 text-sk-blue-600 font-bold">
      <h1 v-if="anime.title_english">{{ anime.title_english }}</h1>
      <h1 v-else>{{ anime.title }}</h1>
    </div>
  </div>
</template>

<style scoped>
.cover-pic {
  image-rendering: -moz-crisp-edges; /* Firefox */
  image-rendering: -o-crisp-edges; /* Opera */
  image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
}
</style>
