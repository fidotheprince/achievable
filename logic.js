//variables with set interval function need to be global
let totalSeconds = 0;
let totalMinutes = 0;
let timeValues = [];
let valArr = [];


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

    timeValues.push(totalMinutes);

}

//start timer display stop button, hide save button
function start() {

    runningTimer = window.setInterval(timer, 1000);
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
    let dispVal = timeValues.pop();   

    let li = document.createElement("li");
    let textNode = document.createTextNode(dispVal);
    li.appendChild(textNode);

    document.getElementById("results").appendChild(li);

    //have item popped be dynamically be rendered in a td tag
    //display total time 
}

/* say congradulations you are one step closer to your goal  */