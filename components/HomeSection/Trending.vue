<script setup>
import { useApiStore } from "~/stores/api";

const api = useApiStore();

</script>

<template>
  <div class="trending py-5">
    <HomeSectionHeader :title="'Trending Anime'" :link="'#'" />
    <div class="py-3 grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 gap-4">
      <nuxt-link
      :to="`/anime/${anime.mal_id}/${anime.title}`" 
        class=""
        v-for="anime in api.topAiringAnime"
        :key="anime.mal_id"
      >
        <CardAnime :anime="anime" />
      </nuxt-link>
    </div>
  </div>
</template>
