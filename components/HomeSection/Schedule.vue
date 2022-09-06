<script setup>
import { useApiStore } from "~/stores/api";

const api = useApiStore();

const { todayDay } = useTodayDay();
</script>

<template>
  <div class="schedule py-5">
    <HomeSectionHeader :title="'Schedule'" :link="'#'" />
    <div class="day flex items-center justify-center text-lg py-2">
      <h3 class="capitalize">{{ todayDay }}</h3>
    </div>
    <div class="">
      <nuxt-link to="#" v-for="anime in api.todayAnime" :key="anime.mal_id">
        <CardSmall :anime="anime"/>
      </nuxt-link>
    </div>
  </div>
</template>
