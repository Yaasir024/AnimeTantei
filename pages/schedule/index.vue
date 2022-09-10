<script setup>
import { useApiStore } from "~/stores/api";

const api = useApiStore();

const { todayDay } = useTodayDay();

onBeforeMount(() => {
  filter.value = todayDay;
  refresh();
});

// Filter Values
const filter = ref("");
const filterNav = ref(false);

const setFilter = (value) => {
  filterNav.value = false;
  filter.value = value;
  refresh();
};

const openFilterNav = () => {
  filterNav.value = true;
};

const {
  data: schedule,
  error,
  refresh,
} = useAsyncData("schedule", async () => {
  const response = await $fetch(
    `https://api.jikan.moe/v4/schedules?filter=${filter.value}`
  );
  return response;
});
useMeta({
  title: 'AnimeTantei',
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
        <div class="relative text-base mr-4">
          <div
            class="Filter py-2 px-3 bg-dark-300 flex items-center cursor-pointer"
            @click="openFilterNav()"
          >
            <span class="mr-2">Filter</span>
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
          <ul
            class="dropdown absolute right-[-20px] top-[44px] bg-dark-300 w-32 z-30"
            v-if="filterNav"
          >
            <li
              class="py-2 px-2 hover:bg-sk-blue-600 cursor-pointer"
              @click="setFilter('sunday')"
            >
              Sunday
            </li>
            <li
              class="py-2 px-2 hover:bg-sk-blue-600 cursor-pointer"
              @click="setFilter('monday')"
            >
              Monday
            </li>
            <li
              class="py-2 px-2 hover:bg-sk-blue-600 cursor-pointer"
              @click="setFilter('tuesday')"
            >
              Tuesday
            </li>
            <li
              class="py-2 px-2 hover:bg-sk-blue-600 cursor-pointer"
              @click="setFilter('wednesday')"
            >
              Wednesday
            </li>
            <li
              class="py-2 px-2 hover:bg-sk-blue-600 cursor-pointer"
              @click="setFilter('thursday')"
            >
              Thursday
            </li>
            <li
              class="py-2 px-2 hover:bg-sk-blue-600 cursor-pointer"
              @click="setFilter('friday')"
            >
              Friday
            </li>
            <li
              class="py-2 px-2 hover:bg-sk-blue-600 cursor-pointer"
              @click="setFilter('saturday')"
            >
              Saturday
            </li>
          </ul>
        </div>
      </div>
      <div class="" v-if="schedule">
        <div class="border-b pb-1 text-xl font-semibold mt-7 mb-4">
          <span class="capitalize">{{ filter }}</span>
        </div>
        <div
          class="py-3 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4"
        >
          <nuxt-link
            :to="`/anime/${anime.mal_id}/${anime.title}`"
            class=""
            v-for="anime in schedule.data"
            :key="anime.mal_id"
          >
            <CardAnime :anime="anime" />
          </nuxt-link>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
