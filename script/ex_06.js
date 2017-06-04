(function () {
	window.onload = function () {
		var Hero = function (nom,classe,intel,force) {
				this.nom= nom[0].toUpperCase() + nom.slice(1, nom.length).toLowerCase();
                                this.classe=classe;
                                this.intel=intel;
                                this.force=force;
			Hero.prototype.toString = function(){
				var src = "Je suis " + this.nom + " le " + this.classe + ", j'ai " + this.intel;
				this.intel > 1 ? src += " points d'intelligence et " + this.force : src += " point d'intelligence et " + this.force;
				this.force > 1 ? src += " points de force !<br/>" : src += " point de force !<br/>";
				document.querySelectorAll("footer>div")[0].innerHTML += src;
			}
		}
			var mage = new Hero("amadeus", "mage", 10, 3);
                        var guerrier = new Hero("pontius", "guerrier", 1, 9);
                        mage.toString();
                        guerrier.toString();
	}
})();
