var routineCreateButton = document.getElementById("finish_add_routine");
var excerciseCreateButton = document.getElementById("finish_add_excercise");
var routineSelector = document.getElementById("excercise_routine_selector");
var routines = [];
var excercises = [];
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
    var validEntry = true;
    var excerciseName = document.getElementById("excercise_name").value;
    var excerciseType = document.getElementById("excercise_type").value;
    var excerciseWeight = document.getElementById("excercise_weight").value;
    var excerciseReps = document.getElementById("excercise_reps").value;

    if(excerciseName == "") {
        console.log("excercise name not entered");
        validEntry = false;
    }
    if(excerciseType == "") {
        console.log("excercise type not entered");
        validEntry = false;
    }
    if(excerciseWeight == "") {
        console.log("excercise weight not entered");
        validEntry = false;
    }
    if(excerciseReps == "") {
        console.log("excercise reps not entered");
        validEntry = false;
    }
    if(validEntry){
        excercises.push(new Excercise(excerciseName,excerciseType,excerciseWeight,excerciseReps,routineSelector.value));
    }
}

function Routine(name, day) {
    this.name = name;
    this.day = day;
}

function Excercise(name, type, weight, reps, routine){
    this.name = name;
    this.type = type;
    this.weight = weight;
    this.reps = reps;
    this.routine = routine;
}
