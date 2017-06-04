var div;
var Fa;
var Fp;
var volume = 10000;
var masse = 1000;
var masse_volumique;
var masse_volumique_eau = 1;
var gravite = 9.81;
var vitess;
var i = 0.00001;
var r = 1;
var posT;

window.onload = function () {
	div = document.querySelectorAll(".ex_17>div")[2];
	posT = window.getComputedStyle(div, null).getPropertyValue("top");
	posT = parseInt(posT.slice(0, posT.length-2));
	div.addEventListener("click" ,function (){
 	masse += 1000;
	masse_volumique = masse / volume;
	Fp = masse_volumique * volume * gravite;
	Fa = masse_volumique_eau * volume * gravite;
	vitess = Fp - Fa;
	r++;
	div.innerHTML = r;
	var lance = setInterval(movement, 100);
	});
	
	function movement() {
		if (vitess > 0 && posT < 1150) {
			posT = posT + (i * vitess);
			div.style.top = posT + "px";
		}
	};
};
	