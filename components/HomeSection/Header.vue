<script setup>
import { useCounterStore } from "~/stores/counter";
const props = defineProps(["title", "link"]);

const counter = useCounterStore();
</script>

<template>
  <div class="header flex items-center justify-between pb-3">
    <div class="title">
      <h1
        class="text-2xl capitalize font-semibold leading-5 pl-5 relative before:absolute before:left-0 before:top-[-6px] before:h-8 before:w-1 before:bg-sk-blue-600"
      >
        {{ title }}
      </h1>
    </div>
    <nuxt-link :to="link" class="flex items-center">
      <span class="mr-2">VIEW ALL</span>
      <svg
        clip-rule="evenodd"
        fill-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="2"
        viewBox="0 0 24 24"
        height="24"
        width="24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
          fill-rule="nonzero"
        />
      </svg>
    </nuxt-link>
  </div>
</template>
