var i = 0;
(function() {
	var str = "";
	var tab = [37,37,39,40,38,40,37,39,39,65,66];
	document.onkeydown = function(event) {
		x = document.querySelectorAll(".exercice>footer>div");
		str = event.keyCode;
		if (str == tab[i]) {
			i++;
			if (i == 11) {
				x[0].innerHTML = "Hey! That's my Konami code!";
			}
		}
	}
})();
