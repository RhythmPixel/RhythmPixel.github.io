var rhythmProgress = 0;
var rhythmId = 0; //to hold rhythm timer
var rhythmElem = document.getElementById("rhythmInside");

function moveRhythmTest() {
	if (rhythmId != 0)
		return;
    
    rhythmId = setInterval(frame, 25);
    function frame() {
        if (rhythmProgress >= 100)
		{
            rhythmProgress = 0;
        }
		
		else 
		{
            rhythmProgress++; 
            rhythmElem.style.width = rhythmProgress + 'px';
        }
		
		if (rhythmProgress >= 75)
			document.getElementById("stopRhythm").innerHTML = 4;
		else if (rhythmProgress >= 50)
			document.getElementById("stopRhythm").innerHTML = 3;
		else if (rhythmProgress >= 25)
			document.getElementById("stopRhythm").innerHTML = 2;
		else if (rhythmProgress >= 0)
			document.getElementById("stopRhythm").innerHTML = 1;
    }
}

function pressRhythmTest() {
	if (rhythmProgress >= 95 || rhythmProgress <= 5)
		document.getElementById("startRhythm").innerHTML = "Hit!";
	else if (rhythmProgress >= 20 && rhythmProgress <= 30)
		document.getElementById("startRhythm").innerHTML = "Hit!";
	else if (rhythmProgress >= 45 && rhythmProgress <= 55)
		document.getElementById("startRhythm").innerHTML = "Hit!";
	else if (rhythmProgress >= 70 && rhythmProgress <= 80)
		document.getElementById("startRhythm").innerHTML = "Hit!";
	else
	{
		document.getElementById("startRhythm").innerHTML = "Miss!";
		decreaseProgressBar(4);
		return;
	}
	
	increaseProgressBar(5);
}

function stopRhythm() {
	clearInterval(rhythmId);
	rhythmId = 0;
	rhythmProgress = 0;
	document.getElementById("startRhythm").innerHTML = "Start";
	document.getElementById("stopRhythm").innerHTML = "Stop";
}