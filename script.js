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

//checking for previous entries in the local storage to pull first
var taskEvents = JSON.parse(localStorage.getItem("dayPlanner"));
if (taskEvents) {
  plannerDay = taskEvents;
}

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
function colorRow(dHour) {
  //formating for current task
  var taskCurrently = moment(currently, "H A");
  //formating for an entry for a later task
  var taskLater = moment(dHour, "H A");
  //if statement loop for color coating linked in the CSS document
  if (taskCurrently.isBefore(taskLater) === true) {
		return "future";
	} else if (taskCurrently.isAfter(taskLater) === true) {
		return "past";
	} else {
		return "present";
	}
}

//Save button 
$(".saveBtn").on("click", function() {
	var slotID = parseInt(
		$(this)
			.closest(".time-slot")
			.attr("id")
	);
	var userTask = $.trim(
		$(this)
			.parent()
			.siblings("textarea")
			.val()
	);
	plannerDay[slotID].event = userTask;

	/* Set local storage */
	localStorage.setItem("dayPlanner", JSON.stringify(plannerDay));
});

