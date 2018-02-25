// Add onscroll animations
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 80) {
        //clearHeader, not clearheader - caps H
        $(".project-1 img").addClass("project-animate");
    }
}); //missing );
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 650) {
        //clearHeader, not clearheader - caps H
        $(".project-2 img").addClass("project-animate");
    }
}); //missing );
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 1200) {
        //clearHeader, not clearheader - caps H
        $(".progress-bar").addClass("grow");
    }
}); //missing );