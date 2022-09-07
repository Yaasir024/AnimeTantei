<script setup>
import { useApiStore } from "~/stores/api";

const api = useApiStore();
</script>

<template>
  <div class="trending py-5">
    <HomeSectionHeader :title="'Most Popular Anime'" :link="'#'" />
    <div class="py-3">
      <nuxt-link
        :to="`/anime/${anime.mal_id}/${anime.title}`"
        class=""
        v-for="anime in api.mostPopularAnime"
        :key="anime.mal_id"
      >
        <CardSmall :anime="anime" />
      </nuxt-link>
    </div>
  </div>
</template>
