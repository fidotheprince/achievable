//variables with set interval function need to be global
let totalSeconds = 0;
let totalMinutes = 0;
let runningTimer;

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

    let timeValues = [totalMinutes, totalSeconds];

    return timeValues;
}

//start timer display stop button, hide save button
function start() {

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

//clear visual time, save current time
function save() {

    let savedValues = timer();
    let addedMinutes = savedValues[0];
    let addedSeconds = savedValues[1];

    document.getElementById("results").innerHTML = "Total Time: " + addedMinutes + " : " + addedSeconds;
    console.log(addedMinutes, addedSeconds);

    window.location.reload();

}

/* say congradulations you are one step closer to your goal å */