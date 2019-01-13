

jQuery(document).ready(function($) {
    
	TweenLite.set('.text-js, .descriptor, .hero-arrow, .contact, #home-line, .line-element', {x:'-101%'})

    var lines = new TimelineMax({yoyo:true, repeatDelay:2})
    .to('.text-js',1,{x:'0%', ease: Power2.easeOut})
    .to('.descriptor,.hero-arrow',1,{x:'0%', opacity:1, ease: Power2.easeOut})
    .to('.hero-arrow',1,{x:'0%', opacity: 1, ease: Power2.easeOut},'-=0')
    .to('.arrow-parent',2,{right:'15.4%', delay: .8, ease: Power2.easeOut},'2')
    .staggerFrom('#work, .arrow-lines',1,{scaleY: 0, transformOrigin: "top center", ease: Power2.easeOut})
    .staggerTo('.contact',1,{x:'0%', ease: Power2.easeOut},'-=2')
    // .to('.line-element',1,{scaleX: 1000, backgroundColor:'white'})


	//Scroll Starts
    
    var controller = new ScrollMagic.Controller();
    var lines = $('.line-element');
    
    var tlMainScroll = new TimelineMax()
    .add([
        TweenMax.to(lines, .1, {backgroundColor:'white'}),
		TweenMax.to(lines, 1, {scaleX: 1000, backgroundColor:'white', transformOrigin: "left"}),
    ]);

    
    //Pin the scene
    var tweenHome = new ScrollMagic.Scene({
        triggerElement: '.pin-scene',
        triggerHook:0,
        duration: '130%'})
    
    .setTween(tlMainScroll)
    .setPin('.pin-scene')
    .addTo(controller);


//Scroll Out 

var tlMainScrollOut = new TimelineMax()
    .add([
        TweenMax.to(bgImage, 8, {autoAlpha:0}),
        TweenMax.from('.section-2', 4, {autoAlpha:0}),
		TweenMax.to(spaceman, 8, {autoAlpha:0}),
		TweenMax.to(stars, 2, {autoAlpha:0})
    ]);

var section2 = new ScrollMagic.Scene ({
    triggerElement: '.section2',
    triggerHook: 0,
    duration: '40%'})
.setTween(tlMainScrollOut)
.setPin('.section2')
.addTo(controller);
 
 });


//once js runs un-hide the svg
TweenLite.set(".contact svg", {visibility:"visible"});
//hide the stroke
TweenLite.set("rect", {drawSVG:0})


//create a tween in a paused state
var tween = TweenLite.to("rect", 0.5, {drawSVG:true, paused:true});




// play/reverse on over/out
$("rect").hover(over, out);


function out() {
  tween.reverse();
}


function over() {
  tween.play();
}