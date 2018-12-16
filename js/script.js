//var landing = document.getElementsByClassName("landing")[0];
//landing.style.height = screen.height;

$(document).ready(function () {
    var options = {
        mode: "vp", // "vp", "set"
        autoHash: false,
        sectionScroll: true,
        initialScroll: false,
        keepHistory: false,
        sectionWrapperSelector: ".section-wrapper",
        sectionClass: "section",
        animationSpeed: 500,
        headerHash: "header",
        breakpoint: null,
        eventEmitter: null,
        dynamicHeight: false
    };

    $.smartscroll(options);
    
});