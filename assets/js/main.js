(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  // owlCarousel
  $(".Carbon_slider").owlCarousel({
    loop: false,
    margin: 30,
    items: 2,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    smartSpeed: 1000,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 1
      },
      992: {
        items: 1
      }
    }
  });

  // owlCarousel
  $(".global_slider").owlCarousel({
    loop: false,
    margin: 30,
    items: 4,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        stagePadding: 50,
        items: 1
      },
      767: {
        stagePadding: 50,
        items: 2
      },
      992: {
        stagePadding: 50,
        items: 2
      },
      1200: {
        stagePadding: 50,
        items: 3
      },
      1500: {
        items: 3
      }
    }
  });

  // owlCarousel
  $(".brand-active").owlCarousel({
    loop: true,
    margin: 30,
    items: 6,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 3
      },
      992: {
        items: 6
      }
    }
  });

 
})(jQuery);
