var penColour = 'black';

window.addEventListener("load", function(event) {
    console.log("All resources finished loading!");

var pixel = document.getElementById('art');

for(var i = 0; i < 500; i++) {
	pixel.innerHTML += "<div class='pixel' onclick='setPixelColour(this)'></div>";

	if(i % 100 == 0) {
	}
	
}


var divArray = document.getElementById('palette');

for(var i = 0; i < 8; i++) {
	var color = Math.random() * (10,25) + 10;
	var r = Math.floor(Math.random()*256);          // Random between 0-255
var g = Math.floor(Math.random()*256);          // Random between 0-255
var b = Math.floor(Math.random()*256);          // Random between 0-255
var rgb = 'rgb(' + r + ',' + g + ',' + b + ')'; // Collect all to a string
	var color = divArray.querySelectorAll('div')[i];
	color.style.backgroundColor = rgb;
	color.setAttribute('data-color', rgb)
}

});


function setPenColour(event)
{
  penColour = event.target.getAttribute('data-color');
}

function setPixelColour(pixel)
{
  pixel.style.backgroundColor = penColour;
}
