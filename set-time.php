<!DOCTYPE html>
<html lang="en">
<head>
    <!--Created by Alvaro Castro Cid-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Set-Time</title>
</head>
<body>

<ul class="nav-bar"><li><button id="backButton" onclick="homeRedirect()">Back</button></li></ul>

<ul class="hud-display">
    <li id="showTime">min: 0 sec: 00</li>
    <li id="timeGoal"></li>
</ul>

<div class="main-container">
    <ul>
        <li> 
            <button id="startButton" onclick="start()">Start</button>
            <button id="stopButton" onclick="stop()">Stop</button>
            <button id="saveButton" onclick="save()">Save</button>
        </li>
    </ul>
</div>

<button id="sound" onclick="playSound('sine', 2.0)">Sound</button>

</body>
<?php 

    $_POST["goal"];

    echo
        '<script type="text/javascript">
            let totalSeconds = 0;
            let totalMinutes = 0;
            let timeValues = [];
            let valArr = [];
            //time goal value will be dynamic
            let timeGoal = '.$_POST["goal"].';
            //displays goal to user
            document.getElementById("timeGoal").innerHTML= "goal: '.$_POST["goal"].' min";
            //hide stop & save button on initital page load
            document.getElementById("stopButton").style.display = "none";
            document.getElementById("saveButton").style.display = "none";';
            
            //constructs timer including alarm 
    echo
        '   //run time, return minute and second time values
            function timer() {

                totalSeconds++;

                if (totalSeconds === 60) {
                    totalSeconds = 0;
                    totalMinutes++;
                } 

                document.getElementById("showTime").innerHTML = 
                "min: " + totalMinutes + " sec: " + totalSeconds;

                //indicates when youve met goal
                if (totalMinutes == timeGoal) {
                    document.getElementById("timeGoal").innerHTML = "Goal met!";
                }
                //alarm 
                if (totalMinutes == timeGoal && totalSeconds < 1) {document.querySelector("#sound").click();}

                timeValues.push(totalMinutes);

            }';

            //runs timer function on a interval displays stop button
    echo
        '   //start timer display stop button, hide save button, display goal
            function start() {
                //1000 milli = 1 sec
                runningTimer = window.setInterval(timer, 1000);
                
                document.getElementById("timeGoal").innerHTML= "goal: '.$_POST["goal"].' min";
                document.getElementById("saveButton").style.display = "none";
                document.getElementById("startButton").style.display = "none";
                document.getElementById("stopButton").style.display = "inline";

            }';

            //clears interval hides stop and shows start and save buttons
    echo    
        '   //stop timer display start button, display save button
            function stop(){

                window.clearInterval(runningTimer);
                document.getElementById("saveButton").style.display = "inline";
                document.getElementById("stopButton").style.display = "none";
                document.getElementById("startButton").style.display = "inline";

            }';

            //evaluates progress toward goal 
    echo 
        '
            //show status markers in place of time and goal, hides save button
            function save() {

                let timeWorked = timeValues.pop();
                let timeLeft = timeGoal - timeWorked;

                document.getElementById("saveButton").style.display = "none";
                //hide timeWorked value until time has passed one minute
                if (timeWorked < 1 || timeWorked == undefined) {
                    document.getElementById("showTime").innerHTML = "Progress : 0 min";
                    document.getElementById("timeGoal").style.display = "none";
                } else {
                    document.getElementById("showTime").innerHTML = `Progress : ${timeWorked}  min`;
                    document.getElementById("timeGoal").style.display = "inline";
                }
                
                if (timeWorked > timeGoal) {
                    document.getElementById("timeGoal").innerHTML = `Overtime : ${timeWorked - timeGoal} min`;
                } else { 
                    document.getElementById("timeGoal").innerHTML = `${timeLeft} more minutes!`;
                }
            }

            </script>
            ';
        
   
?>
<script> 
    function homeRedirect(){
        let userResp = confirm("Are you sure you'd like to go back? Your progress will be deleted");
        if (userResp == true) {
            location.replace("index.html");
        } else {
            //takes away confirm prompt upon pressing cancel
        }
    }
</script>

<script>
    let context = new AudioContext();
    let o = null;
    let g = null;

    //sound that is created when user meets goal 
    function playSound(type, x) {
        o = context.createOscillator()
        g = context.createGain()
        o.connect(g)
        o.type = type
        g.connect(context.destination)
        o.start(0)

        g.gain.exponentialRampToValueAtTime(
            0.00001, context.currentTime + x
        )
    }
</script>
</html>
<style><?php include("time-styles.css")?></style>