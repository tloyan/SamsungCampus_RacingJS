(function(){
	window.onload = function() {
    	var div = document.getElementsByTagName("div")[2];
    	div.addEventListener("pangolin" , random_color);
    	function random_color()
    	{
   	     	var letter = "0123456789ABCDEF";
   	     	var color_1 = "#";
   	     	for(var i = 0; i < 6; i++)
   	     	{
    	        color_1 += letter[Math.floor(Math.random() * 16)];
    	    }
    	    div.style.backgroundColor = color_1;
    	}
	}
})()