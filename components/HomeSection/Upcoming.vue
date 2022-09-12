<script setup>
const filter = ref("upcoming");
// const {
//   data: topUpcomingDetails,
//   error,
//   refresh,
// } = useAsyncData("topUpcomingDetails", async () => {
//   const response = await $fetch(
//     `https://api.jikan.moe/v4/top/anime?filter=${filter.value}`
//   );
//   return response.data.slice(0, 5);
// });
const { upcomingAnimeData, getUpcomingAnime } = useFetchHomeData();

onBeforeMount(() => {
  getUpcomingAnime(filter.value);
});
</script>

<template>
  <div class="schedule py-5" v-if="upcomingAnimeData.length != 0">
    <HomeSectionHeader :title="'Top Upcoming Anime'" :link="'#'" />
    <div class="py-3">
      <nuxt-link
        :to="`/anime/${anime.mal_id}/${anime.title}`"
        class=""
        v-for="anime in upcomingAnimeData"
        :key="anime.mal_id"
      >
        <CardSmall :anime="anime" />
      </nuxt-link>
    </div>
  </div>
</template>
