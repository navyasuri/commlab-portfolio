console.log("Script 3 Loaded!");

//make an array - sounds of sounds 
var sounds = [
    "audio/0.wav",
    "audio/1.wav",
    "audio/2.wav",
    "audio/3.wav",
    "audio/4.wav",
    "audio/5.wav"
]

// run a for loop 
// one loop for every sound in an array 
for (var i = 0; i < sounds.length; i++) {
    const player =document.createElement("audio");
    player.src = sounds[i];
    player.loop = true;
document.body.appendChild(player);

     const btn = document.createElement("button");
     btn.innerHTML = "Sound" + (i + 1);
     document.body.appendChild(btn); 

     btn.addEventListener("click", function(){
     	if (player.paused) {
     		player.play();
     		btn.className = "active";
     	} else {
     		player.pause();
     		btn.className = "";
     	}
     })
}
// within a loop create  a button 

// create text to the button 

// add the button to the doucment 
// add an event Listener for when it is clicked 


// function that says what to do when the button is clicked 