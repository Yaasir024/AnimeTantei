<script setup>
import { useApiStore } from "~/stores/api";

const api = useApiStore();

// Filter Values
const query = ref("");
const sfw = ref(true);
const searchResults = ref([]);
const loading = ref(false);
const searchFail = ref(false);

const searchAnime = () => {
  const url = `https://api.jikan.moe/v4/anime?q=${query.value}&sfw=${sfw.value}&limit=12`;
  searchResults.value = "";
  query.value = "";
  searchFail.value = false;
  loading.value = true;

  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      loading.value = false;
      searchResults.value = response.data;
      if (response.data.length == 0) {
        searchFail.value = true;
      }
    })
    .catch((err) => console.error(err));
};
</script>

<template>
  <div class="min-h-screen text-white bg-dark-100">
    <Navbar />
    <div class="max-w-[1220px] mx-auto pt-8 px-6 pb-20">
      <div class="border-b pb-1 text-lg font-semibold">Anime Search</div>
      <div class="search-box max-w-[760px] my-8 mx-auto">
        <div class="">
          <form @submit.prevent="searchAnime">
            <div
              class="search flex items-center justify-between text-white w-full bg-[#353b48] rounded-3xl h-10 pr-3 overflow-hidden"
            >
              <input
                type="text"
                placeholder="Search Anime..."
                v-model="query"
                class="flex-1 h-full px-5 outline-none border-none text-base"
              />
              <button type="submit">
                <svg
                  width="22"
                  height="22"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                >
                  <path
                    d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="" v-if="searchResults.length > 0">
        <div
          class="py-3 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4"
        >
          <nuxt-link
            :to="`/anime/${anime.mal_id}/${anime.title}`"
            class=""
            v-for="anime in searchResults"
            :key="anime.mal_id"
          >
            <CardAnime :anime="anime" />
          </nuxt-link>
        </div>
      </div>
      <Loading v-if="loading" />
      <div class="text-center text-xl" v-if="searchFail">
        Ooops... Sorry, Can't find Anime
      </div>
    </div>
  </div>
</template>

<style>
.search input {
  background: none;
}
</style>
