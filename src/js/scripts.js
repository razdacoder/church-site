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

  $(".acc-header").click(function () {
    // Toggle the accordion content
    $(this).next(".acc-content").slideToggle();

    // Toggle the icons
    $(this).find("i").toggleClass("fa-plus fa-minus");
  });

  $.getJSON(
    "https://code.highcharts.com/mapdata/countries/ng/ng-all.topo.json",
    function (topology) {
      // Prepare data with each state assigned to its zone
      var data = [
        // South West Zone
        { "hc-key": "ng-og", zone: "South West", color: "#00FF00" }, // Green
        { "hc-key": "ng-os", zone: "South West", color: "#00FF00" },
        { "hc-key": "ng-oy", zone: "South West", color: "#00FF00" },
        { "hc-key": "ng-ek", zone: "South West", color: "#00FF00" },
        { "hc-key": "ng-la", zone: "South West", color: "#00FF00" },
        { "hc-key": "ng-on", zone: "South West", color: "#00FF00" },

        // South East Zone
        { "hc-key": "ng-ab", zone: "South East", color: "#FF0000" }, // Red
        { "hc-key": "ng-an", zone: "South East", color: "#FF0000" },
        { "hc-key": "ng-eb", zone: "South East", color: "#FF0000" },
        { "hc-key": "ng-im", zone: "South East", color: "#FF0000" },
        { "hc-key": "ng-en", zone: "South East", color: "#FF0000" },

        // North West Zone
        { "hc-key": "ng-kt", zone: "North West", color: "#0000FF" }, // Blue
        { "hc-key": "ng-za", zone: "North West", color: "#0000FF" },
        { "hc-key": "ng-ji", zone: "North West", color: "#0000FF" },
        { "hc-key": "ng-ka", zone: "North West", color: "#0000FF" },
        { "hc-key": "ng-kg", zone: "North West", color: "#0000FF" },
        { "hc-key": "ng-so", zone: "North West", color: "#0000FF" },

        // North East Zone
        { "hc-key": "ng-ad", zone: "North East", color: "#FF00FF" }, // Magenta
        { "hc-key": "ng-ba", zone: "North East", color: "#FF00FF" },
        { "hc-key": "ng-bo", zone: "North East", color: "#FF00FF" },
        { "hc-key": "ng-go", zone: "North East", color: "#FF00FF" },
        { "hc-key": "ng-yo", zone: "North East", color: "#FF00FF" },
        { "hc-key": "ng-ta", zone: "North East", color: "#FF00FF" },

        // North Central Zone
        { "hc-key": "ng-ni", zone: "North Central", color: "#FFFF00" }, // Yellow
        { "hc-key": "ng-be", zone: "North Central", color: "#FFFF00" },
        { "hc-key": "ng-ko", zone: "North Central", color: "#FFFF00" },
        { "hc-key": "ng-kw", zone: "North Central", color: "#FFFF00" },
        { "hc-key": "ng-na", zone: "North Central", color: "#FFFF00" },
        { "hc-key": "ng-pl", zone: "North Central", color: "#FFFF00" },
        { "hc-key": "ng-fc", zone: "North Central", color: "#FFFF00" }, // FCT

        // South South Zone
        { "hc-key": "ng-ak", zone: "South South", color: "#00FFFF" }, // Cyan
        { "hc-key": "ng-ba", zone: "South South", color: "#00FFFF" },
        { "hc-key": "ng-cr", zone: "South South", color: "#00FFFF" },
        { "hc-key": "ng-de", zone: "South South", color: "#00FFFF" },
        { "hc-key": "ng-ed", zone: "South South", color: "#00FFFF" },
        { "hc-key": "ng-ri", zone: "South South", color: "#00FFFF" },
      ];

      // Create the chart
      Highcharts.mapChart("district-map", {
        chart: {
          map: topology,
          backgroundColor: "#f2ead1",
        },

        title: {
          text: "",
        },

        series: [
          {
            name: "Zones",
            data: data,
            states: {
              hover: {
                color: "#BADA55", // Highlight on hover
              },
            },
            dataLabels: {
              enabled: true,
              format: "{point.name}", // Shows the name of each state
            },
            colorKey: "color", // Use 'color' field in data to color the map
          },
        ],
      });
    }
  );
});
