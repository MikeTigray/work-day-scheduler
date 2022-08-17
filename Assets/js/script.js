//The below variable display current day using moment()
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

// variables of chores retrieved from local storage/All chores are stored in different keys
var retrieved8 = am8.text(localStorage.getItem("chores8"));
var retrieved9 = am9.text(localStorage.getItem("chores9"));
var retrieved10 = am10.text(localStorage.getItem("chores10"));
var retrieved11 = am11.text(localStorage.getItem("chores11"));
var retrieved12 = pm12.text(localStorage.getItem("chores12"));
var retrieved13 = pm1.text(localStorage.getItem("chores13"));
var retrieved14 = pm2.text(localStorage.getItem("chores14"));
var retrieved15 = pm3.text(localStorage.getItem("chores15"));
var retrieved16 = pm4.text(localStorage.getItem("chores16"));
var retrieved17 = pm5.text(localStorage.getItem("chores17"));

// array for all time variables
var times = [am8, am9, am10, am11, pm12, pm1, pm2, pm3, pm4, pm5];

// a for loop to set past, present ,and future colors for time blocks
for (i = 0; i < times.length; i++) {
  if (times[i].attr("data-time") < today.hour()) {
    times[i].addClass("past");
  } else if (times[i].attr("data-time") == today.hour()) {
    times[i].addClass("present");
  } else if (times[i].attr("data-time") > today.hour()) {
    times[i].addClass("future");
  }
}
//When save buttons are clicked....
$(".saveBtn").on("click", function () {
  var buttonId = $(this).attr("id");
  // below if statements/conditions store the values entered by user to local storage
  if (buttonId == "btn-8") {
    localStorage.setItem("chores8", am8.val());
  } else if (buttonId == "btn-9") {
    localStorage.setItem("chores9", am9.val());
  } else if (buttonId == "btn-10") {
    localStorage.setItem("chores10", am10.val());
  } else if (buttonId == "btn-11") {
    localStorage.setItem("chores11", am11.val());
  } else if (buttonId == "btn-12") {
    localStorage.setItem("chores12", pm12.val());
  } else if (buttonId == "btn-13") {
    localStorage.setItem("chores13", pm1.val());
  } else if (buttonId == "btn-14") {
    localStorage.setItem("chores14", pm2.val());
  } else if (buttonId == "btn-15") {
    localStorage.setItem("chores15", pm3.val());
  } else if (buttonId == "btn-16") {
    localStorage.setItem("chores16", pm4.val());
  } else if (buttonId == "btn-17") {
    localStorage.setItem("chores17", pm5.val());
  } else return;
});
