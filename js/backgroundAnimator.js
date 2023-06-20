const max = 255;
const min = 128;
let red = 128;
let green = 206;
let blue = 255;

setInterval("changeBackground()", 200);

function changeBackground() {
	if (red === min && blue === max && green < max) {  //increase green to max
		green++;
	}
	else if (red === min && green === max && blue > min) {  //decrease blue to min
		blue--;
	}
	else if (green === max && blue === min && red < max) {  //increase red to max
		red++;
	}
	else if (red === max && blue === min && green > min) {  //decrease green to min
		green--;
	}
	else if (red === max && green === min && blue < max) {  //increase blue to max
		blue++;
	}
	else if (green === min && blue === max && red > min) {  //decrease red to min
		red--;
	}

	document.getElementById("programMain").style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
	document.getElementById("programBody").style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}