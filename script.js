$(function () {
    // スムーススクロール
    $('a[href^="#"]').click(function () {
      var speed = 500;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? "html" : href);
      var position = target.offset().top;
      $("html, body").animate({ scrollTop: position }, speed, "swing");
      return false;
    });
  
    // フェードイン
    $(".work").css("opacity", "0");
    $(window).scroll(function () {
      $(".work").each(function () {
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight / 5) {
          $(this).css("opacity", "1");
        } else {
          $(this).css("opacity", "0");
        }
      });
    });
  });