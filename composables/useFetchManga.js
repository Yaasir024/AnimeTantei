export default () => {
    const mangaDetails = useState("mangaDetails", () => []);
  
    const searchDetails = (id) => {
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
      mangaDetails,
      searchDetails
    };
  };
  