<script setup>
const filter = ref("publishing");

// const {
//   data: popularManga,
//   error,
//   refresh,
// } = useAsyncData("popularManga", async () => {
//   const response = await $fetch(
//     `https://api.jikan.moe/v4/top/manga?filter=${filter.value}`
//   );
//   return response.data.slice(0, 12);
// });

const { popularMangaData, getPopularManga } = useFetchHomeData();

onMounted(() => {
  getPopularManga(filter.value);
});
</script>

<template>
  <div class="trending py-5" v-if="popularMangaData.length != 0">
    <HomeSectionHeader :title="'Popular Manga'" :link="'#'" />
    <div class="py-3 grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 gap-4">
      <nuxt-link
        :to="`/manga/${manga.mal_id}/${manga.title}`"
        class=""
        v-for="manga in popularMangaData"
        :key="manga.mal_id"
      >
        <CardManga :manga="manga" />
      </nuxt-link>
    </div>
  </div>
  <div class="" v-if="popularMangaData.length == 0">
    <div class="py-3 grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 gap-4">
      <div class="" v-for="i in 12" :key="i">
        <CardSkeleton />
      </div>
    </div>
  </div>
</template>
