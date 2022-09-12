<script setup>
import { useApiStore } from "~/stores/api";

const api = useApiStore();

// Filter Values
const filter = ref("");
const filterNav = ref(false);

// Pages
const pageFilter = ref(1);
const currentPage = ref(1);
const prevPage = ref(0);
const nextPage = ref(2);
const hasNext = ref(true);

const setFilter = (value) => {
  filterNav.value = false;
  filter.value = value;
  resetValues();
  refresh();
};
const openFilterNav = () => {
  filterNav.value = true;
};
// On Click Outside
const filterNavbar = ref(null);
useClickOutside(filterNavbar, () => {
  filterNav.value = false;
});

const {
  data: topManga,
  error,
  refresh,
} = useAsyncData("topManga", async () => {
  const response = await $fetch(
    `https://api.jikan.moe/v4/top/manga?filter=${filter.value}&page=${pageFilter.value}`
  );
  currentPage.value = response.pagination.current_page;
  prevPage.value = response.pagination.current_page - 1;
  nextPage.value = response.pagination.current_page + 1;
  hasNext.value = response.pagination.has_next_page;
  window.scrollTo(0, 0);
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
const trimer = (title) => {
  return title.replace("/", " ");
};

useMeta({
  title: 'AnimeTantei | Top Manga',
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
});
</script>

<template>
  <div class="min-h-screen text-white bg-dark-100">
    <Navbar />

    <div class="max-w-[1220px] mx-auto pt-8 px-6 pb-20">
      <div
        class="border-b pb-1 text-lg font-semibold flex items-center justify-between"
      >
        <span class="font-semibold">Anime Schedule</span>
        <div class="relative text-base mr-4" ref="filterNavbar">
          <div
            class="Filter py-2 px-3 bg-dark-300 flex items-center cursor-pointer"
            @click="openFilterNav()"
          >
            <span class="mr-2">Filter by</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
              />
            </svg>
          </div>
          <transition name="navpopup">
            <ul
              class="dropdown absolute right-[-20px] top-[44px] bg-dark-300 w-36 z-30"
              v-if="filterNav"
            >
              <li
                class="py-2 px-2 hover:bg-sk-blue-600 cursor-pointer"
                @click="setFilter('')"
              >
                All
              </li>
              <li
                class="py-2 px-2 hover:bg-sk-blue-600 cursor-pointer"
                @click="setFilter('airing')"
              >
                Top Airing
              </li>
              <li
                class="py-2 px-2 hover:bg-sk-blue-600 cursor-pointer"
                @click="setFilter('upcoming')"
              >
                Top Upcoming
              </li>
              <li
                class="py-2 px-2 hover:bg-sk-blue-600 cursor-pointer"
                @click="setFilter('bypopularity')"
              >
                Most Popular
              </li>
              <li
                class="py-2 px-2 hover:bg-sk-blue-600 cursor-pointer"
                @click="setFilter('favourite')"
              >
                Most Favourited
              </li>
            </ul>
          </transition>
        </div>
      </div>

      <div class="border-b pb-1 text-xl font-semibold mt-7 mb-4">
        <span v-if="filter == 'airing'">Top Airing Manga</span>
        <span v-if="filter == 'upcoming'">Top Upcoming Manga</span>
        <span v-if="filter == 'bypopularity'">Top Manga by Popularity</span>
        <span v-if="filter == 'favourite'">Top Favourited Manga</span>
        <span v-if="filter == ''">Top Manga</span>
      </div>
      <div
        class="py-3 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4"
        v-if="topManga"
      >
        <nuxt-link
          :to="`/manga/${manga.mal_id}/${trimer(manga.title)}`"
          class=""
          v-for="manga in topManga.data"
          :key="manga.mal_id"
        >
          <CardManga :manga="manga" />
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

<style scoped>
/* Nav Popup Animation */
.navpopup-enter-active,
.navpopup-leave-active {
  transition: transform 0.3s ease;
  transform-origin: top right;
}

.navpopup-enter-from,
.navpopup-leave-to {
  transform: scale(0);
}
</style>
