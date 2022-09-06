<script setup>
const props = defineProps(["anime"]);
</script>

<template>
  <div class="card">
    <div class="cover-img h-[270px] relative rounded-md overflow-hidden">
      <img :src="anime.images.jpg.image_url" alt="" class="h-full w-full" />
      <div class="ep absolute top-2 left-2 bg-sk-blue-600 py-1 px-4 rounded">
        <h1 v-if="anime.score">{{anime.score}}</h1>
        <h1 v-else>8.2</h1>
        
      </div>
    </div>
    <div class="pt-3 px-1 text-lg font-bold">
        <h1 v-if="anime.title_english">{{ anime.title_english }}</h1>
        <h1 v-else>{{anime.title}}</h1>
      
    </div>
  </div>
</template>
