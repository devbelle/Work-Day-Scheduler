//variable to get current date 
var today = moment().format("dddd, MMMM Do YYYY ");

//variable to current time
var currently = moment().format("H A");

// current day
$("#currentDay").text(today);


//Variable array for each entry box
 var plannerDay = [];
//for loop for the time attribute in the dayPlanner object.
 for (time = 9; time <= 17; time++) {
  //variable for the ID which is time minus 9 for the fitst 9:00am timeslot. 
  var id = time - 9;
  //variable for dataPlanner as a string
  var dataPlanner = "";
  //variable for planner hour
  var dHour = 0;

//variable for am and pm as a string
  var ampm = "";

// for loop to get am and pm
  if (time === 12) {
    dHour = 12;
    ampm = "pm";
  } else if (time > 12) {
    dHour = time - 12;
    ampm = "pm";
  } else if (time < 12) {
    dHour = time;
    ampm = "am";
  }

  //to get teh hour value as a string
  dHour = dHour.toString();
// data planner as an onbject to fill in above 
  dataPlanner = {
    id: id,
    dHour: dHour,
    time: time,
    ampm: ampm,
    dataPlanner: dataPlanner,
  };
  //Linking the array variable plannerDay to the dataPlanner object. 
  plannerDay.push(dataPlanner);
}

//Create function for settting items though local storage
//Create function for getting items from local storage


//Create function that pulls more time slot entries. Will need to create html elements in javascript.
//Will need to link created elements to container element in html
//for creating each row. Use forEach to create my div tages and place the necessary selector from the plannerDay array
plannerDay.forEach(function(timeSlot, index) {
  //the hour slot for each selection
	var timeHour = timeSlot.time;
  //each fill in color will be dependent on the hour of the day
	var slotColor = colorRow(timeHour);
  //the row format, the same as the base index.html file selector info where the new div container is now.
	var row =
		'<div class="time-slot" id= "' +
    //array to pull information from
		index +
		'"><div class="row no-gutters input-group"><div class="col-sm col-lg-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3">' +
		//the hour a user is entering their tasks on
    timeHour +
		'</div><textarea class="form-control ' +
    //adding the color for past, present, or future
		slotColor +
		'">' +
    //the user entry slot where the user will type out what they want to do.
		timeSlot.event +
		'</textarea><div class="col-sm col-lg-1 input-group-append"><button class="saveBtn btn-block" type="submit"><i class="fas fa-save"></i></button></div></div></div>';

	// Addiing additional rows for the other time slots
	$(".container").append(row);
});

//Create a function to select color of past, present, and future in CSS to html in javascript.

// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  //for save button
  addEventListener
  //Click Event will be related to saving local storage.
  


  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  //
  //append new hour-x IDs for the new time slots
  //link localStoragesetIem with time ID
  //
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
