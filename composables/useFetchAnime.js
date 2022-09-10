export default () => {
  const animeDetails = useState("animeDetails", () => []);

  const searchDetails = (id) => {
    animeDetails.value = []

    const url = `https://api.jikan.moe/v4/anime/${id}/full`;

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        animeDetails.value = response.data;
      })
      .catch((err) => console.error(err));
  };
  return {
    animeDetails,
    searchDetails,
  };
};
