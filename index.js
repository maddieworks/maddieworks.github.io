function recurringDates(startDate, endDate, interval) {
    var date = startDate;
    var dates = [];

    while ((date = addDays(date, interval)) < endDate) {
        dates.push(date);
    }

    return dates;
}

function addDays(date, days) {
    var newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    return newDate;
}

function formatDate(date) {
	var year = date.getFullYear();
  var month = (1+date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;
  var day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;
  return month + '/' + day + '/' + year;
}

function checkDate(date) {
	var work = false;
	for (let i = 0; i < dates.length; i++) {
		var j = addDays(dates[i], 7);
    if (date.getTime() <= j.getTime()) {
    	console.log("j");
    }
    if (date.getTime() >= dates[i].getTime()) {
    	console.log("i");
    }
  	if (date.getTime() <= j.getTime() && date.getTime() >= dates[i].getTime()) {
      work = true;
  	}
  }
  if (work) {
  	answerElement.append("<div> yes work on " + formatDate(date) + "</div>");
  }
  else {
  	answerElement.append("<div> no work on " + formatDate(date) + "</div>");
  }
}

var startDate = new Date(2024, 2, 06);
var endDate = new Date(2026, 4, 29);
var interval = 14;
var dates = recurringDates(startDate, endDate, interval);
var answerElement = $("#answer");
var dateCheck = new Date();
var dateCheckElement = document.getElementById('checkDate'.value);

$(document).ready(function() {
	document.getElementById('checkDate').value = formatDate(dateCheck);
  checkDate(dateCheck);
});

/* answerElement.innerHTML = checkDate.getTime();*/
/* answerElement.append(checkDate.getTime()); */
/* document.getElementByID("checkDate").value("text"); */

const form = document.getElementById('form');

form.addEventListener("submit", function(e) {
	e.preventDefault();
  const data = new FormData(form);
  for (const [name,value] of data) {
  	var d = value.split("/");
  	dateCheck = new Date(d[2], parseInt(d[0])-1, d[1]);
    checkDate(dateCheck);
  }
});
