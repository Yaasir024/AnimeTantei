export default () => {
  const scheduleData = useState("data", () => []);

  const getData = (filter) => {
    const url = `https://api.jikan.moe/v4/schedules?filter=${filter}`;

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        scheduleData.value = response.data.slice(0, 12);
      })
      .catch((err) => console.error(err));
  };
  return {
    scheduleData,
    getData,
  };
};
