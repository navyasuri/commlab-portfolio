console.log("Script 2 Loaded!");

var x = document.getElementById("myAudio"); 
var btn = document.getElementById("play");

function playAudio() { 
	console.log("should play");
	if(x.paused){
    x.play(); 
}
else{
	x.pause();
}
} 



console.log("add event addEventListener");


btn.addEventListener("click", playAudio);
console.log("add event addEventListener");