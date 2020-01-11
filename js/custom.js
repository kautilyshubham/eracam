(function($) {
    "use strict";

    // header js
    var nav_offset_top = $('header').height() + 50;
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

    //* Navbar Fixed  
    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();


// page scroll js
$(window).scroll(function() {
if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
$('#return-to-top').fadeIn(200);    // Fade in the arrow
} else {
$('#return-to-top').fadeOut(200);   // Else fade out the arrow
}
});
$('#return-to-top').click(function() {      // When arrow is clicked
$('body,html').animate({
scrollTop : 0                       // Scroll to top of body
}, 500);
});


// tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  

// aos animation
AOS.init({
    disable: function() {
      var maxWidth = 800;
      return window.innerWidth < maxWidth;
    }
  });

}) (jQuery)// ends


