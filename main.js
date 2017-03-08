var treehouseContainer = document.getElementById("treehouse-container");

function makeDom (xhrData) {
	var treehouseString = "";
	var currentObject;
		currentObject = xhrData;

		treehouseString += `<div class="col-sm-6 col-md-4">`;
		treehouseString += `<div class="thumbnail">`;
		treehouseString += `<img src="${currentObject.gravatar_url}" alt="treehouse-profile">`;
		treehouseString += `<div class="caption">`;
		treehouseString += `<h3>${currentObject.name}</h3>`;
		treehouseString += `<p> Username: ${currentObject.profile_name}</p>`;
		treehouseString += `<p> Points: ${currentObject.points.total}</p>`;		
		treehouseString += `</div></div></div>`;
	treehouseContainer.innerHTML = treehouseString;
}

function executeThisCodeAfterFileLoad () {
	var data = JSON.parse(this.responseText);
	console.log("woo!", data);
	makeDom(data);
}

function executeThisCodeAfterFileFail () {
	console.log("failureeee!");
}


var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoad);
myRequest.addEventListener("error", executeThisCodeAfterFileFail);
myRequest.open("GET", "https://teamtreehouse.com/isabelramos.json");
myRequest.send();