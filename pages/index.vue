<script setup>
import { useApiStore } from "~/stores/api";

const api = useApiStore();

onMounted(() => {
  window.scrollTo(0, 0);
})

useMeta({
  title: 'AnimeTantei',
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
});
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
        <div
          class="right block md:flex lg:block max-w-full flex-full lg:flex-3 px-4"
        >
          <HomeSectionUpcoming />
          <HomeSectionMostPopularAnime />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
