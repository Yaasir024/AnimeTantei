import { defineStore } from "pinia";

export const useApiStore = defineStore({
  id: "api",
  state: () => ({
    counter: 10,
    topAiringAnime: [],
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
    getTopAiringAnime() {
        let filter = 'airing'
      fetch(`https://api.jikan.moe/v4/top/anime?filter=${filter}`)
        .then((response) => response.json())
        .then((response) => {
            this.topAiringAnime = response.data.slice(0,12)
            console.log(response.data)
        })
        .catch((err) => console.error(err));
    },
  },
});
