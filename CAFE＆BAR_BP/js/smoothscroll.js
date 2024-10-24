//aタグをクリックしたときのスムーズスクロール
$(function(){
 $('a[href^="#"]').click(function(){     // #で始まるアンカーをクリックした場合に処理
  var speed = 600;                    // スクロールの速度（1000＝１秒）
  var href= $(this).attr("href");    // アンカーの値取得
  var target = $(href == "#" || href == "" ? 'html' : href); // 移動先を取得
  var position = target.offset().top;   // 移動先を数値で取得
  $("html, body").animate({scrollTop:position}, speed, "swing"); // スムーススクロール
  return false;
 });
});



//一定の場所にきたらフェードインして表示されるボタンのスムーズスクロール
$(function() {
 var topBtn = $('#page-top');	
 topBtn.hide();
 //スクロールが500に達したらボタン表示
 $(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
   topBtn.fadeIn();
  } else {
   topBtn.fadeOut();
  }
 });
 //スクロールしてトップ
 topBtn.click(function () {
  $('body,html').animate({
   scrollTop: 0
  }, 500);
  return false;
 });
});