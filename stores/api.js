import { defineStore } from "pinia";

export const useApiStore = defineStore({
  id: "api",
  state: () => ({
    counter: 10,
    topAiringAnime: [],
    topOngoingManga: [],
    mostPopularAnime: [],
    todayAnime: [],
    currentAnime: [],
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
    getTopAiringAnime() {
      let filter = "airing";
      fetch(`https://api.jikan.moe/v4/top/anime?filter=${filter}`)
        .then((response) => response.json())
        .then((response) => {
          this.topAiringAnime = response.data.slice(0, 12);
          // console.log(response.data)
        })
        .catch((err) => console.error(err));
    },
    getTopOngoingManga() {
      let filter = "publishing";
      fetch(`https://api.jikan.moe/v4/top/manga?filter=${filter}`)
        .then((response) => response.json())
        .then((response) => {
          this.topOngoingManga = response.data.slice(0, 12);
          //   console.log(response.data);
        })
        .catch((err) => console.error(err));
    },
    getMostPopularAnime() {
      let filter = "bypopularity";
      fetch(`https://api.jikan.moe/v4/top/anime?filter=${filter}`)
        .then((response) => response.json())
        .then((response) => {
          this.mostPopularAnime = response.data.slice(0, 5);
          //   console.log(response.data)
        })
        .catch((err) => console.error(err));
    },
    getAnimeSchedule(day) {
      fetch(`https://api.jikan.moe/v4/schedules?filter=${day}`)
        .then((response) => response.json())
        .then((response) => {
          this.todayAnime = response.data.slice(0, 5);
          //   console.log(response.data)
        })
        .catch((err) => console.error(err));
    },
    getAnimeById(id) {
      fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
        .then((response) => response.json())
        .then((response) => {
          this.currentAnime = response.data;
          console.log(response.data, "anime");
        })
        .catch((err) => console.error(err));
    },
  },
});
