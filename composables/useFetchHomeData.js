export default () => {
  const animeByPopularity = useState("animeByPopularity", () => []);
  const trendingAnimeData = useState("trendingAnimeData", () => []);
  const popularMangaData = useState("popularMangaData", () => []);
  const upcomingAnimeData = useState("upcomingAnimeData", () => []);

  const getAnimeByPopularity = (filter) => {
    const url = `https://api.jikan.moe/v4/top/anime?filter=${filter}`;

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        animeByPopularity.value = response.data.slice(0, 5);
      })
      .catch((err) => console.error(err));
  };
  const getTrendingAnime = (filter) => {
    const url = `https://api.jikan.moe/v4/top/anime?filter=${filter}`;

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        trendingAnimeData.value = response.data.slice(0, 12);
      })
      .catch((err) => console.error(err));
  };
  const getPopularManga = (filter) => {
    const url = `https://api.jikan.moe/v4/top/manga?filter=${filter}`;

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        popularMangaData.value = response.data.slice(0, 12);
      })
      .catch((err) => console.error(err));
  };
  const getUpcomingAnime = (filter) => {
    const url = `https://api.jikan.moe/v4/top/anime?filter=${filter}`;

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        upcomingAnimeData.value = response.data.slice(0, 5);
      })
      .catch((err) => console.error(err));
  };
  return {
    animeByPopularity,
    trendingAnimeData,
    popularMangaData,
    upcomingAnimeData,
    getAnimeByPopularity,
    getTrendingAnime,
    getPopularManga,
    getUpcomingAnime,
  };
};
