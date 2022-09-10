<script setup>
const id = ref(1735);
const name = ref("Naruto: Shippuuden");
</script>

<template>
  <div class="banner">
    <div class="h-[70vh] relative">
      <nuxt-link :to="`/anime/${id}/${name}`">
        <img src="/img/poster.jpg" alt="" class="h-full w-full" />

        <div class="details absolute bottom-8 w-full px-4 flex">
          <div class="flex-full max-w-full md:flex-50% md:max-w-[50%]">
            <div class="label text-sk-blue-600 bg-white py-1 px-4 inline-block">
              Adventure
            </div>
            <h2 class="text-2xl sm:text-4xl font-bold leading-10 mt-4 mb-2">
              Naruto Shippudeen
            </h2>
            <p class="mb-4">
              It has been two and a half years since Naruto Uzumaki left
              Konohagakure, the Hidden Leaf Village...
            </p>
            <div class="mb-4">
              <nuxt-link :to="`/anime/${id}/${name}`" class="flex">
                <span
                  class="py-2 px-5 bg-sk-blue-600 mr-1 font-bold rounded-tl rounded-bl"
                  >View</span
                >
                <div
                  class="bg-sk-blue-600 px-1 flex items-center justify-center rounded-tr rounded-br"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
                  </svg>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
