//var landing = document.getElementsByClassName("landing")[0];
//landing.style.height = screen.height;

var ee = new EventEmitter();

$(document).ready(function () {
    var options = {
        mode: "vp", // "vp", "set"
        autoHash: false,
        sectionScroll: true,
        initialScroll: true,
        keepHistory: false,
        sectionWrapperSelector: ".section-wrapper",
        sectionClass: "section",
        animationSpeed: 500,
        breakpoint: null,
        eventEmitter: ee,
        dynamicHeight: false, 
        bindSwipe: true
    };

    $.smartscroll(options);
    
});

var root = document.documentElement;
var plat = "#ebebeb";
var dark = "#313131";
var info = document.getElementsByClassName("info")[0];

document.getElementById("lit").addEventListener("click", function(){
    root.style.setProperty("--plat", plat);
    root.style.setProperty("--dark", dark);
});

document.getElementById("ded").addEventListener("click", function(){
    root.style.setProperty("--plat", dark);
    root.style.setProperty("--dark", plat);
});