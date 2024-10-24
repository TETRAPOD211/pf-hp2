//スライドショーサンプル1（フェードイン、フェードアウト）

function slideSwitch() {
 var $active = $('#slideshow img.active'); //id名を参照（必要なら変更する）

 if ( $active.length == 0 ) $active = $('#slideshow img:last');  //id名を参照（必要なら変更する）

 var $next =  $active.next().length ? $active.next()
 : $('#slideshow img:first');  //id名を参照（必要なら変更する）

 $active.addClass('last-active');

 $next.css({opacity: 0.0})
  .addClass('active')
  .animate({opacity: 1.0}, 2000, function() { 
  $active.removeClass('active last-active');
 });
}

$(function() {
 setInterval( "slideSwitch()", 4000 ); //画像が切り替わる秒数の設定（1000=1秒）
});


