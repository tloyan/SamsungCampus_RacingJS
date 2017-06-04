window.onload = function () {
var input = document.getElementsByTagName("input")[0];
var output = document.getElementsByTagName("div")[3];

	function escapeHtml(text) {
  	return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
}
	input.oninput = function() {
		var str = input.value;
		var strout = escapeHtml(str);
		strout = strout.replace(/\[B\]/g,"<b>");
		strout = strout.replace(/\[\/B\]/g,"</b>");
		strout = strout.replace(/\[S\]/g,"<del>");
		strout = strout.replace(/\[\/S\]/g,"</del>");
		strout = strout.replace(/\[U\]/g,"<u>");
		strout = strout.replace(/\[\/U\]/g,"</u>");
		strout = strout.replace(/\[\/COLOR\]/g,"</span>");
		strout = strout.replace(/\[\/LINK\]/g,"</a>");
		var strout_res = [];
		var strout_tmp = strout.split("");
		var k = 0;
		for (i = 0; i < strout_tmp.length; i++) {
			if (strout_tmp[i] == "[" && strout_tmp[i+1] == "C" && strout_tmp[i+2] == "O" && strout_tmp[i+3] == "L"
				&& strout_tmp[i+4] == "O" && strout_tmp[i+5] == "R" && strout_tmp[i+6] == "=" && strout_tmp[i+7] == "&" && strout_tmp[i+8] == "l" && strout_tmp[i+9] == "t" && strout_tmp[i+10] == ";") {

				strout_res[i] = "["; strout_res[i+1] = "C"; strout_res[i+2] = "O"; strout_res[i+3] = "L";
				strout_res[i+4] = "O"; strout_res[i+5] = "R"; strout_res[i+6] = "="; strout_res[i+7] = "<"; 
				for (j = i+10; j < strout_tmp.length && !(strout_tmp[j+1] == "&" && strout_tmp[j+2] == "g" && strout_tmp[j+3] == "t" && strout_tmp[j+4] == ";" && strout_tmp[j+5] == "]"); j++) {
					strout_res[j-2] = strout_tmp[j+1];
				}
				if (j < strout_tmp.length && (strout_tmp[j+1] == "&" && strout_tmp[j+2] == "g" && strout_tmp[j+3] == "t" && strout_tmp[j+4] == ";" && strout_tmp[j+5] == "]")) {
						strout_res[j+1] = ">";
						strout_res[j+2] = "]";
						strout_res = strout_res.join("");
						var value = strout_res.slice(8, strout_res.length - 2);
						strout = strout.replace("[COLOR=&lt;" + value + "&gt;]", "<span style=color:" + value + ">");
						strout_res = strout_res.split("");
						strout_res = [];
						k = 0;
						j=0;
				}
				else {
						strout_res = [];
						k = 0;
						i=0;
						j=0;
				}
			}
			else if (strout_tmp[i] == "[" && strout_tmp[i+1] == "L" && strout_tmp[i+2] == "I" && strout_tmp[i+3] == "N"
				&& strout_tmp[i+4] == "K" && strout_tmp[i+5] == "=" && strout_tmp[i+6] == "&" && strout_tmp[i+7] == "l" && strout_tmp[i+8] == "t" && strout_tmp[i+9] == ";") {

				strout_res[i] = "["; strout_res[i+1] = "L"; strout_res[i+2] = "I"; strout_res[i+3] = "N";
				strout_res[i+4] = "K"; strout_res[i+5] = "="; strout_res[i+6] = "<"; 
				for (j = i+9; j < strout_tmp.length && !(strout_tmp[j+1] == "&" && strout_tmp[j+2] == "g" && strout_tmp[j+3] == "t" && strout_tmp[j+4] == ";" && strout_tmp[j+5] == "]"); j++) {
					strout_res[j-2] = strout_tmp[j+1];
				}
				if (j < strout_tmp.length && (strout_tmp[j+1] == "&" && strout_tmp[j+2] == "g" && strout_tmp[j+3] == "t" && strout_tmp[j+4] == ";" && strout_tmp[j+5] == "]")) {
						strout_res[j+1] = ">";
						strout_res[j+2] = "]";
						strout_res = strout_res.join("");
						var value = strout_res.slice(7, strout_res.length - 2);
						strout = strout.replace("[LINK=&lt;" + value + "&gt;]", "<a href=\"" + value + "\">");
						strout_res = strout_res.split("");
						strout_res = [];
						k = 0;
						j=0
				}
				else {
						strout_res = [];
						k = 0;
						j=0;
				}
			}
		}
		output.innerHTML = strout;
	}
}
