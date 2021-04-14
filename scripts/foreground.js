
function getShow() {
		var show = document.getElementById('titleleft').getAttribute('title');
	return show;
}

console.log(getShow());

var file	= new XMLHttpRequest();
var url		= chrome.runtime.getURL("./data/fillers.json")
var my_JSON_object = JSON.parse(file.responseText);
console.log(my_JSON_object.result[0]);