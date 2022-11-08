$(document).ready(function(){
    $("#fullpage").fullpage({
        anchors:["firstpage", "secondpage", "thirdpage"],
        menu:"#menu",
        autoScrolling:false,

    });
});
var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
    triggerElement:"#section2"
})
.setTween("#bg img",{
    maxwidth:"1200px",
    top:"30%",
    left:"80%",
    opacity:0.25,
})
.addTo(controller);

var scene = new ScrollMagic.Scene({
	triggerElement: "#section3",
	duration: 300
})

// animate color and top border in relation to scroll position
.setTween("#bg img", {
	top: "20%"
}) // the tween duration can be omitted and defaults to 1

// Add indicators (required plugin)
.addTo(controller);