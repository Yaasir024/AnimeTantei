export default () => {
  const animeDetails = useState("animeDetails", () => []);
  const mangaDetails = useState("mangaDetails", () => []);

  const searchAnimeDetails = (id) => {
    animeDetails.value = []

    const url = `https://api.jikan.moe/v4/anime/${id}/full`;

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        animeDetails.value = response.data;
      })
      .catch((err) => console.error(err));
  };
  const searchMangaDetails = (id) => {
    mangaDetails.value = []
  
  const url = `https://api.jikan.moe/v4/manga/${id}/full`;

  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      mangaDetails.value = response.data;
    })
    .catch((err) => console.error(err));
};
  return {
    animeDetails,
    mangaDetails,
    searchAnimeDetails,
    searchMangaDetails,
  };
};
