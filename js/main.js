// // Add onscroll animations
// $(window).scroll(function() {    
//     var scroll = $(window).scrollTop();

//      //>=, not <=
//     if (scroll >= 150) {
//         //clearHeader, not clearheader - caps H
//         $(".project-1 img").addClass("project-animate");
//     }
// }); //missing );
// $(window).scroll(function() {    
//     var scroll = $(window).scrollTop();

//      //>=, not <=
//     if (scroll >= 1000) {
//         //clearHeader, not clearheader - caps H
//         $(".project-2 img").addClass("project-animate");
//     }
// }); //missing );
// $(window).scroll(function() {    
//     var scroll = $(window).scrollTop();

//      //>=, not <=
//     if (scroll >= 1200) {
//         //clearHeader, not clearheader - caps H
//         $(".progress-bar").addClass("grow");
//     }
// }); //missing );


const instance = basicScroll.create({
	elem: document.querySelector('.boxta'),
	from: 'top-bottom',
	to: 'middle-middle',
	props: {
        '--transx'{
            from : -100px,
			to : 0px
        },
        '--opacity'{
            from : 0,
			to : 1
        }
        
	}
})

instance.start()