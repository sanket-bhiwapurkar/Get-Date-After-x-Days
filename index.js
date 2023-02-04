const addDays = require("date-fns/addDays");

const getAddedDate = (days) => {
  const d = addDays(new Date(2020, 7, 22), days);
  return `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;
};
//console.log(getAddedDate(3));
module.exports = getAddedDate;
