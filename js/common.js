//ハンバーガーメニュー
$(function(){
  $('.u-js-burger-wrap').on('click',function(){
    // $('.u-js-burger-btn').toggleClass('close');
    $('.l-top-header__nav').fadeToggle(100);
    $('.u-js-bar__top').toggleClass('close1');
    $('.u-js-bar__middle').toggleClass('close2');
    $('.u-js-bar__bottom').toggleClass('close3');
  });
});



//トップページにある途中からトップに戻るボタン
$(function() {
  var btn = $('.u-js-topbtn');
  $(window).on('load scroll', function(){
    if($(this).scrollTop() > 1500) {
      btn.addClass('u-js-btnactive');
    }else{
      btn.removeClass('u-js-btnactive');
    }
  });
  btn.on('click',function () {
    $('body,html').animate({
      scrollTop: 0
    });
  });
});