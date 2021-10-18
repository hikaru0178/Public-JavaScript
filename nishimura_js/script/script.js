"use strict";

$(function () {
  /* トップ画面(スライドショー）の設定 */
  let responsiveImage;

  let windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
  if (windowwidth > 780) {
    responsiveImage = [{ src: "image/bg-img2.jpg" }, { src: "image/bg-img4.jpg" }, { src: "image/bg-05.jpg" }];
  } else {
    responsiveImage = [{ src: "image/bg-img2.jpg" }, { src: "image/bg-img4.jpg" }, { src: "image/bg-05.jpg" }];
  }
  $("#slider").vegas({
    overlay: "/image/01.png",
    transition: "fade2",
    transitionDuration: 2000 /* 切り替わりのアニメーション時間 */,
    delay: 10000 /* スライド時間 */,
    animationDuration: 20000 /* スライドアニメーションの時間 */,
    animation: "kenburns",
    slides: responsiveImage /* 画像設定の読み込み */,
  });
  $(".head-logo").vegas({
    overlay: "/image/01.png",
    transitionDuration: 2000,
    delay: 10000,
    animationDuration: 20000,
    animation: "kenburns",
    slides: responsiveImage,
  });
});
/*  スクロールしたら1画面移動 */
$(function () {
  $.scrollify({
    section: ".box",
    scrollbars: "false",
    interstitialSection: "#header" /* ヘッダーを認識させスクロールさせず表示 */,
    setHeights: "false" /* 高さの自動読み込みをオフ */,
    scrollSpeed: 300,
  });
});

/*=====モーダル表示=======  */
$(function () {
  $(".gradient2").modaal({
    overlay_close: false /* 背景クリックで閉じない */,
    before_open: function () {
      $("html").css("overflow-y", "hidden"); /* 縦スクロールバーを出さない */
      $.scrollify.disable(); /* scrollifyを無効 */
    },
    after_close: function () {
      $("html").css("overflow-y", "scroll"); /* 縦スクロールバーを出す */
      $.scrollify.enable(); /* scrollifyのプラグインを有効化 */
    },
  });
});

$(window).on("load", function () {
  const bar = new ProgressBar.Line(splash_text, {
    easing: "easeInOut",
    duration: 2000 /* 時間指定 */,
    strokeWidth: "0.2" /* ゲージの太さ */,
    color: "#fff",
    trailWidth: "0.2" /* ゲージベースの線 */,
    trailColor: "#bbb",
    text: {
      style: {
        /*  */ position: "absolute",
        left: "50%",
        top: "50%",
        padding: "0",
        margin: "-30px 0 0 0" /* ゲージより上 */,
        transform: "translate(-50%,-50%)",
        "font-size": "1rem",
        color: "#fff",
      },
      autoStyleContainer: false,
    },
    step: function (state, bar) {
      bar.setText(Math.round(bar.value() * 100) + "%");
    },
  });

  bar.animate(1.0, function () {
    $("#splash_text").fadeOut(10);
    $(".loader_cover-up").addClass("coveranime"); /* クラスがついたらY軸に飛ぶ */
    $(".loader_cover-down").addClass("coveranime");
    $("#splash").fadeOut();
  });
});
