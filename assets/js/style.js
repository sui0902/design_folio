$(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $(".globalMenuSp").addClass("active");
    } else {
      $(".globalMenuSp").removeClass("active");
    }
  });
});

$(function () {
  setTimeout(function () {
    $(`#splash_logo`).fadeIn(500);
  }, 200);
  setTimeout(function () {
    $(`#splash`).fadeOut(500);
  }, 200);
});

$(window).on("load", function () {
  $("#splash-logo").delay(1000).fadeOut("slow");

  $("#splash")
    .delay(1200)
    .fadeIn("slow", function () {
      $("body").addClass("appear");
    });

  $(".splashbg").on("animationend", function () {});
});

$(window).on("scroll", function () {
  $(".lineAnimation").each(function () {
    let position = $(this).offset().top;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    if (scroll > position - windowHeight + 180) {
      $(this).addClass("isActive");
    }
  });
});
