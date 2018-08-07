var d = new Date();
var current_day = d.getDay()
var el = document.getElementsByClassName("workout_day");
var activity_day = ["Last Completed Day","Day 1","Day 2","Day 3","Day 4","Day 5","Day 6","Day 7"];
var activity_day_selector = document.getElementById("activity_day_selector");
var completeDay = document.getElementById("complete_day");

completeDay.addEventListener("click",updateCompleteDayMessage);
// Update the class elements indicating the current workout day. 
// This will update to the day of the week, NOTE: may need adjustment based on usage.
function updateWorkoutDays () {
    for(var i = 0; i < el.length; i++) {
        el[i].innerHTML = current_day + 1;
    }
}

function updateActivityDaySelector() {
    activity_day.forEach(function(element){
        var opt = document.createElement("option");
        opt.innerHTML = element;
        opt.value = element;
        activity_day_selector.appendChild(opt);
    });
}

function updateCompleteDayMessage() {
    document.getElementById("message").innerHTML = "Nice Job!!";
}



updateWorkoutDays();
updateActivityDaySelector();



