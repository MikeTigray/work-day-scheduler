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
//declared variables for button
var button1 = $("#btn-1");
var button2 = $("#btn-2");
// variables of chores retrieved from local storage
var retrieved1 = am8.text(localStorage.getItem("chores"));
// var retrieved2 = am9.text(localStorage.getItem("chores"));

// array for all time variables
var times = [am8, am9, am10, am11, pm12, pm1, pm2, pm3, pm4, pm5];
// console.log(times);
// localStorage.setItem("array", JSON.stringify(times));
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
//array to put to local storage
var object = {
  input1: am8.val(),
  input2: am9.val(),
  input3: am10.val(),
  input4: am11.val(),
  input5: pm12.val(),
  input6: pm1.val(),
  input7: pm2.val(),
  input8: pm3.val(),
  input9: pm4.val(),
  input10: pm5.val(),
};

button1.on("click", function () {
  localStorage.setItem("chores", am8.val());
});
button2.on("click", function () {
  localStorage.setItem("chores", am9.val());
});

console.log(object.input1);
// button2.on("click", function () {
//   localStorage.setItem("chores", am9.val());
// });
//   localStorage.setItem("chores", am9.val());
//   localStorage.setItem("chores", am10.val());
//   localStorage.setItem("chores", am11.val());
//   localStorage.setItem("chores", pm12.val());
//   localStorage.setItem("chores", pm1.val());
//   localStorage.setItem("chores", pm2.val());
//   localStorage.setItem("chores", pm3.val());
//   localStorage.setItem("chores", pm4.val());
//   localStorage.setItem("chores", pm5.val());

// am8.val(retrieved);
// am9.val(retrieved);
// am10.val(retrieved);
// am11.val(retrieved);
// pm12.val(retrieved);
// pm1.val(retrieved);
// pm2.val(retrieved);
// pm3.val(retrieved);
// pm4.val(retrieved);
// pm5.val(retrieved);
