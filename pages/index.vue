<template>
  <div class="min-h-screen text-white bg-dark-100">
    <Navbar />
    <div class="max-w-[1220px] mx-auto px-6 ">
      <!-- <Carousel /> -->
      <div class="row flex flex-wrap pt-5">
        <div class="left flex-2 px-4">
          <HomeSectionTrending />
        </div>
        <div class="right flex-3 px-4">
          <HomeSectionSchedule />
        </div>
      </div>
      <h1 class="text-red-500">Home Page</h1>
    </div>
  </div>
</template>
