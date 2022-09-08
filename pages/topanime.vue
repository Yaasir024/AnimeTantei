<script setup>
import { useApiStore } from "~/stores/api";

const api = useApiStore();
const filter = ref("bypopularity");
const setFilter = (value) => {
    filter.value = value
    refresh()
}

const { data: topAnime, error, refresh } = useAsyncData("topAnime", async () => {
  const response = await $fetch(
    `https://api.jikan.moe/v4/top/anime?filter=${filter.value}`
  );
  return response.data;
});
</script>

<template>
  <div class="min-h-screen text-white bg-dark-100">
    <Navbar />
    <div class="max-w-[1220px] mx-auto pt-8 px-6 pb-20">
      <div class="border-b pb-1 text-lg font-semibold">Top Anime</div>

      <div class="horizontal-nav border-b border-sk-blue-600 my-5">
        <div
          class="py-1 px-1 break-word hover:bg-sk-blue-600 cursor-pointer inline"
        >
          All Anime
        </div>
        <div
          class="py-1 px-1 break-word hover:bg-sk-blue-600 cursor-pointer inline"
          @click="setFilter('airing')"
        >
          Top Airing
        </div>
        <div
          class="py-1 px-1 break-word hover:bg-sk-blue-600 cursor-pointer inline"
          @click="setFilter('upcoming')"
        >
          Top Upcoming
        </div>
        <div
          class="py-1 px-1 break-word hover:bg-sk-blue-600 cursor-pointer inline"
          @click="setFilter('bypopularity')"
        >
          Most Popular
        </div>
        <div
          class="py-1 px-1 break-word hover:bg-sk-blue-600 cursor-pointer inline"
          @click="setFilter('favourite')"
        >
          Most Favourited
        </div>
      </div>

      <div class="border-b pb-1 text-xl font-semibold mt-7 mb-4">
        <span v-if="filter =='airing'">Top Airing Anime</span>
        <span v-if="filter =='upcoming'">Top Upcoming Anime</span>
        <span v-if="filter == 'bypopularity'">Top Anime by Popularity</span>
        <span v-if="filter == 'favourite'">Top Favourited Anime</span>
      </div>
      <div class="py-3 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4" v-if="topAnime">
        <nuxt-link
          :to="`/anime/${anime.mal_id}/${anime.title}`"
          class=""
          v-for="anime in topAnime"
          :key="anime.mal_id"
        >
          <CardAnime :anime="anime" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
