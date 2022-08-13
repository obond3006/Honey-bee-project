// FAQ Accordion

let accordions = document.getElementsByClassName("accordion-label");

for (let i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle('is-open');

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // accordion is currently open, so close it
      content.style.maxHeight = null;
    } else {
      // accordion is currently closed, so open it
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}

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
          slidesToScroll: 1,
          infinite: true,
          dots: true
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