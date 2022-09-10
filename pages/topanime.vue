<script setup>
import { useApiStore } from "~/stores/api";

const api = useApiStore();

// Filter Values
const filter = ref("");
const pageFilter = ref(1);

// Pages
const currentPage = ref(1);
const prevPage = ref(0);
const nextPage = ref(2);
const hasNext = ref(true);

const setFilter = (value) => {
  filter.value = value;
  resetValues();
  refresh();
};

const {
  data: topAnime,
  error,
  refresh,
} = useAsyncData("topAnime", async () => {
  const response = await $fetch(
    `https://api.jikan.moe/v4/top/anime?filter=${filter.value}&page=${pageFilter.value}`
  );
  currentPage.value = response.pagination.current_page;
  prevPage.value = response.pagination.current_page - 1;
  nextPage.value = response.pagination.current_page + 1;
  hasNext.value = response.pagination.has_next_page;
  return response;
});

const previous = () => {
  if (prevPage.value > 0) {
    pageFilter.value = prevPage.value;
    refresh();
  } else {
    console.log("Yaada");
  }
};
const next = () => {
  if (hasNext.value == true) {
    pageFilter.value = nextPage.value;
    refresh();
  } else {
    console.log("Yaada");
  }
};

const resetValues = () => {
  pageFilter.value = 1;
  prevPage.value = 0;
  nextPage.value = 2;
};
</script>

<template>
  <div class="min-h-screen text-white bg-dark-100">
    <Navbar />

    <div class="max-w-[1220px] mx-auto pt-8 px-6 pb-20">
      <div class="border-b pb-1 text-lg font-semibold">Top Anime</div>

      <div class="horizontal-nav border-b border-sk-blue-600 my-5">
        <div
          class="py-1 px-1 break-word hover:bg-sk-blue-600 cursor-pointer inline"
          @click="setFilter('')"
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
        <span v-if="filter == 'airing'">Top Airing Anime</span>
        <span v-if="filter == 'upcoming'">Top Upcoming Anime</span>
        <span v-if="filter == 'bypopularity'">Top Anime by Popularity</span>
        <span v-if="filter == 'favourite'">Top Favourited Anime</span>
        <span v-if="filter == ''">Top Anime Series</span>
        
      </div>
      <div
        class="py-3 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4"
        v-if="topAnime"
      >
        <nuxt-link
          :to="`/anime/${anime.mal_id}/${anime.title}`"
          class=""
          v-for="anime in topAnime.data"
          :key="anime.mal_id"
        >
          <CardAnime :anime="anime" />
        </nuxt-link>
      </div>
      <div class="page-nav">
        <ul class="pagination text-sk-blue-600 flex justify-center">
          <li
            class="bg-dark-300 border border-black flex items-center justify-center py-2 px-3 cursor-pointer"
            title="Previous Page"
            @click="previous()"
            v-if="prevPage.value != 0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
              />
            </svg>
          </li>
          <li class="bg-sk-blue-600 border border-black text-white py-2 px-3">
            {{ currentPage }}
          </li>
          <li
            class="bg-dark-300 border border-black flex items-center justify-center py-2 px-3 cursor-pointer"
            title="Next Page"
            @click="next()"
            v-if="hasNext"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"
              />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
