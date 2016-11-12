/* var cookies = 0;
var cursors = 0;
var counter = 0;

//Increase cookies counter by number
function cookieClick(number) {
	cookies += number;
	document.getElementById("cookies").innerHTML = cookies;
};

//Increase cursors by 1
function buyCursor() {
	var cursorCost = Math.floor(10 * Math.pow(1.1, cursors)); 	//cost of cursor
	if (cookies >= cursorCost) {								//if cookies higher than cookieCost, buy cursor
		cursors++;												//increment cursors
		cookies -= cursorCost;									//decrease cookies by cursorCost
		document.getElementById("cookies").innerHTML = cookies; //update cookies text
		document.getElementById("cursors").innerHTML = cursors; //update cursors text
	};
	var nextCost = Math.floor(10 * Math.pow(1.1, cursors));		//next cost of cursor (same if false)
	document.getElementById("cursorCost").innerHTML = nextCost;	//update cursorCost text
}; */

//Game loop
/* window.setInterval(function(){
	
	cookieClick(cursors);
	
}, 250); */