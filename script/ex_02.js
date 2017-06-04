(function (){
	window.onload = function() {
		function incr() {
			x[0].innerHTML = i;
			i++;
		}
		var i = 1;
		var x = document.querySelectorAll(".exercice>footer>div");
		x[0].onclick = incr;
	};
})()
