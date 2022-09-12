<script setup>
const props = defineProps(["anime"]);
</script>

<template>
  <div class="card min-h-[90px] px-6 pb-4 flex">
    <!-- <div class="mr-2 text-lg font-bold">index</div> -->
    <div class="w-full max-w-[90px] mr-3">
      <img
        :src="anime.images.jpg.image_url"
        alt=""
        class="w-full h-full overflow-hidden"
      />
    </div>
    <div class="data">
      <div class="title mb-2 text-sm leading-4 text-sk-blue-600 font-medium">
        <h1 v-if="anime.title">{{ anime.title }}</h1>
        <h1 v-else>Anime</h1>
      </div>
      <p class="text-base font-normal leading-7">
        <span
          v-for="(genre, index) in anime.genres"
          :key="index"
          class=""
        >
          {{ genre.name }}.</span
        >
      </p>
      <p>{{ anime.type }}, Scored {{ anime.score }}</p>
    </div>
  </div>
</template>
