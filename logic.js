//variables with set interval function need to be global
let totalSeconds = 0;
let totalMinutes = 0;
let timeValues = [];
let valArr = [];
//time goal value will be dynamic
let timeGoal = 100;
//displays goal to user
document.getElementById("timeGoal").innerHTML = `Goal: ${timeGoal} min`;
//hide stop & save button on initital page load
document.getElementById('stopButton').style.display = "none";
document.getElementById('saveButton').style.display = "none";

//run time, return minute and second time values
function timer() {

    totalSeconds++;

    if (totalSeconds === 60) {
        totalSeconds = 0;
        totalMinutes++;
    } 

    document.getElementById("showTime").innerHTML = 
    "min: " + totalMinutes + " sec: " + totalSeconds;

    //indicates when you've met goal
    if (totalMinutes == timeGoal) {
        document.getElementById("status").innerHTML = "You've met your goal!";
    }

    timeValues.push(totalMinutes);

}

//start timer display stop button, hide save button
function start() {
    //1000 milli = 1 sec
    runningTimer = window.setInterval(timer, 1);

    document.getElementById('saveButton').style.display = "none";
    document.getElementById('startButton').style.display = "none";
    document.getElementById('stopButton').style.display = "inline";

}

//stop timer display start button, display save button
function stop(){

    window.clearInterval(runningTimer);
    document.getElementById('saveButton').style.display = "inline";
    document.getElementById('stopButton').style.display = "none";
    document.getElementById('startButton').style.display = "inline";


}


function save() {
    let timeWorked = timeValues.pop();
    document.getElementById("progress").innerHTML = `Time worked : ${timeWorked}  min`;
    let timeLeft = timeGoal - timeWorked;
    document.getElementById("status").innerHTML = `${timeLeft} more minutes!`;
}

/* say congradulations you are one step closer to your goal  */