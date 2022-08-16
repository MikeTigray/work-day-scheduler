//Display current day using moment()
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
//Declared variables for respective times' text areas
var am8 = $("#8am");
var am9 = $("#9am");
var am10 = $("#10am");
var am11 = $("#11am");
var pm12 = $("#12pm");
var pm1 = $("#1pm");
var pm2 = $("#2pm");
var pm3 = $("#3pm");
var pm4 = $("#4pm");
var pm5 = $("#5pm");
var times = [am8, am9, am10, am11, pm12, pm1, pm2, pm3, pm4, pm5];
// a for loop to set past, present ,and future
for (i = 0; i < times.length; i++) {
  if (times[i].attr("data-time") < today.hour()) {
    times[i].addClass("past");
  } else if (times[i].attr("data-time") == today.hour()) {
    times[i].addClass("present");
  } else if (times[i].attr("data-time") > today.hour()) {
    times[i].addClass("future");
  }
}
