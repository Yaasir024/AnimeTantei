<script setup>
import { useCounterStore } from "~/stores/counter";
const props = defineProps(["title", "link"]);

const counter = useCounterStore();
</script>

<template>
  <div class="header flex items-center justify-between pb-3">
    <div class="title">
      <h1
        class="text-xl capitalize font-semibold leading-5 pl-5 relative before:absolute before:left-0 before:top-[-6px] before:h-8 before:w-1 before:bg-sk-blue-600"
      >
        {{ title }}
      </h1>
    </div>
    <!-- <nuxt-link :to="link" class="flex items-center">
      More</nuxt-link> -->
  </div>
</template>
