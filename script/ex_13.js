window.onload = function() {
	var div = document.getElementsByTagName("div")[2];
	if (localStorage.getItem("Pangolin") !== null) {
        var img = document.createElement("img");
        img.src = localStorage.getItem("Pangolin");
        div.appendChild(img);
        var temps;
        var wid = window.getComputedStyle(div.firstElementChild, null).getPropertyValue("width");
        var hei = window.getComputedStyle(div.firstElementChild, null).getPropertyValue("height");
        var wtmp = wid;
        var htmp = hei;
        var i = 0;
        if (div.firstElementChild !== null) {
		function enter(){
        		if (wid.substr(0, wid.length-2) > 0) {
        			wtmp = (parseFloat(wtmp.substr(0, wid.length-2))-parseFloat(((wid.substr(0, wid.length - 2) * 1) / 100))) + "px";
        			htmp = (parseFloat(htmp.substr(0, hei.length-2))-parseFloat(((hei.substr(0, hei.length - 2) * 1) / 100))) + "px";
	        		div.firstElementChild.style.width =  wtmp;
	        		div.firstElementChild.style.height = htmp;
        		}
                else {
                    clearInterval(temps);
                }
        }

        function leave() {
        	if (htmp.substr(0, htmp.length-2) < (386-3.86)) {
        			wtmp = (parseFloat(wtmp.substr(0, wid.length-2))+parseFloat(((wid.substr(0, wid.length - 2) * 1) / 100))) + "px";
        			htmp = (parseFloat(htmp.substr(0, hei.length-2))+parseFloat(((hei.substr(0, hei.length - 2) * 1) / 100))) + "px";
	        		div.firstElementChild.style.width = wtmp;
	        		div.firstElementChild.style.height = htmp;
        		}
            else {
                clearInterval(temps);
            }
        }


        div.firstElementChild.onmouseenter = function(){
        		clearInterval(temps);
        		temps = setInterval(enter, 1000);
        }

        div.firstElementChild.onmouseleave = function(){
        		clearInterval(temps);
        		temps = setInterval(leave, 1000);
        }

        div.firstElementChild.onclick = function click(){
                clearInterval(temps);
                localStorage.removeItem("Pangolin");
                div.innerHTML = "";
        }
    }
    }
}
