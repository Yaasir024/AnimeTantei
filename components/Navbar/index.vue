<template>
  <nav class="bg-dark-200 px-5 py-3 flex items-center justify-between">
    <nuxt-link to="/">
      <div class="logo text-2xl font-bold">
        <p>anime<span class="text-sk-blue-600">tantei</span></p>
      </div>
    </nuxt-link>

    <div class="links hidden md:flex items-center">
      <nuxt-link
        to="/"
        class="py-2 px-4 hover:bg-sk-blue-600"
        :class="defaultTransition"
      >
        <div class="">Home</div>
      </nuxt-link>
      <div class="link relative">
        <nuxt-link
          class="py-2 px-4 hover:bg-[#212529] block"
          :class="defaultTransition"
        >
          Anime
        </nuxt-link>

        <ul
          class="dropdown absolute left-0 bottom-[-80px] bg-[#212529] px-1 w-32 hidden flex-col"
        >
          <li class="">
            <nuxt-link
              to="/search/anime"
              class="py-2 px-1 hover:bg-sk-blue-600 block cursor-pointer"
            >
              Anime Search
            </nuxt-link>
          </li>
          <li class="">
            <nuxt-link
              to="/topanime"
              class="py-2 px-1 hover:bg-sk-blue-600 block cursor-pointer"
            >
              Top Anime
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="link relative">
        <nuxt-link
          class="py-2 px-4 hover:bg-[#212529] block"
          :class="defaultTransition"
        >
          Manga
        </nuxt-link>

        <ul
          class="dropdown absolute left-0 bottom-[-80px] bg-[#212529] px-1 w-32 hidden flex-col"
        >
          <li class="">
            <nuxt-link
              to="/search/manga"
              class="py-2 px-1 hover:bg-sk-blue-600 block cursor-pointer"
            >
              Manga Search
            </nuxt-link>
          </li>
          <li class="">
            <nuxt-link
              to="/topmanga"
              class="py-2 px-1 hover:bg-sk-blue-600 block cursor-pointer"
            >
              Top Manga
            </nuxt-link>
          </li>
        </ul>
      </div>

      <nuxt-link
        to="#"
        class="py-2 px-4 hover:bg-sk-blue-600"
        :class="defaultTransition"
      >
        Bookmarks
      </nuxt-link>
      <nuxt-link
        to="#"
        class="py-2 px-4 hover:bg-sk-blue-600"
        :class="defaultTransition"
      >
        Schedule
      </nuxt-link>
    </div>
    <!-- Search Bar -->
    <div class="cursor-pointer">
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      >
        <path
          d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"
        />
      </svg>
    </div>
    <!-- <div
      class="flex items-center justify-between text-white w-full max-w-[300px] bg-dark-200 rounded h-10 pr-3 overflow-hidden border"
      :class="defaultTransition"
    >
      <input
        type="text"
        placeholder="Search"
        class="bg-dark-200 flex-1 h-full px-5 outline-none border-none text-base"
      />
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      >
        <path
          d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"
        />
      </svg>
    </div> -->
  </nav>
</template>

<script setup>
const { defaultTransition } = useTailwindConfig();
</script>

<style>
.link:hover .dropdown {
  display: flex;
}
</style>
