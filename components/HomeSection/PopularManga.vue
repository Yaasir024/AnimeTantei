<script setup>
const filter = ref("publishing");

const {
  data: popularManga,
  error,
  refresh,
} = useAsyncData("popularManga", async () => {
  const response = await $fetch(
    `https://api.jikan.moe/v4/top/manga?filter=${filter.value}`
  );
  return response.data.slice(0, 12);
});
</script>

<template>
  <div class="trending py-5" v-if="popularManga">
    <HomeSectionHeader :title="'Popular Manga'" :link="'#'" />
    <div class="py-3 grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 gap-4">
      <nuxt-link
        :to="`/manga/${manga.mal_id}/${manga.title}`"
        class=""
        v-for="manga in popularManga"
        :key="manga.mal_id"
      >
        <CardManga :manga="manga" />
      </nuxt-link>
    </div>
  </div>
</template>
