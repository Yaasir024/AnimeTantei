<script setup>
import { useApiStore } from "~/stores/api";

const api = useApiStore();
const route = useRoute();
const id = route.params.id;
const name = route.params.name;
// const animeDetails = ref([]);

const { data: animeDetails, error } = useAsyncData("animeDetails", async () => {
  const response = await $fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
  console.log(response.data);
  return response.data;
});

//Get Anime By ID
// const getAnimeById = (id) => {
//   fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
//     .then((response) => response.json())
//     .then((response) => {
//       animeDetails.value = response.data;
//       console.log(response.data, "anime");
//     })
//     .catch((err) => console.error(err));
// };

// onBeforeMount(() => {
//   getAnimeById(id);
// });
</script>

<template>
  <div class="min-h-screen text-white bg-dark-100">
    <Navbar />

    {{ animeDetails.title }} {{ animeDetails.images.jpg.large_image_url }}
    <div class="max-w-[1220px] mx-auto px-6" v-if="animeDetails">
      <div class="flex flex-wrap">
        <div class="left flex-25% px-2">
          <div class="img mb-2">
            <img :src="animeDetails.images.jpg.large_image_url" alt="" />
          </div>
          <div class="">
            <div class="border-b pb-1 text-lg font-semibold">Information</div>
            <div class="">
              <p class="text-base font-medium pb-1">
                Type: <span class="font-normal">{{ animeDetails.type }}</span>
              </p>
              <p class="text-base font-medium pb-1">
                Episodes:
                <span class="font-normal">{{ animeDetails.episodes }}</span>
              </p>
              <p class="text-base font-medium pb-1">
                Status:
                <span class="font-normal">{{ animeDetails.status }}</span>
              </p>
              <p class="text-base font-medium pb-1">
                Premiered:
                <span class="font-normal capitalize"
                  >{{ animeDetails.season }} {{ animeDetails.year }}</span
                >
              </p>
              <p class="text-base font-medium pb-1">
                Aired:
                <span class="font-normal">{{ animeDetails.aired.string }}</span>
              </p>
              <p class="text-base font-medium pb-1">
                Brodcast:
                <span class="font-normal">{{
                  animeDetails.broadcast.string
                }}</span>
              </p>
              <p class="text-base font-medium pb-1">
                Duration:
                <span class="font-normal">{{ animeDetails.duration }}</span>
              </p>
              <p class="text-base font-medium pb-1">
                Rating:
                <span class="font-normal">{{ animeDetails.rating }}</span>
              </p>
            </div>
          </div>
        </div>
        <div class="left flex-75% px-2">
          <div class="top w-full flex">
            <div class="left min-h-[20px] w-full py-1 px-2">
              <div class="titles">
                <div class="text-lg font-semibold pb-1">
                  {{ animeDetails.title }}
                </div>
                <div class="text-lg font-semibold">
                  {{ animeDetails.title_japanese }}
                </div>
              </div>
              <div class="options flex items-center mt-2">
                <div
                  class="flex items-center bg-sk-blue-600 rounded-xl py-2 px-3 cursor-pointer mr-2"
                >
                  <span class="mr-1">Bookmark</span>
                  <svg
                    width="22"
                    height="22"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path
                      d="M5 0v24l7-6 7 6v-24h-14zm1 1h12v20.827l-6-5.144-6 5.144v-20.827z"
                    />
                  </svg>
                </div>
                <div
                  class="flex items-center bg-sk-blue-600 rounded-xl py-2 px-3 cursor-pointer"
                >
                  <span class="mr-1">Add To Tracker</span>
                  <svg
                    width="22"
                    height="22"
                    fill="currentColor"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
                      fill-rule="nonzero"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="left min-h-[20px] w-[200px]">
              <div class="trailer relative">
                <img
                  :src="animeDetails.trailer.images.small_image_url"
                  alt=""
                />
                <div
                  class="btn-play absolute top-[50%] left-[50%] ml-[-30px] mt-[-14px] flex items-center px-1 py-1 rounded cursor-pointer"
                >
                  <svg
                    class="mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z"
                    />
                  </svg>
                  <span>Play</span>
                </div>
                <div
                  class="trailer-tag absolute bottom-0 left-0 px-1 py-1 w-full"
                >
                  Trailer
                </div>
              </div>
            </div>
          </div>
          <div class="main mt-4">
            <div class="synopsis">
              <div class="border-b pb-1 text-lg font-semibold">Synopsis</div>
              <p class="text-base font-normal leading-7">
                {{ animeDetails.synopsis }}
              </p>
            </div>
            <div class="background mt-3">
              <div class="border-b pb-1 text-lg font-semibold">Background</div>
              <p class="text-base font-normal leading-7" v-if="animeDetails.background">
                {{ animeDetails.background }}
              </p>
              <p class="text-base font-normal leading-7" v-else>
                No background info yet for {{animeDetails.title}}
              </p>
            </div>
            <!-- Genre -->
            <div class="genre mt-3">
              <div class="border-b pb-1 text-lg font-semibold">Genre</div>
              <p class="text-base font-normal leading-7"  v-if="animeDetails.genres">
                <span v-for="(genre, index) in animeDetails.genres" :key="index" class="mr-2">
                {{genre.name}}</span>
              </p>
              <p class="text-base font-normal leading-7" v-else>
                No genre info yet for {{animeDetails.title}}
              </p>
            </div>
            <!-- Producers -->
            <div class="producers mt-3">
              <div class="border-b pb-1 text-lg font-semibold">Producers</div>
              <p class="text-base font-normal leading-7"  v-if="animeDetails.producers">
                <span v-for="(producer, index) in animeDetails.producers" :key="index" class="mr-2">
                {{producer.name}},</span>
              </p>
              <p class="text-base font-normal leading-7" v-else>
                No producer info yet for {{animeDetails.title}}
              </p>
            </div>
            <!-- Studios -->
            <div class="studios mt-3">
              <div class="border-b pb-1 text-lg font-semibold">Studios</div>
              <p class="text-base font-normal leading-7"  v-if="animeDetails.studios">
                <span v-for="(studio, index) in animeDetails.studios" :key="index" class="mr-2">
                {{studio.name}}.</span>
              </p>
              <p class="text-base font-normal leading-7" v-else>
                No studio info yet for {{animeDetails.title}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    Page {{ id }} {{ name }}
    {{ animeDetails }}
    AAAAAAAAAA
  </div>
</template>

<style>
.btn-play {
  background-color: rgba(0, 0, 0, 0.6);
}
.trailer-tag {
  background-color: rgba(0, 0, 0, 0.411);
}
</style>
