<script setup>
const route = useRoute();
const id = route.params.id;
const name = route.params.name;

const {
  data: mangaDetails,
  error,
  refresh,
} = useAsyncData("mangaDetails", async () => {
  const response = await $fetch(`https://api.jikan.moe/v4/manga/${id}/full`);
  return response.data;
});
onBeforeMount(() => {
  refresh();
});
</script>

<template>
  <div class="min-h-screen text-white bg-dark-100">
    <Navbar />
    <div class="max-w-[1220px] mx-auto pt-8 px-6 pb-20" v-if="mangaDetails">
      <div class="flex flex-wrap">
        <!-- Title "Displays On Small Screen" -->
        <div class="titles px-3 mb-2 block md:hidden">
          <div class="text-lg font-semibold pb-1">
            {{ mangaDetails.title }}
          </div>
          <div class="text-lg font-semibold">
            {{ mangaDetails.title_japanese }}
          </div>
        </div>
        <div class="left w-full md:flex-25% px-2">
          <div class="flex md:block">
            <div class="img mb-2 max-w-[200px] md:max-w-none">
              <img :src="mangaDetails.images.jpg.large_image_url" alt="" />
            </div>
            <div class="pl-3 md:pl-0 w-full sm:w-auto">
              <div class="border-b pb-1 text-lg font-semibold">Information</div>
              <div class="text-sm">
                <p class="font-medium pb-1">
                  Type: <span class="font-normal">{{ mangaDetails.type }}</span>
                </p>
                <p class="font-medium pb-1">
                  Chapters:
                  <span class="font-normal" v-if="mangaDetails.chapters">{{
                    mangaDetails.chapters
                  }}</span>
                  <span class="font-normal" v-else>Unknown</span>
                </p>
                <p class="font-medium pb-1">
                  Volumes:
                  <span class="font-normal" v-if="mangaDetails.volumes">{{
                    mangaDetails.volumes
                  }}</span>
                  <span class="font-normal" v-else>Unknown</span>
                </p>
                <p class="font-medium pb-1">
                  Status:
                  <span class="font-normal">{{ mangaDetails.status }}</span>
                </p>
                <p class="font-medium pb-1">
                  Published:
                  <span class="font-normal">{{
                    mangaDetails.published.string
                  }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="right w-full md:flex-75% px-2">
          <div class="top w-full hidden md:flex">
            <div class="left min-h-[20px] w-full py-1 px-2">
              <div class="titles">
                <div class="text-lg font-semibold pb-1">
                  {{ mangaDetails.title }}
                </div>
                <div class="text-lg font-semibold">
                  {{ mangaDetails.title_japanese }}
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
          </div>
          <div class="main mt-4">
            <div class="synopsis">
              <div class="border-b pb-1 text-lg font-semibold">Synopsis</div>
              <p class="text-base font-normal leading-7">
                {{ mangaDetails.synopsis }}
              </p>
            </div>
            <!-- Background -->
            <div class="background mt-8">
              <div class="border-b pb-1 text-lg font-semibold">Background</div>
              <p
                class="text-base font-normal leading-7"
                v-if="mangaDetails.background"
              >
                {{ mangaDetails.background }}
              </p>
              <p class="text-base font-normal leading-7" v-else>
                No background info yet for {{ mangaDetails.title }}
              </p>
            </div>
            <!-- Genre -->
            <div class="genre mt-3">
              <div class="border-b pb-1 text-lg font-semibold">Genre</div>
              <p
                class="text-base font-normal leading-7"
                v-if="mangaDetails.genres"
              >
                <span
                  v-for="(genre, index) in mangaDetails.genres"
                  :key="index"
                  class="mr-2"
                >
                  {{ genre.name }}.</span
                >
              </p>
              <p class="text-base font-normal leading-7" v-else>
                No genre info yet for {{ mangaDetails.title }}
              </p>
            </div>
            <!-- Themes -->
            <div class="theme mt-3">
              <div class="border-b pb-1 text-lg font-semibold">Themes</div>
              <p
                class="text-base font-normal leading-7"
                v-if="mangaDetails.themes"
              >
                <span
                  v-for="(theme, index) in mangaDetails.themes"
                  :key="index"
                  class="mr-2"
                >
                  {{ theme.name }}.</span
                >
              </p>
              <p class="text-base font-normal leading-7" v-else>
                No theme info yet for {{ mangaDetails.title }}
              </p>
            </div>
            <!-- Authors -->
            <div class="authors mt-3">
              <div class="border-b pb-1 text-lg font-semibold">Authors</div>
              <p
                class="text-base font-normal leading-7"
                v-if="mangaDetails.authors"
              >
                <span
                  v-for="(author, index) in mangaDetails.authors"
                  :key="index"
                  class="mr-2"
                >
                  {{ author.name }}.</span
                >
              </p>
              <p class="text-base font-normal leading-7" v-else>
                No author info yet for {{ mangaDetails.title }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
