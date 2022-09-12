export default () => {
  const data = useState("data", () => []);

  const getData = (filter) => {
    data.value = [];

    const url = `https://api.jikan.moe/v4/top/anime?filter=${filter}`;

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        data.value = response.data.slice(0, 12);
        console.log(response.data, filter)
      })
      .catch((err) => console.error(err));
  };
  return {
    data,
    getData,
  };
};
