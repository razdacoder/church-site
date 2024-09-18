$(document).ready(function () {
  var $navBtn = $("#nav-btn");
  var $mobileNav = $("#mobile-nav");
  var $mobileNavClose = $("#close-mobile-nav");

  $navBtn.click(function () {
    // $mobileNav.removeClass("hidden");
    $mobileNav.fadeIn("slow");
  });

  $mobileNavClose.click(function () {
    $mobileNav.fadeOut("slow");
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

  $(".accordion-trigger").on("click", function (e) {
    e.preventDefault();
    var $content = $(this).next(".accordion-content");

    // Toggle the display of the clicked content
    $content.slideToggle(300);

    // Optionally close other accordions if only one section should be open at a time
    $(".accordion-content").not($content).slideUp(300);
  });
});
