<script setup>

const filter = ref("upcoming");
const {
  data: topUpcomingDetails,
  error,
  refresh,
} = useAsyncData("topUpcomingDetails", async () => {
  const response = await $fetch(
    `https://api.jikan.moe/v4/top/anime?filter=${filter.value}`
  );
  return response.data.slice(0, 5);
});
</script>

<template>
  <div class="schedule py-5">
    <HomeSectionHeader :title="'Top Upcoming Anime'" :link="'#'" />
    <div class="py-3">
      <nuxt-link
        :to="`/anime/${anime.mal_id}/${anime.title}`"
        class=""
        v-for="anime in topUpcomingDetails"
        :key="anime.mal_id"
      >
        <CardSmall :anime="anime" />
      </nuxt-link>
    </div>
  </div>
</template>
