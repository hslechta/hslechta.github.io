let count = 1;
setInterval("changeImage()", 5000);

function changeImage() {
	let imageElem = document.getElementById(`photo${count}`);
	const randomNum = Math.floor(Math.random() * 11) + 1;
	imageElem.src = `assets/images/homepage${randomNum}.jpg`;
	if (count < 3) {
		count++;
	}
	else {
		count = 1;
	}
}