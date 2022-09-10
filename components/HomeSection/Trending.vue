<script setup>
const filter = ref("airing");

const {
  data: trendingAnime,
  error,
  refresh,
} = useAsyncData("trendingAnime", async () => {
  const response = await $fetch(
    `https://api.jikan.moe/v4/top/anime?filter=${filter.value}`
  );
  return response.data.slice(0, 12);
});
</script>

<template>
  <div class="trending py-5" v-if="trendingAnime">
    <HomeSectionHeader :title="'Trending Anime'" :link="'#'" />
    <div class="py-3 grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 gap-4">
      <nuxt-link
        :to="`/anime/${anime.mal_id}/${anime.title}`"
        class=""
        v-for="anime in trendingAnime"
        :key="anime.mal_id"
      >
        <CardAnime :anime="anime" />
      </nuxt-link>
    </div>
  </div>
</template>
