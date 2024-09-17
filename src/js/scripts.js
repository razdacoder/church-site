$(document).ready(function () {
  var $navBtn = $("#nav-btn");
  var $mobileNav = $("#mobile-nav");
  var $mobileNavClose = $("#close-mobile-nav");

  $navBtn.click(function () {
    $mobileNav.removeClass("hidden");
  });

  $mobileNavClose.click(function () {
    $mobileNav.addClass("hidden");
  });

  $("#nav-btn").click({});
  $("#events").slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
