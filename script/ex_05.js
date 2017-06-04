(function () {
	window.onload = function() {
	var i = 16;
	function more() {
		i++;
		document.getElementsByTagName("body")[0].style.fontSize = i + "px";
	}
	function less() {
		i--;
		document.getElementsByTagName("body")[0].style.fontSize = i + "px";
	}
	function color() {
		document.getElementsByTagName("body")[0].style.backgroundColor = document.querySelectorAll(".exercice>footer>div>select")[0].value;
	}
	var moreX = document.querySelectorAll(".exercice>footer>div>*");
	moreX[0].onclick = more;
	moreX[1].onclick = less;
	moreX[2].onclick = color;
	}
})();
