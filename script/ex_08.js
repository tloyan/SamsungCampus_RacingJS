(function () {
	window.onload = function () {
		var tab = document.querySelectorAll(".exercice>footer>div>canvas");
		var tab_sub = [];
		for (i = 0; i < tab.length; i++) {
			var tmp = window.getComputedStyle(tab[i], null).getPropertyValue("Background-color");
			if (tmp == "rgb(255, 165, 0)") {
				tab_sub[i] = 1;
			}
			else if (tmp == "rgb(128, 0, 128)") {
				tab_sub[i] = 2;
			}
                        else if (tmp == "rgb(0, 0, 0)") {
				tab_sub[i] = 3;
                        }
                        else if (tmp == "rgb(128, 128, 0)") {
				tab_sub[i] = 4;
                        }
		}
		for (i = 1; i < tab_sub.length; i++) {
			tmp = tab_sub[i];
			j = i - 1;
			while (j >= 0 && tab_sub[j] > tmp) {
				tab_sub[j + 1] = tab_sub[j];
				j = j - 1;
			}
			tab_sub[j + 1] = tmp;
		}
		for (i = 0; i < tab_sub.length; i++) {
			if (tab_sub[i] == 1) {
				tab[i].style.backgroundColor = "rgb(255 , 165, 0)";
			}
			else if (tab_sub[i] == 2) {
				tab[i].style.backgroundColor = "rgb(128, 0, 128)";
			}
                        else if (tab_sub[i] == 3) {
                                tab[i].style.backgroundColor = "rgb(0, 0, 0)";
                        }
                        else if (tab_sub[i] == 4) {
                                tab[i].style.backgroundColor = "rgb(128, 128, 0)";
                        }
		}
	}	
})()
