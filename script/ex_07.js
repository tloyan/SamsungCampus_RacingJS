(function (){
    window.onload = function() {
        var canvas = document.getElementsByTagName('canvas')[0];
        var audio =  new Audio("http://wac.epitech.eu/www/racingjs/pony_song.ogg");
        var button = document.getElementsByTagName('button');
        var draw = canvas.getContext('2d');
        draw.strokeStyle = "#fff";
        canvas.width = "20";
        canvas.height = "20";
        draw.lineWidth=1;
        draw.beginPath();
        draw.moveTo(6,6);
        draw.lineTo(14,10);
        draw.lineTo(6,14);
        draw.lineTo(6,6);
        draw.fillStyle = "#fff"; 
        draw.fill();
        draw.stroke();

        canvas.onclick = function(){
            audio.play();
        };
        button[0].onclick = function(){
            audio.pause();
        };
        button[1].onclick = function(){
            audio.pause();
            audio.currentTime = 0;
        };
        button[2].onclick = function() {
            if(audio.muted != true) {
                    audio.muted = true;
            }
            else {
                audio.muted = false;
            }
        }
    };
})()