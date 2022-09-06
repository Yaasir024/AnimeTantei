<script setup>
const props = defineProps(["anime"]);
</script>

<template>
  <div class="card min-h-[90px] px-6 pb-4 flex">
    <!-- <div class="mr-2 text-lg font-bold">index</div> -->
    <div class="mr-4">
      <img
        :src="anime.images.jpg.image_url"
        alt=""
        class="w-[60px] h-full overflow-hidden"
      />
    </div>
    <div class="data">
      <div class="title mb-2 font-semibold">
        <h1 v-if="anime.title">{{ anime.title }}</h1>
        <h1 v-else>Anime</h1>
      </div>
      <p>{{ anime.type }}, Scored {{ anime.score }}</p>
    </div>
  </div>
</template>
