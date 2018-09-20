var pos = 0;
var speed = 75;
var str = document.getElementById('str').innerText;

// empty the str from span
document.getElementById('str').innerText = '';

// typing fn
function type() {
  if(pos<str.length) {
    document.getElementById('str').innerText += str.charAt(pos);
    pos++;
    setTimeout(type,speed); //call this fn again to type all letters
  } else {
    setTimeout(erase,speed);
  }
}

// start type
setTimeout(type,speed);

// erase fn
function erase() {
  if(pos>=0) {
    var temp = str.substring(0, pos);
    document.getElementById('str').innerText = temp;
    pos--;
    setTimeout(erase,speed);
  } else {
    // start type again
    setTimeout(type,speed);
  }
}










(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict
