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

const setFilter = (value) => {
  filter.value = value;
  resetValues();
  refresh();
};

const {
  data: getSchedule,
  error,
  refresh,
} = useAsyncData("getSchedule", async () => {
  const response = await $fetch(
    `https://api.jikan.moe/v4/schedules?filter=${filter.value}`
  );
  return response;
});
</script>

<template>
  <div class="min-h-screen text-white bg-dark-100">
    <Navbar />
    <div class="max-w-[1220px] mx-auto pt-8 px-6 pb-20">
      <div class="border-b pb-1 text-lg font-semibold">Anime Schedule</div>

      <div class="horizontal-nav border-b border-sk-blue-600 my-5">
        <div
          class="py-1 px-1 break-word hover:bg-sk-blue-600 cursor-pointer inline"
          @click="setFilter('monday')"
        >
          Monday
        </div>
        <div
          class="py-1 px-1 break-word hover:bg-sk-blue-600 cursor-pointer inline"
          @click="setFilter('tuesday')"
        >
          Tuesday
        </div>
        <div
          class="py-1 px-1 break-word hover:bg-sk-blue-600 cursor-pointer inline"
          @click="setFilter('wednesday')"
        >
          Wednesday
        </div>
        <div
          class="py-1 px-1 break-word hover:bg-sk-blue-600 cursor-pointer inline"
          @click="setFilter('thursday')"
        >
          Thursday
        </div>
        <div
          class="py-1 px-1 break-word hover:bg-sk-blue-600 cursor-pointer inline"
          @click="setFilter('friday')"
        >
          Friday
        </div>
        <div
          class="py-1 px-1 break-word hover:bg-sk-blue-600 cursor-pointer inline"
          @click="setFilter('saturday')"
        >
          Saturday
        </div>
      </div>

      <div class="border-b pb-1 text-xl font-semibold mt-7 mb-4">
        <span class="capitalize">{{ filter }}</span>
      </div>
      <div
        class="py-3 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4"
        v-if="getSchedule"
      >
        <nuxt-link
          :to="`/anime/${anime.mal_id}/${anime.title}`"
          class=""
          v-for="anime in getSchedule.data"
          :key="anime.mal_id"
        >
          <CardAnime :anime="anime" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
