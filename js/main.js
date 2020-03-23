jQuery(document).ready(function($) {

    var w = window.innerWidth;
    var arrow = w / 6 * 1 - 20;
    var arrowMobile = w / 6 * 1 - 20;
    
	TweenLite.set('.text-js, .descriptor, .hero-arrow, .contact, #home-line, .line-element, .intro-section .line-element', {x:'-101%'})
    if ($(window).width() >= 1000){	
        var lines = new TimelineMax({yoyo:true, repeatDelay:2})
        .to('.text-js',1,{x:'0%', ease: Power2.easeOut})
        .to('.descriptor-1',1,{x:'0%', opacity:1, ease: Power2.easeOut})
        .to('.descriptor-2',1,{x:'0%', opacity:1, ease: Power2.easeOut})
        .to('.hero-arrow',1,{x:'0%', opacity: 1, ease: Power2.easeOut},'-=0')
        .to('.arrow-parent',1,{delay:.8, right:arrow, ease: Power2.easeOut},'1.5')
        .staggerFrom('#work, .arrow-lines',2,{scaleY: 0, transformOrigin: "top center", ease: Power2.easeOut})
        // .to('.contact',1,{x:'0%', ease: Power2.easeOut},'-=.3')
        .fromTo("#envelope",1 ,{drawSVG:1}, {drawSVG:"100%"})
    };

    if ($(window).width() <= 1000){	
        var lines = new TimelineMax({yoyo:true, repeatDelay:2})
        .to('.text-js',1,{x:'0%', ease: Power2.easeOut})
        .to('.descriptor-1, .contact',1,{x:'0%', opacity:1, ease: Power2.easeOut})
        .to('.descriptor-2',1,{x:'0%', opacity:1, delay:10, ease: Power2.easeOut})
        .to('.hero-arrow',1,{x:'0%', y:'-20%', opacity: 0},'-=1')
        .to('.hero-arrow',1,{y: '0%',opacity: 1, ease: Power2.easeOut},'-=0')
        .staggerFrom('#work',2,{scaleY: 0, opacity: 1, transformOrigin: "top center", ease: Power2.easeOut})
        .fromTo("#envelope",1 ,{drawSVG:1}, {drawSVG:"100%"})
    };

    //Scroll Starts
    
    var controller = new ScrollMagic.Controller();
    var lines = $('.intro-section .line-parent');
    
    var tlMainScroll = new TimelineMax()
    .add([
        TweenMax.to('.intro-section .text-js',5,{color:'white'}),
        TweenMax.to('.descriptor-1 span', .9, {color:'white'}),
        TweenMax.to('.descriptor-2 span', 9, {color:'white', delay: 10}),
        TweenMax.to(lines, 500, {scaleX: 1000, transformOrigin: "left"}), 
        TweenMax.to('.bg', 100, {autoAlpha:0}),
        TweenMax.to('.line-parent-1', 50, {autoAlpha:0, delay: 15, ease: Power1.easeOut}), 
        TweenMax.to('.line-parent-2', 50, {autoAlpha:0, delay: 15, ease: Power1.easeOut}), 
        TweenMax.to('.line-parent-3', 50, {autoAlpha:0, delay: 15, ease: Power1.easeOut}), 
        TweenMax.to('.line-parent-4', 50, {autoAlpha:0, delay: 15, ease: Power1.easeOut}), 
        TweenMax.to('.line-parent-5', 50, {autoAlpha:0, delay: 15, ease: Power1.easeOut}), 
        TweenMax.to('.line-parent-6', 50, {autoAlpha:0, delay: 15, ease: Power1.easeOut}), 
    ]);



    //Pin the scene
    var tweenHome = new ScrollMagic.Scene({
        triggerElement: '.pin-scene',
        triggerHook:0,
        duration: '500%'})
    
    .setTween(tlMainScroll)
    .setPin('.pin-scene')
    .addTo(controller);




//Scroll Out 

var tlMainScrollOut = new TimelineMax()
    .add([
        TweenMax.to('.title-main, .contact, .hero-arrow', 0.1, {autoAlpha:0}),
        TweenMax.from('.section2', 10, {autoAlpha:0}),
        TweenMax.from('.heading', 1500, {autoAlpha:0}),
        TweenMax.from('.text-content', 500, {y:'100', delay:20,autoAlpha:0,ease: Power4.easeOut}),
        TweenMax.from('.text-content', 500, {y:'100', delay:20,autoAlpha:0,ease: Power4.easeOut}),
    ]);

var section2 = new ScrollMagic.Scene ({
    triggerElement: '.section2',
    triggerHook: 0,
    duration: '80%'})
.setTween(tlMainScrollOut)
.setPin('.section2')
.addTo(controller);
 
 });

//  Tabs
$(document).ready(function() {    

    $('#tabs li a:not(:first)').addClass('inactive');
    $('.tab-container').hide();
    $('.tab-container:first').show();
        
    $('#tabs li a').click(function(){
        var t = $(this).attr('id');
      if($(this).hasClass('inactive')){ //this is the start of our condition 
        $('#tabs li a').addClass('inactive');           
        $(this).removeClass('inactive');
        
        $('.tab-container').hide();
        $('#'+ t + 'C').fadeIn('slow');
     }
    });
});
    


