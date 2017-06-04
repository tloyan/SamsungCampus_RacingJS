(function() {
	window.onload = function() {
		var x = document.querySelectorAll(".exercice>footer>div");
		x[0].onclick = Dial;
		function Dial() {
			var name = prompt("Quel est votre nom ?");
			name ? conf(name):Dial();
		}

		function conf(name) {
			var valid = confirm("Etes vous sûr que " + name + " est votre nom ?");
			valid ? ale(name):Dial();
		}

		function ale(name) {
			alert("Bonjour " + name + " !");
			x[0].innerHTML = "Bonjour " + name + " !";
		} 
	};
})()
