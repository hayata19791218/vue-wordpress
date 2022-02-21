//ハンバーガーメニュー
jQuery(function(){
    jQuery('.u-js-burger-btn').on('click',function(){
      jQuery('.u-js-burger-btn').toggleClass('close');
      jQuery('.u-js-nav-wrapper').fadeToggle(500);
      jQuery('.u-js-nav-item:first-child').toggleClass('u-js-move1');
      jQuery('.u-js-nav-item:nth-child(2)').toggleClass('u-js-move2');
      jQuery('.u-js-nav-item:nth-child(3)').toggleClass('u-js-move3');
      jQuery('.u-js-nav-item:nth-child(4)').toggleClass('u-js-move4');
      jQuery('.u-js-nav-item:nth-child(5)').toggleClass('u-js-move5');
      jQuery('.u-js-nav-item:nth-child(6)').toggleClass('u-js-move6');
      jQuery('.u-js-nav-item:nth-child(7)').toggleClass('u-js-move7');
    });
});


//kit-workのページのタブで切り替えるボタン
jQuery(function(){

  //上にあるタブ
  let tabs = jQuery(".u-js-tab");
  jQuery(".u-js-tab").on("click",function(){
    jQuery(".u-js-active").removeClass("u-js-active");
    jQuery(this).addClass("u-js-active");
    const index = tabs.index(this);
    jQuery(".u-js-content").removeClass("u-js-show").eq(index).addClass("u-js-show");
    jQuery(".u-none").removeClass("u-show").eq(index).addClass("u-show");
  });

  //下にあるタブ
  let tabs2 = jQuery(".u-js-tab2");
  jQuery(".u-js-tab2").on("click",function(){
    jQuery(".u-js-active2").removeClass("u-js-active2");
    jQuery(this).addClass("u-js-active2");
    const index = tabs2.index(this);
    jQuery(".u-js-content").removeClass("u-js-show").eq(index).addClass("u-js-show");
    jQuery(".u-none").removeClass("u-show").eq(index).addClass("u-show");
  });
});


//トップページにある途中からトップに戻るボタン
jQuery(function() {
  var btn = jQuery('.u-js-topbtn');
  jQuery(window).on('load scroll', function(){
    if(jQuery(this).scrollTop() > 1500) {
      btn.addClass('u-js-btnactive');
    }else{
      btn.removeClass('u-js-btnactive');
    }
  });
  btn.on('click',function () {
    jQuery('body,html').animate({
      scrollTop: 0
    });
  });
});


//ヘッダーナビをマウスオーバーした時のテキストの変化
jQuery(function(){
  jQuery('.change1').hover(function(){
    jQuery('.change1').text('トップ');
  },function(){
    jQuery('.change1').text('Top');
  });
  jQuery('.change2').hover(function(){
    jQuery('.change2').text('目的検索');
  },function(){
    jQuery('.change2').text('Search');
  });
  jQuery('.change3').hover(function(){
    jQuery('.change3').text('機能一覧');
  },function(){
    jQuery('.change3').text('Function');
  });
  jQuery('.change4').hover(function(){
    jQuery('.change4').text('事例紹介');
  },function(){
    jQuery('.change4').text('Case');
  });
  jQuery('.change5').hover(function(){
    jQuery('.change5').text('セキュリティ');
  },function(){
    jQuery('.change5').text('Security');
  });
  jQuery('.change6').hover(function(){
    jQuery('.change6').text('デモ体験');
  },function(){
    jQuery('.change6').text('Trial');
  });
  jQuery('.change7').hover(function(){
    jQuery('.change7').text('料金');
  },function(){
    jQuery('.change7').text('Price');
  });
  jQuery('.change8').hover(function(){
    jQuery('.change8').text('オプション');
  },function(){
    jQuery('.change8').text('Option▼');
  });
})