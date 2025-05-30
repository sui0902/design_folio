$(function () {
  $(".slick").slick({
    fade: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2000,
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: false,
  });
});

$(".slide-items").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  fade: true,
  cssEase: "linear",
  speed: 600,
});

$(document).on("opening", ".remodal", function () {
  $(".slide-items").slick("setPosition");
});
