<script setup> 
const year = ref(new Date().getFullYear())


</script>

<template>
  <div class="min-h-[40px] bg-dark-200 w-full">
    <div class="text-center py-10">
        <span>&copy; {{year}}</span>
      <nuxt-link to="/">
        <div class="logo text-xl font-bold italic">
          <p>anime<span class="text-sk-blue-600">tantei</span></p>
        </div>
      </nuxt-link>
      
    </div>
  </div>
</template>
