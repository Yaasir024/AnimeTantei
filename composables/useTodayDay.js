export default () => {
  let a = new Date();
  let weekdays = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  let r = weekdays[a.getDay()];
  return {
    todayDay: r,
  };
};
