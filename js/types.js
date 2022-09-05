$(document).ready(function(){
    $('.types-carusel').slick({
  dots: true,
  infinite: true,
  speed: 300,
  mobileFirst: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 922,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    })
 });

//Smooth scroll and page up

$(window).scroll(function() {
  if ($(this).scrollTop() > 1000) {
    $('.pageup').css('display','block');
  } else {
    $('.pageup').css('display','none');
  }
}); 
    