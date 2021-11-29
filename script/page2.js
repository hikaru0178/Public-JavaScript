"use strict";

function mediaQueriesWin() {
  let width = $(window).width();
  if (width <= 768) {
    $(".has-child>a").off("click");
    $(".has-child>a").on("click", function () {
      let parentElem = $(this).parent();
      $(parentElem).toggleClass("active");
      //子要素のスライド開閉
      $(parentElem).children("ul").stop().slideToggle(500);
      return false;
    });
  } else {
    $(".has-child>a").off("click");
    $(".has-child>a").removeClass("active");
    $(".has-child").children("ul").css("display", "");
  }
}
$(window).resize(function () {
  mediaQueriesWin();
});
$(window).on("load", function () {
  mediaQueriesWin();
});
$(".openbtn").on("click", function () {
  $(this).toggleClass("active");
  $("#g-nav").toggleClass("panelactive");
  $(".circle-bg").toggleClass("circleactive");
});
$("#g-nav a").click(function () {
  $(".openbtn").removeClass("active");
  $("#g-nav").removeClass("panelactive");
  $(".circle-bg").removeClass("circleactive");
});

$(function () {
  $(".slide").slick({
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    centerMode: true,
    variableWidth: true,
    dots: true,
  });
});
