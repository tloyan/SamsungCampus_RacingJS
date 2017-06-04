var div;
var flig;
var str1;
var str2;
var flag_error;
var result;
var str = "";
var symb= [];
var val;
var res;
var symbo = [];
window.onload = function() {
div = document.querySelectorAll(".buttons>div");
console.log(div);
result = document.querySelectorAll(".result");
div[0].onclick = function(){str = str.slice(0, str.length-1);affiche();};
div[1].onclick = function(){str = ""; affiche();};
div[2].onclick = function(){str+= div[2].innerHTML;affiche();};
div[3].onclick = function(){str+= div[3].innerHTML;affiche();};
div[4].onclick = function(){str+= div[4].innerHTML;affiche();};
div[5].onclick = function(){str+= div[5].innerHTML;affiche();};
div[6].onclick = function(){str+= div[6].innerHTML;affiche();};
div[7].onclick = function(){str+= div[7].innerHTML;affiche();};
div[8].onclick = function(){str+= div[8].innerHTML;affiche();};
div[9].onclick = function(){str+= div[9].innerHTML;affiche();};
div[10].onclick = function(){str+= div[10].innerHTML;affiche();};
div[11].onclick = function(){str+= div[11].innerHTML;affiche();};
div[12].onclick = function(){str+= div[12].innerHTML;affiche();};
div[13].onclick = function(){str+= div[13].innerHTML;affiche();};
div[14].onclick = function(){str+= div[14].innerHTML;affiche();};
div[15].onclick = function(){str+= div[15].innerHTML;affiche();};
div[16].onclick = function(){str+= div[16].innerHTML;affiche();};
div[17].onclick = function(){str+= div[17].innerHTML;affiche();};
div[18].onclick = function(){takeSymbole(); takeValue(); getOperation();};
};

function takeSymbole() {
	var j = 0;
	str = str.split("");
	for (i=0;i < str.length; i++) {
		if (str[i] == "+" && isSymbole(str,i) == false) {symb[j] = "+"; j++; str[i] = "|";}
		else if (str[i] == "-" && isSymbole(str,i) == false) {symb[j] = "-"; j++; str[i] = "|";}
	}
	str = str.join("");
}
function takeValue() {
	val = str.split("|");
}
function getOperation() {
	flag_error = 0;
	for (i = 0; i < val.length; i++) {
		val[i] = val[i].split("");
		var k = 0;
		for (j = 0; j < val[i].length; j++) {
			if (val[i][j] == "x") {
				symbo[k] = "*";
				val[i][j] = "|";
				k++;
			}
			else if(val[i][j] == "/") {
				symbo[k] = "/";
				val[i][j] = "|";
				k++;
			}
	                else if(val[i][j] == "%") {
                                symbo[k] = "%";
                                val[i][j] = "|";
                                k++;
                        }
		}
		val[i] = val[i].join("");
		val[i] = val[i].split("|");
		flig = 1;
		for (j = 1; j < val[i].length; j++) {
			str1 = val[i][j];
			str2 = val[i][j-1];
			isFlo(str1);
			isFlo(str2);
			if (symbo[j-1] == "*") {val[i][j] = (parseFloat(val[i][j-1]) * parseFloat(val[i][j])).toString();}
			else if (symbo[j-1] == "/") {val[i][j] = (parseFloat(val[i][j-1]) / parseFloat(val[i][j])).toString();}
                        else if (symbo[j-1] == "%") {val[i][j] = (parseFloat(val[i][j-1]) % parseFloat(val[i][j])).toString();}
			k = j;
			flig = 0;
		}
		if (flig == 1) {isFlo(val[i][0])}
		val[i] = val[i][k];
	}
	k=0;
	for (i = 1; i < val.length; i++) {
		if (symb[i-1] == "+") {val[i] = (parseFloat(val[i-1]) + parseFloat(val[i])).toString();}
		else if (symb[i-1] == "-") {val[i] = (parseFloat(val[i-1]) - parseFloat(val[i])).toString();}
		k = i;
	}
	res = val[k];
	if (res == "NaN" || flag_error == 1) { result[0].innerHTML = "ERROR"; str = "";}
	else { result[0].innerHTML = res; str = "" + res;}
}
function isSymbole(str,i){
	if (isNaN(str[i-1]) == true && isNaN(str[i+1]) == false) {return true;}
	else {return false;}
}
function affiche() {
	if (str.length < 12) {
		result[0].innerHTML = str.slice(0, str.length) + "<br/>";
	}
	else {
		result[0].innerHTML = str.slice(-11, str.length) + "<br/>";

	}
}
function isFlo(str3) {
	var flag = 0;
	for(p = 0; p < str3.length; p++) {
		if (str3[p] == "." && !isNaN(str3[p+1]) && !isNaN(str3[p-1]) && flag == 0) {flag = 1;}
		else if (str3[p] == "." && (flag == 1 || isNaN(str3[p+1] || isNaN(str3[p-1])))) {flag = 2;}
	}
	if (flag == 2) { flag_error = 1;}
}
