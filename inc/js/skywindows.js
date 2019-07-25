
	$('.heightfixxer').each(function() {
    var currentHeightElement = $(this);
    var hotHeight = currentHeightElement.outerHeight();
    currentHeightElement.css({ height: (hotHeight) });
});

var swipage = function swipage(){

var swiper = new Swiper('.swiper-container', {
  // Default parameters
  slidesPerView: 1,
    autoplay: {
    delay: 5000,
  }
})

var swipertwo = new Swiper('.swiper-container-below', {
  // Default parameters
        autoplay: 4500,
        slidesPerView:'auto',
        visibilityFullFit: true,
        autoResize: false,
        initialSlide : 2,
        loop : true,
        loopedSlides : 20,
  // Responsive breakpoints
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    // when window width is <= 640px
    768: {
      slidesPerView: 1,
      spaceBetween: 15
    }
  }
})
};



// A $( document ).ready() block.
$( document ).ready(function() {
    swipage();
});