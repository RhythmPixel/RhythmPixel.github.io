var MineCell = {
	ore: 1,
	//time: 1, //experimental thing
	mine: 1
};

var mineAreaSize = 25;
var mineArea = [1,  2,  3,  4,  5,
				6,  7,  8,  9,  10,
				11, 12, 13, 14, 15,
				16, 17, 18, 19, 20,
				21, 22, 23, 24, 25];
				
var miner = 0; //***test workers, should be an array for ponies
var mineTimerID = 0; //stores mineTimer id to clear later
var minerToggle = 0; //toggle miners on or off

//Chooses ore based on rarity
//***Update rarities, should be hard to get rare things
function ChooseOre(cell) {
	//Start from rarest to common default (rock)
	var randNumber = Math.floor((Math.random() * 100) + 1);
	
	//***Is there a switch statement?
	if (randNumber >= 99)
		mineArea[cell].ore = 10; //arcanite
	else if (randNumber > 90)
		mineArea[cell].ore = 9; //crystal
	else if (randNumber > 80)
		mineArea[cell].ore = 8; //gems
	else if (randNumber > 70)
		mineArea[cell].ore = 7; //airite
	else if (randNumber > 60)
		mineArea[cell].ore = 6; //gold
	else if (randNumber > 50)
		mineArea[cell].ore = 5; //silver
	else if (randNumber > 40)
		mineArea[cell].ore = 4; //iron
	else if (randNumber > 30)
		mineArea[cell].ore = 3; //coal
	else if (randNumber > 20)
		mineArea[cell].ore = 2; //copper
	else
		mineArea[cell].ore = 1; //rock
}

//Color of background based on ore
//***Get better colors
function BackgroundColor(id, ore) {
	//Start with common to rarest
	if (ore == 1) 		//rock
		document.getElementById(id).style.backgroundColor = "grey";
	else if (ore == 2)  //copper
		document.getElementById(id).style.backgroundColor = "brown";
	else if (ore == 3)  //coal
		document.getElementById(id).style.backgroundColor = "black";
	else if (ore == 4)  //iron
		document.getElementById(id).style.backgroundColor = "darkgrey";
	else if (ore == 5)  //silver
		document.getElementById(id).style.backgroundColor = "lightgrey";
	else if (ore == 6)  //gold
		document.getElementById(id).style.backgroundColor = "yellow";
	else if (ore == 7)  //airite
		document.getElementById(id).style.backgroundColor = "cyan";
	else if (ore == 8)  //gems
		document.getElementById(id).style.backgroundColor = "red";	
	else if (ore == 9)  //crystal
		document.getElementById(id).style.backgroundColor = "blue";	
	else if (ore == 10) //arcanite
		document.getElementById(id).style.backgroundColor = "purple";
	else
		document.getElementById(id).sytle.backgroundColor = "black";
}

//Fill the mineArea array
//***Maybe multiply mine by ore type (rare = harder)
function FillMineArea() {
	for (i = 0; i < mineAreaSize; i++)
	{
		mineArea[i] = Object.create(MineCell);
		ChooseOre(i);
		//mineArea[i].time = 0;
		mineArea[i].mine = Math.floor((Math.random() * 10) + 1);
	}
}

//Setup the mining area on page
function SetupMineArea() {
	FillMineArea();
	var i = 0;
	
	for (x = 1; x <= 5; x++)
	{
		for (y = 1; y <= 5; y++)
		{
			i = ((x * 5 - 5) + y) - 1;
			var id = "x" + x + "y" + y;
			document.getElementById(id).innerHTML = mineArea[i].mine;
			document.getElementById(id).style.backgroundColor = "transparent";
		}
	}
}

//When user clicks on cell, decrease by clickPower
function BreakCell(id, cell, power) {
	if (mineArea[cell].mine <= 0)
		return;
	
	mineArea[cell].mine -= power;
	
	if (mineArea[cell].mine <= 0)
	{
		document.getElementById(id).innerHTML = "";
		BackgroundColor(id, mineArea[cell].ore);
		increaseProgressBar(mineArea[cell].ore);
	}
	
	else
		document.getElementById(id).innerHTML = mineArea[cell].mine;
}

function AddMiner() {
	miner++;
	document.getElementById("miner").innerHTML = miner; //update miner
}

function ToggleMiner() {
	if (minerToggle == 0)
	{
		mineTimerID = setInterval(MinerWork, 1000);
		minerToggle = 1;
	}
	else
	{
		clearInterval(mineTimerID);
		minerToggle = 0;
	}
}

function MinerWork() {
	for (j = 1; j <= miner; j++)
	{
		//Get a random id "x" + x + "y" + y
		var randX = Math.floor((Math.random() * 5) + 1);
		var randY = Math.floor((Math.random() * 5) + 1);
		var mineID = "x" + randX + "y" + randY;
		var mineCell = ((randX * 5 - 5) + randY) - 1;
		BreakCell(mineID, mineCell, 1);
	}
}

document.addEventListener("DOMContentLoaded", function() {
  SetupMineArea();
});