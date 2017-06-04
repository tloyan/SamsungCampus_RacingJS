(function() {
	var str = "";
	document.onkeypress = function(pressed) {
		x = document.querySelectorAll(".exercice>footer>div");
		str += String.fromCharCode(pressed.charCode);
		if (str.length > 42) {
			str = str.slice(1, 43);
		}
		x[0].innerHTML = str;
	}
})();
