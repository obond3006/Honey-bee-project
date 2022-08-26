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
    respondTo: 'slider',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
      
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
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
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
      
    ]
  });

 