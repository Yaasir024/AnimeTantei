<script setup>
const filter = ref("airing");

// const {
//   data: trendingAnime,
//   error,
//   refresh,
// } = useAsyncData("trendingAnime", async () => {
//   const response = await $fetch(
//     `https://api.jikan.moe/v4/top/anime?filter=${filter.value}`
//   );
//   return response.data.slice(0, 12);
// });

const { trendingAnimeData, getTrendingAnime } = useFetchHomeData();

onMounted(() => {
  getTrendingAnime(filter.value);
});
</script>

<template>
  <div class="trending py-5" v-if="trendingAnimeData.length != 0">
    <HomeSectionHeader :title="'Trending Anime'" :link="'#'" />
    <div class="py-3 grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 gap-4">
      <nuxt-link
        :to="`/anime/${anime.mal_id}/${anime.title}`"
        class=""
        v-for="anime in trendingAnimeData"
        :key="anime.mal_id"
      >
        <CardAnime :anime="anime" />
      </nuxt-link>
    </div>
  </div>
  <div class="" v-if="trendingAnimeData.length == 0">
    <div class="py-3 grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 gap-4">
      <div class="" v-for="i in 12" :key="i">
        <CardSkeleton />
      </div>
    </div>
  </div>
</template>
