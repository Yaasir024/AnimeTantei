<script setup>
import { useApiStore } from "~/stores/api";

const api = useApiStore();

const { todayDay } = useTodayDay();
</script>

<template>
  <div class="trending py-5">
    <HomeSectionHeader :title="'Schedule'" :link="'#'" />
    <div class="day flex items-center justify-center text-lg py-2">
      <h3 class="capitalize">{{ todayDay }}</h3>
    </div>
  </div>
</template>
