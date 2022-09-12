<template>
  <div class="rounded-md overflow-hidden animate-pulse">
    <div class="h-[270px] w-full bg-gray-200 dark:bg-gray-700"></div>
    <div class="h-2 bg-gray-200 rounded-lg dark:bg-gray-700 w-48 mt-4"></div>
  </div>
</template>

<style>
/* .skeleton {
  background-color: #313236;
  background-image: linear-gradient(to right, #50535a 0%, #656871 20%, #50535a 40%, #50535a 100%);
  background-size: 40px 100%;
  background-repeat: no-repeat;
  background-position: left -40px top 0;
  animation: shine 1s ease infinite;
} */
.skeleton {
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: placeHolderShimmer;
  -webkit-animation-timing-function: linear;
  background: #50535a;
  background-image: linear-gradient(
    to right,
    #50535a 0%,
    #656871 20%,
    #50535a 40%,
    #50535a 100%
  );
  background-repeat: no-repeat;
}

@keyframes shine {
  to {
    background-position: right -40px top 0;
  }
}
</style>
