<script setup>
const { defaultTransition } = useTailwindConfig();

// Mobile Navbar
const mobileNav = ref(false);

const toggleMobileNav = () => {
  mobileNav.value = !mobileNav.value;
};
const mobileNavbar = ref(null);
useClickOutside(mobileNavbar, () => {
  mobileNav.value = false;
});

// Anime Nav
const animeNav = ref(false);
const toggleAnimeNav = () => {
  animeNav.value = !animeNav.value;
};

const animeNavItem = ref(null);
useClickOutside(animeNavItem, () => {
  animeNav.value = false;
});

// Manga Nav
const mangaNav = ref(false);
const toggleMangaNav = () => {
  mangaNav.value = !mangaNav.value;
};
const mangaNavItem = ref(null);
useClickOutside(mangaNavItem, () => {
  mangaNav.value = false;
});
</script>

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
      <div class="link relative" ref="animeNavItem">
        <nuxt-link
          class="py-2 px-4 hover:bg-[#212529] block"
          :class="defaultTransition"
          @click="toggleAnimeNav"
        >
          Anime
        </nuxt-link>

        <transition name="navpopup">
          <ul
            class="dropdown absolute left-0 top-[40px] bg-[#212529] w-32 flex flex-col z-40"
            v-if="animeNav"
          >
            <li class="">
              <nuxt-link
                to="/search/anime"
                class="py-2 px-2 hover:bg-sk-blue-600 block cursor-pointer"
              >
                Anime Search
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link
                to="/topanime"
                class="py-2 px-2 hover:bg-sk-blue-600 block cursor-pointer"
              >
                Top Anime
              </nuxt-link>
            </li>
          </ul>
        </transition>
      </div>
      <div class="link relative" ref="mangaNavItem">
        <nuxt-link
          class="py-2 px-4 hover:bg-[#212529] block"
          :class="defaultTransition"
          @click="toggleMangaNav"
        >
          Manga
        </nuxt-link>
        <transition name="navpopup">
          <ul
            class="dropdown absolute left-0 top-[40px] bg-[#212529] w-32 flex flex-col z-40"
            v-if="mangaNav"
          >
            <li class="">
              <nuxt-link
                to="/search/manga"
                class="py-2 px-2 hover:bg-sk-blue-600 block cursor-pointer"
              >
                Manga Search
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link
                to="/topmanga"
                class="py-2 px-2 hover:bg-sk-blue-600 block cursor-pointer"
              >
                Top Manga
              </nuxt-link>
            </li>
          </ul>
        </transition>
      </div>
      <nuxt-link
        to="/schedule"
        class="py-2 px-4 hover:bg-sk-blue-600"
        :class="defaultTransition"
      >
        Schedule
      </nuxt-link>
    </div>
    <div class="" ref="mobileNavbar">
      <!-- Hamburger -->
      <div class="cursor-pointer" @click="toggleMobileNav()">
        <svg
          width="26"
          height="26"
          fill="currentColor"
          clip-rule="evenodd"
          fill-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z"
            fill-rule="nonzero"
          />
        </svg>
      </div>
      <transition name="mobilenav">
        <div
          class="mobilenav fixed top-0 right-0 h-full w-72 bg-dark-200 z-50 py-5 px-8 flex flex-col"
          v-if="mobileNav"
        >
          <div class="mt-5">
            <svg
              class="cursor-pointer"
              @click="toggleMobileNav()"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5 15.538l-3.592-3.548 3.546-3.587-1.416-1.403-3.545 3.589-3.588-3.543-1.405 1.405 3.593 3.552-3.547 3.592 1.405 1.405 3.555-3.596 3.591 3.55 1.403-1.416z"
              />
            </svg>
          </div>
          <nav class="mt-9">
            <nuxt-link
              to="/"
              class="py-2 px-1 hover:bg-sk-blue-600 block cursor-pointer"
              :class="defaultTransition"
            >
              <div class="">Home</div>
            </nuxt-link>
            <nuxt-link
              class="mt-2 py-2 px-1 hover:bg-[#212529] block"
              :class="defaultTransition"
            >
              Anime
            </nuxt-link>
            <nuxt-link
              to="/search/anime"
              class="ml-2 py-2 px-2 hover:bg-sk-blue-600 block cursor-pointer"
            >
              Anime Search
            </nuxt-link>
            <nuxt-link
              to="/topanime"
              class="ml-2 py-2 px-2 hover:bg-sk-blue-600 block cursor-pointer"
            >
              Top Anime
            </nuxt-link>
            <nuxt-link
              class="mt-2 py-2 px-1 hover:bg-[#212529] block"
              :class="defaultTransition"
            >
              Manga
            </nuxt-link>
            <nuxt-link
              to="/search/manga"
              class="ml-2 py-2 px-2 hover:bg-sk-blue-600 block cursor-pointer"
            >
              Manga Search
            </nuxt-link>
            <nuxt-link
              to="/topmanga"
              class="ml-2 py-2 px-2 hover:bg-sk-blue-600 block cursor-pointer"
            >
              Top Manga
            </nuxt-link>
            <nuxt-link
              to="/schedule"
              class="mt-2 py-2 px-1 hover:bg-sk-blue-600 block cursor-pointer"
              :class="defaultTransition"
            >
              Schedule
            </nuxt-link>
          </nav>
          <div class="mt-auto text-center">
            <nuxt-link to="/">
              <div class="logo text-xl font-bold italic">
                <p>anime<span class="text-sk-blue-600">tantei</span></p>
              </div>
            </nuxt-link>
          </div>
        </div>
      </transition>
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

<style>
.link:hover .dropdown {
  display: flex;
}

.mobilenav-enter-active,
.mobilenav-leave-active {
  transition: transform 0.5s ease;
}

.mobilenav-enter-from,
.mobilenav-leave-to {
  transform: translateX(100%);
}
.navpopup-enter-active,
.navpopup-leave-active {
  transition: transform 0.3s ease;
  transform-origin: top left;
}

.navpopup-enter-from,
.navpopup-leave-to {
  transform: scale(0);
}
</style>
