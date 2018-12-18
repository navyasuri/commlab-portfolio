console.log("Script Loaded!");

var playBtn = document.getElementById("playBtn")
var pauseBtn = document.getElementById("pauseBtn")
var stopBtn = document.getElementById("stopBtn")

var player = document.getElementById("player")

// in brackets the first thing is what is teh event and teh second is the consequence - playing audio
playBtn.addEventListener("click", playAudio);
pauseBtn.addEventListener("click", pauseAudio);
stopBtn.addEventListener("click", stopAudio);

function playAudio() {
	player.play();
}

function pauseAudio() {
	player.pause();
}
function stopAudio() {
	player.pause();
	player.currentTime = 0; 
}
