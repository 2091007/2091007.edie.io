/* global $, google */

// ハンバーガーメニュー（アコーディオン）
$('#hamburger-button').click(function(){
  if ($('#hamburger-navi-menu').is(':visible')) {
    $('#hamburger-navi-menu').slideUp();
  } else {
    $('#hamburger-navi-menu').slideDown();
  }
});

//slickの設定
$('#head-visual').slick({
  autoplay: true, //自動で次の画像を表示
  autoplaySpeed: 5000, //表示間隔5000ミリ秒（5秒）
  dots: true, //クリックすると画像が切り替わるドットをスライダーの下に表示
  arrows: true, //クリックすると前へ戻るボタンをスライダーの左右に表示
})

// ページ内リンクをクリックしたらスクロールさせて移動する
$('a[href^=#]').click(function(){
  var adjust = -60; /* ヘッダーの高さ分だけ移動位置を調整するための調整値 */
  var speed = 400;  /* 移動にかける時間（ミリ秒） */
  var href= $(this).attr('href'); /* クリックしたリンクのhref属性を取得 */

  // リンク先の指定が無い場合はページ最上部への移動とする
  var target = $(href);
  if (href == "#" || href == "") {
    target = $('html');
  }

  // 移動する位置の算出 
  var position = target.offset().top + adjust;

  // animateメソッドを利用してスクロールさせながらpositionの位置まで移動する
  $('body,html').animate({scrollTop: position}, speed, 'swing');
  return false;
});