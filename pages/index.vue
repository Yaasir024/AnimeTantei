<script setup>
import { useApiStore } from "~/stores/api";

const api = useApiStore();
onMounted(() => {
    api.getTopAiringAnime()
  });
onMounted(() => {
  api.getTopOngoingManga();
});
// onMounted(() => {
//   api.getMostPopularAnime();
// });

onMounted(() => {
  api.getAnimeSchedule("tuesday");
});

// onMounted(() => {
//   fetch(`https://api.jikan.moe/v4/anime/1/news`)
//     .then((response) => response.json())
//     .then((response) => {
//       // this.topAiringAnime = response.data.slice(0, 12);
//       console.log(response.data)
//     })
//     .catch((err) => console.error(err));
//   // https://api.jikan.moe/v4/anime/{id}/news
// });
</script>

<template>
  <div class="min-h-screen text-white bg-dark-100">
    <Navbar />
    <div class="max-w-[1220px] mx-auto px-6 py-8">
      <CarouselStatic />
      <div class="row flex flex-wrap pt-5">
        <div class="left w-full flex-full lg:flex-2 px-4">
          <HomeSectionTrending />
          <HomeSectionPopularManga />
        </div>
        <div class="right block md:flex lg:block max-w-full flex-full  lg:flex-3 px-4">
          <HomeSectionUpcoming />
          <HomeSectionMostPopularAnime />
        </div>
      </div>
      <h1 class="text-red-500">Home Page</h1>
    </div>
  </div>
</template>
