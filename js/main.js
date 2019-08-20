jQuery(document).ready(function($) {

    var w = window.innerWidth;
    var arrow = w / 6 * 1 - 20;
    var arrowMobile = w / 6 * 1 - 20;
    
	TweenLite.set('.text-js, .descriptor, .hero-arrow, .contact, #home-line, .line-element, .intro-section .line-element', {x:'-101%'})
    if ($(window).width() >= 1000){	
        var lines = new TimelineMax({yoyo:true, repeatDelay:2})
        .to('.text-js',1,{x:'0%', ease: Power2.easeOut})
        .to('.descriptor,.hero-arrow',1,{x:'0%', opacity:1, ease: Power2.easeOut})
        .to('.hero-arrow',1,{x:'0%', opacity: 1, ease: Power2.easeOut},'-=0')
        .to('.arrow-parent',1,{delay:.8, right:arrow, ease: Power2.easeOut},'1.5')
        .staggerFrom('#work, .arrow-lines',2,{scaleY: 0, transformOrigin: "top center", ease: Power2.easeOut})
        .to('.contact',1,{x:'0%', ease: Power2.easeOut},'-=.3')
        .fromTo("#envelope",1 ,{drawSVG:1}, {drawSVG:"100%"})
    };

    if ($(window).width() <= 1000){	
        var lines = new TimelineMax({yoyo:true, repeatDelay:2})
        .to('.text-js',1,{x:'0%', ease: Power2.easeOut})
        .to('.descriptor',1,{x:'0%', opacity:1, ease: Power2.easeOut})
        .to('.hero-arrow',1,{x:'0%', opacity: 1, ease: Power2.easeOut},'-=0')
        .staggerFrom('#work, .arrow-lines',2,{scaleY: 0, opacity: 1, transformOrigin: "top center", ease: Power2.easeOut})
        .to('.contact',1,{x:'0%', ease: Power2.easeOut},'-=.3')
        .fromTo("#envelope",1 ,{drawSVG:1}, {drawSVG:"100%"})
    };

    //Scroll Starts
    
    var controller = new ScrollMagic.Controller();
    var lines = $('.intro-section .line-element');
    
    var tlMainScroll = new TimelineMax()
    .add([
        TweenMax.to('.intro-section .line-element',1,{backgroundColor:'red'}),
        TweenMax.to(lines, .001, {backgroundColor:'white', autoAlpha:1}),
        TweenMax.to('.descriptor span, .contact', .001, {color:'white', borderBottomColor:'white'}),
        TweenMax.to(lines, 500, {scaleX: 1000, transformOrigin: "left"}), 
        TweenMax.to('.bg, .title-main', 100, {autoAlpha:0}),
        TweenMax.to(lines, 200, {autoAlpha:0, delay:4}), 
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
    


