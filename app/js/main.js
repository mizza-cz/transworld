$(document).ready(function () {
   new WOW().init();
   $('.slider__inner').slick({
      prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/prev.svg" alt="">Prev</button>',
      nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/next.svg" alt="">Next</button>',
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
   });


   $(".menu__burger").click(function () {
      $(".menu").toggleClass("menu-open");
   });
});


