//RGBColor Constructor
function RGBColor(red, green, blue) {
	this.r = red;
	this.g = green;
	this.b = blue;
}

//Get random color value
//***Make it flexible
function RandomColor(color) {
	color.r = (Math.floor((Math.random() * 128) + 1)) + 96;
	color.g = (Math.floor((Math.random() * 128) + 1)) + 96;
	color.b = (Math.floor((Math.random() * 128) + 1)) + 96;
}

//Load the image onto the canvas
function loadPonyIcon() {
	var element = document.getElementById("c1");
    var c = element.getContext("2d");
	
	//Get the image
	var imgData = document.getElementById("ponyIcon");
	imgData.crossOrigin = "Anonymous";
	
	//Draw the image on the canvas (img, x, y)
	c.drawImage(imgData, 0, 0);
}

//Set specific pixel of image
function setPixel(imageData, x, y, r, g, b, a) {
		var index = (x + y * imageData.width) * 4;
		imageData.data[index+0] = r;
		imageData.data[index+1] = g;
		imageData.data[index+2] = b;
		imageData.data[index+3] = a;
	}

//Change color of ponyIcon (random)
//***Process is a little complicated, fix it later
//***Later have it pick any canvas object with id
function randomPonyIcon() {
	//Initialize objects
	var elementObj = document.getElementById("c1");
    var canvasObj = elementObj.getContext("2d");
	
	//Load default ponyIcon
	var template = document.getElementById("ponyIcon");
	template.crossOrigin = "Anonymous"; //something about not being tainted
	
	//Draw the image on the canvas (img, x, y)
	canvasObj.drawImage(template, 0, 0);
	
	//Get width and height of canvas
	var canvasWidth = elementObj.width;
	var canvasHeight = elementObj.height;
	
	//Get image data from canvas
	var imageData = canvasObj.getImageData(0, 0, canvasWidth, canvasHeight);
	
	//Random rgb values 97-224
	var eyes = new RGBColor(0, 0, 0);
	RandomColor(eyes);
	var mane = new RGBColor(0, 0, 0);
	RandomColor(mane);
	var coat = new RGBColor(0, 0, 0);
	RandomColor(coat);
	
	//Replace with random colors
	for (var y = 0; y < canvasHeight; y++)
	{
		var pos = y * canvasWidth * 4; //4 for 4 ints per pixel
		for (var x = 0; x < canvasWidth; x++)
		{
			var r = imageData.data[pos++];
            var g = imageData.data[pos++];
            var b = imageData.data[pos++];
            var a = imageData.data[pos++];
			if (r > 250) 		//eyes
				{ setPixel(imageData, x, y, eyes.r, eyes.g, eyes.b, a); }
			else if (g > 250)	//mane
				{ setPixel(imageData, x, y, mane.r, mane.g, mane.b, a); }
			else if (b > 250)	//coat
				{ setPixel(imageData, x, y, coat.r, coat.g, coat.b, a); }
		}
	}
	
	//Output new ponyIcon
	canvasObj.putImageData(imageData, 0, 0);
}