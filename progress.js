var progress = 0; //keep track of progress bar
var level = 0; //level of the bar, I guess

function moveProgressTest() {
  var elem = document.getElementById("barInside");   
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + "px"; 
    }
  }
}

function increaseProgressBar(points) {
	var elem = document.getElementById("barInside");
	progress += points;
	
	if (progress >= 100)
	{
		progress = 0;
		level++;
		document.getElementById("level").innerHTML = level;
	}
	
	elem.style.width = progress + "px"; //update bar
}

function decreaseProgressBar(points) {
	var elem = document.getElementById("barInside");
	progress -= points;
	
	if (progress < 0)
		progress = 0;
	
	elem.style.width = progress + "px"; //update bar
}