$(function () {
  let topBtn = $("#scroll-top");
  topBtn.hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });

  topBtn.on("click", function (event) {
    event.preventDefault();
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  $(".close-button, .open-button").on("click", function () {
    $(".header nav").slideToggle();
  });

  $("#slick-slide").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    dots: true,
    arrows: true,
  });
});
