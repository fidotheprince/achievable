//variables with set interval function need to be global
let totalSeconds = 0;
let totalMinutes = 0;
let totalHours = 0;
let runningTimer;


//hide stop button on initital page load
document.getElementById('stopButton').style.display = "none";


function timer() {

    totalSeconds++;

    if (totalSeconds === 60) {
        totalSeconds = 0;
        totalMinutes++;
    } else if (totalMinutes === 60) {
        totalMinutes = 0;
        totalHours++;
    }
    
    document.getElementById("showTime").innerHTML = 
    totalHours + " : " + totalMinutes + " : " + totalSeconds;
}

//start timer display stop button
function start() {

    runningTimer = window.setInterval(timer, 1);
    document.getElementById('startButton').style.display = "none";
    document.getElementById('stopButton').style.display = "inline";

}

//stop timer display start button
function stop(){

    window.clearInterval(runningTimer);
    document.getElementById('stopButton').style.display = "none";
    document.getElementById('startButton').style.display = "inline";

}

