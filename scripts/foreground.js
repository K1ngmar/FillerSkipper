
function getShow() {
	var element = document.getElementById('titleleft');
	if (element == null)
		return null;
	var show = element.getAttribute('title');
	return show;
}

console.log(getShow());
