// Services Slick-slider

$('.services-responsive').slick({
    dots: true,
    infinite: true,
    speed: 300,
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    respondTo: 'slider',
    responsive: [
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 2,
          }
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 3,
          }
      }
      
    ]
  });


// Store slider:

  $('.responsiveStore').slick({
    infinite: true,
    speed: 300,
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 922,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      }
    ]
  });

  // Blog slider:
  
  $('.blog-responsive').slick({
    infinite: true,
    speed: 300,
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 3,
        }
      }
      
    ]
  });

  // Types slider:

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
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
    })
 });

  // Testimonials slider:

  $(document).ready(function(){
    $('.review__content').slick({
  dots: true,
  infinite: false,
  speed: 300,
  mobileFirst: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 922,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
    })
  });
  