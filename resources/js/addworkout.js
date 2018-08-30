var routineCreateButton = document.getElementById("finish_add_routine");
var excerciseCreateButton = document.getElementById("finish_add_excercise");
var routineSelector = document.getElementById("excercise_routine_selector");
var routines = [];
// TODO add excercise creation and assignment to routine

routineCreateButton.addEventListener("click",createRoutine);
excerciseCreateButton.addEventListener("click",createExcerise);

function createRoutine() {
    var validEntry = true;
    var routineName = document.getElementById("routine_name").value;
    var routineDay = document.getElementById("routine_day").value;

    if( routineName == ""){
        console.log("routine name not entered");
        validEntry = false;
    }
    if( routineDay == "") {
        console.log("routine day not entered");
        validEntry = false;
    }
    if(validEntry){
        routines.push(new Routine(routineName,routineDay))
        //routine = new Routine(routineName,routineDay);
        var option = document.createElement("option");
        option.text = routineName;
        option.value = routines.length - 1;
        routineSelector.appendChild(option);
    }
}

function createExcerise() {

}

function Routine(name, day) {
    this.name = name;
    this.day = day;
}

