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
      <HomeSectionHeader :title="'Popular Manga'" :link="'#'" />
      <div class="py-3 grid grid-cols-4 gap-4">
        <nuxt-link :to="`/manga/${manga.title}`" class="" v-for="manga in api.topOngoingManga" :key="manga.mal_id">
          <CardManga :manga="manga" />
        </nuxt-link>
      </div>
    </div>
  </template>
  