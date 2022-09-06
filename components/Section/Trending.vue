<script setup>
onMounted(() => {
  console.log(`the component is now mounted.`);
  fetch(
    "https://api.jikan.moe/v4/top/anime?filter=airing")
    .then((response) => response.json())
    .then((response) => console.log(response.data))
    .catch((err) => console.error(err));
});
</script>

<template>
  <div class="trending py-5">
    <SectionHeader :title="'Trending Now'" :link="'#'" />
    <div class="py-3 grid grid-cols-4 gap-4">
      <nuxt-link to="#" class="" v-for="anime in 12" :key="anime">
        <CardAnime :anime="anime" />
      </nuxt-link>
    </div>
  </div>
</template>
