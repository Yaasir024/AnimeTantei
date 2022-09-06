<script setup>
const props = defineProps(['anime']);
</script>

<template>
  <div class="card">
    <div class="cover-img relative h-[325px] rounded-md overflow-hidden">
      <img src="/img/testpic.jpg" alt="" class="h-full w-full" />
      <div class="ep absolute top-2 left-2 bg-sk-blue-600 py-1 px-4 rounded">
        23/24
      </div>
    </div>
    <div class="pt-3 px-1 text-xl font-bold">
      Shingeki No Kyogin {{anime}}
    </div>
  </div>
</template>
