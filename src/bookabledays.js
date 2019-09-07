
async function get(year, month) {
let Days = new Date(year, month,0);
let workingDay = new Array(5);
    workingDay[0] = "Monday";
    workingDay[0] = "Tuesday";
    workingDay[0] = "Wednesday";
    workingDay[0] = "Thursday";
    workingDay[0] = "Friday";

return workingDay[Days.getDay()];
}


module.exports = {
  get
};