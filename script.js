const currentDaySpan = document.querySelector("#currentDay");

var date = moment().format("dddd MMMM Do")
//var date = moment();
var dateArr = date.split(" ");
console.log(dateArr);
currentDaySpan.textContent = dateArr[0] + ", " + dateArr[1] + " " + dateArr[2];
