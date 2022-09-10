<script setup>
const filter = ref("bypopularity");

const {
  data: popularAnime,
  error,
  refresh,
} = useAsyncData("popularAnime", async () => {
  const response = await $fetch(
    `https://api.jikan.moe/v4/top/anime?filter=${filter.value}`
  );
  return response.data.slice(0, 5);
});
</script>

<template>
  <div class="trending py-5" v-if="popularAnime">
    <HomeSectionHeader :title="'Most Popular Anime'" :link="'#'" />
    <div class="py-3">
      <nuxt-link
        :to="`/anime/${anime.mal_id}/${anime.title}`"
        class=""
        v-for="anime in popularAnime"
        :key="anime.mal_id"
      >
        <CardSmall :anime="anime" />
      </nuxt-link>
    </div>
  </div>
</template>
