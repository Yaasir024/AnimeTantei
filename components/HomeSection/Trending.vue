<script setup>
  import { useApiStore } from "~/stores/api";

  const api = useApiStore();
onMounted(() => {
  console.log(`the component is now mounted.`);
  api.getTopAiringAnime()
});
</script>

<template>
  <div class="trending py-5">
    <HomeSectionHeader :title="'Trending Now'" :link="'#'" />
    <div class="py-3 grid grid-cols-4 gap-4">
      <nuxt-link to="#" class="" v-for="anime in api.topAiringAnime" :key="anime">
        <CardAnime :anime="anime" />
      </nuxt-link>
    </div>
  </div>
</template>
