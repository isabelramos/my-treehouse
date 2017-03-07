function executeThisCodeAfterFileLoad () {
	var data = JSON.parse(this.responseText);
	console.log("woo!", data);
	// makeDom(data);
}

function executeThisCodeAfterFileFail () {
	console.log("failureeee!");
}


var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoad);
myRequest.addEventListener("error", executeThisCodeAfterFileFail);
myRequest.open("GET", "https://teamtreehouse.com/isabelramos.json");
myRequest.send();