//トップページの機能一覧の画像をマウスオーバーしたとき画像が変わる
jQuery(function(){
  jQuery('.c-flex__functions-img').each(function(){
    let img_off = jQuery(this).attr('src');
    let img_on = jQuery(this).attr('src').replace('off','on');
    jQuery(this).hover(function(){
      jQuery(this).attr('src',img_on);
    },
    function(){
      jQuery(this).attr('src',img_off);
    }
    );
  })
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
    jQuery('.change8').text('Option');
  });
})


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


//トップページでマウスオーバーで矢印の色が変わるのとモーダルが出る
jQuery(function(){
  jQuery('.c-arrow1').hover(
    function(){
      jQuery(this).find('.c-arrow1__circle,.c-arrow1__line').css('background-color','#4197c7');
      jQuery(this).find('.c-arrow1__chevron').css('border-right','8px solid #4197c7');
      jQuery(this).find('.c-arrow1__chevron').css('border-bottom','8px solid #4197c7');
      jQuery(this).find('.c-modal1').addClass('u-js-background1');
      jQuery('.c-arrow1').css('z-index','3');
      jQuery('.c-arrow2,.c-arrow3,.c-arrow4,.c-arrow5,.c-arrow6,.c-arrow7').css('z-index','2');
    },
    function(){
      jQuery(this).find('.c-arrow1__circle,.c-arrow1__line').css('background-color','#cdcbcb');
      jQuery(this).find('.c-arrow1__chevron').css('border-right','8px solid #cdcbcb');
      jQuery(this).find('.c-arrow1__chevron').css('border-bottom','8px solid #cdcbcb');
      jQuery('.c-arrow1').removeClass('u-bg1');
      jQuery(this).find('.c-modal1').removeClass('u-js-background1');
      jQuery('.c-arrow1,.c-arrow2,.c-arrow3,.c-arrow4,.c-arrow5,.c-arrow6,.c-arrow7').css('z-index','1');
    }
  );

  jQuery('.c-arrow2').hover(
    function(){
      jQuery(this).find('.c-arrow2__circle,.c-arrow2__line').css('background-color','#4197c7');
      jQuery(this).find('.c-arrow2__chevron').css('border-right','8px solid #4197c7');
      jQuery(this).find('.c-arrow2__chevron').css('border-bottom','8px solid #4197c7');
      jQuery(this).find('.c-modal2').addClass('u-js-background2');
      jQuery('.c-arrow2').css('z-index','3');
      jQuery('.c-arrow1,.c-arrow3,.c-arrow4,.c-arrow5,.c-arrow6,.c-arrow7').css('z-index','2');
    },
    function(){
      jQuery(this).find('.c-arrow2__circle,.c-arrow2__line').css('background-color','#cdcbcb');
      jQuery(this).find('.c-arrow2__chevron').css('border-right','8px solid #cdcbcb');
      jQuery(this).find('.c-arrow2__chevron').css('border-bottom','8px solid #cdcbcb');
      jQuery(this).find('.c-modal2').removeClass('u-js-background2');
      jQuery('.c-arrow2').removeClass('u-bg2');
      jQuery('.c-arrow1,.c-arrow2,.c-arrow3,.c-arrow4,.c-arrow5,.c-arrow6,.c-arrow7').css('z-index','1');
    }
  );

  jQuery('.c-arrow3').hover(
    function(){
      jQuery(this).find('.c-arrow3__circle,.c-arrow3__line').css('background-color','#4197c7');
      jQuery(this).find('.c-arrow3__chevron').css('border-right','8px solid #4197c7');
      jQuery(this).find('.c-arrow3__chevron').css('border-bottom','8px solid #4197c7');
      jQuery(this).find('.c-modal3').addClass('u-js-background3');
      jQuery('.c-arrow3').css('z-index','3');
      jQuery('.c-arrow1,.c-arrow2,.c-arrow4,.c-arrow5,.c-arrow6,.c-arrow7').css('z-index','2');
    },
    function(){
      jQuery(this).find('.c-arrow3__circle,.c-arrow3__line').css('background-color','#cdcbcb');
      jQuery(this).find('.c-arrow3__chevron').css('border-right','8px solid #cdcbcb');
      jQuery(this).find('.c-arrow3__chevron').css('border-bottom','8px solid #cdcbcb');
      jQuery(this).find('.c-modal3').removeClass('u-js-background3');
      jQuery('.c-arrow3').removeClass('u-bg3');
      jQuery('.c-arrow1,.c-arrow2,.c-arrow3,.c-arrow4,.c-arrow5,.c-arrow6,.c-arrow7').css('z-index','1');
    }
  );

  jQuery('.c-arrow4').hover(
    function(){
      jQuery(this).find('.c-arrow4__circle,.c-arrow4__line').css('background-color','#4197c7');
      jQuery(this).find('.c-arrow4__chevron').css('border-right','8px solid #4197c7');
      jQuery(this).find('.c-arrow4__chevron').css('border-bottom','8px solid #4197c7');
      jQuery(this).find('.c-modal4').addClass('u-js-background4');
      jQuery('.c-arrow4').css('z-index','3');
      jQuery('.c-arrow1,.c-arrow2,.c-arrow3,.c-arrow5,.c-arrow6,.c-arrow7').css('z-index','2');
    },
    function(){
      jQuery(this).find('.c-arrow4__circle,.c-arrow4__line').css('background-color','#cdcbcb');
      jQuery(this).find('.c-arrow4__chevron').css('border-right','8px solid #cdcbcb');
      jQuery(this).find('.c-arrow4__chevron').css('border-bottom','8px solid #cdcbcb');
      jQuery(this).find('.c-modal4').removeClass('u-js-background4');
      jQuery('.c-arrow4').removeClass('u-bg3');
      jQuery('.c-arrow1,.c-arrow2,.c-arrow3,.c-arrow4,.c-arrow5,.c-arrow6,.c-arrow7').css('z-index','1');
    }
  );

  jQuery('.c-arrow5').hover(
    function(){
      jQuery(this).find('.c-arrow5__circle,.c-arrow5__line').css('background-color','#4197c7');
      jQuery(this).find('.c-arrow5__chevron').css('border-right','8px solid #4197c7');
      jQuery(this).find('.c-arrow5__chevron').css('border-bottom','8px solid #4197c7');
      jQuery(this).find('.c-modal5').addClass('u-js-background5');
      jQuery('.c-arrow5').css('z-index','3');
      jQuery('.c-arrow1,.c-arrow2,.c-arrow3,.c-arrow4,.c-arrow6,.c-arrow7').css('z-index','2');
    },
    function(){
      jQuery(this).find('.c-arrow5__circle,.c-arrow5__line').css('background-color','#cdcbcb');
      jQuery(this).find('.c-arrow5__chevron').css('border-right','8px solid #cdcbcb');
      jQuery(this).find('.c-arrow5__chevron').css('border-bottom','8px solid #cdcbcb');
      jQuery(this).find('.c-modal5').removeClass('u-js-background5');
      jQuery('.c-arrow5').removeClass('u-bg3');
      jQuery('.c-arrow1,.c-arrow2,.c-arrow3,.c-arrow4,.c-arrow5,.c-arrow6,.c-arrow7').css('z-index','1');
    }
  );

  jQuery('.c-arrow6').hover(
    function(){
      jQuery(this).find('.c-arrow6__circle,.c-arrow6__line').css('background-color','#4197c7');
      jQuery(this).find('.c-arrow6__chevron').css('border-right','8px solid #4197c7');
      jQuery(this).find('.c-arrow6__chevron').css('border-bottom','8px solid #4197c7');
      jQuery(this).find('.c-modal6').addClass('u-js-background6');
      jQuery('.c-arrow6').css('z-index','3');
      jQuery('.c-arrow1,.c-arrow2,.c-arrow3,.c-arrow4,.c-arrow5,.c-arrow7').css('z-index','2');
    },
    function(){
      jQuery(this).find('.c-arrow6__circle,.c-arrow6__line').css('background-color','#cdcbcb');
      jQuery(this).find('.c-arrow6__chevron').css('border-right','8px solid #cdcbcb');
      jQuery(this).find('.c-arrow6__chevron').css('border-bottom','8px solid #cdcbcb');
      jQuery(this).find('.c-modal6').removeClass('u-js-background6');
      jQuery('.c-arrow6').removeClass('u-bg3');
      jQuery('.c-arrow1,.c-arrow2,.c-arrow3,.c-arrow4,.c-arrow5,.c-arrow6,.c-arrow7').css('z-index','1');
    }
  );

  jQuery('.c-arrow7').hover(
    function(){
      jQuery(this).find('.c-arrow7__circle,.c-arrow7__line').css('background-color','#4197c7');
      jQuery(this).find('.c-arrow7__chevron').css('border-right','8px solid #4197c7');
      jQuery(this).find('.c-arrow7__chevron').css('border-bottom','8px solid #4197c7');
      jQuery(this).find('.c-modal7').addClass('u-js-background7');
      jQuery('.c-arrow7').css('z-index','3');
      jQuery('.c-arrow1,.c-arrow2,.c-arrow3,.c-arrow4,.c-arrow5,.c-arrow7').css('z-index','2');
    },
    function(){
      jQuery(this).find('.c-arrow7__circle,.c-arrow7__line').css('background-color','#cdcbcb');
      jQuery(this).find('.c-arrow7__chevron').css('border-right','8px solid #cdcbcb');
      jQuery(this).find('.c-arrow7__chevron').css('border-bottom','8px solid #cdcbcb');
      jQuery(this).find('.c-modal7').removeClass('u-js-background7');
      jQuery('.c-arrow7').removeClass('u-bg3');
      jQuery('.c-arrow1,.c-arrow2,.c-arrow3,.c-arrow4,.c-arrow5,.c-arrow6,.c-arrow7').css('z-index','1');
    }
  );


  
});


//トップページの主要機能一覧のモーダル
jQuery(function(){
  jQuery('.c-flex__functions-list1').hover(function(){
    jQuery('.u-js-modal1').addClass('u-js-modal');
  },function(){
    jQuery('.u-js-modal1').removeClass('u-js-modal');
  }
  );
  jQuery('.c-flex__functions-list2').hover(function(){
    jQuery('.u-js-modal2').addClass('u-js-modal');
    jQuery('.u-js-modal1').css('display','none');
  },function(){
    jQuery('.u-js-modal2').removeClass('u-js-modal');
    jQuery('.u-js-modal1').css('display','block');
  }
  );
  jQuery('.c-flex__functions-list3').hover(function(){
    jQuery('.u-js-modal3').addClass('u-js-modal');
    jQuery('.u-js-modal1').css('display','none');
  },function(){
    jQuery('.u-js-modal3').removeClass('u-js-modal');
    jQuery('.u-js-modal1').css('display','block');
  }
  );
  jQuery('.c-flex__functions-list4').hover(function(){
    jQuery('.u-js-modal4').addClass('u-js-modal');
    jQuery('.u-js-modal1').css('display','none');
  },function(){
    jQuery('.u-js-modal4').removeClass('u-js-modal');
    jQuery('.u-js-modal1').css('display','block');
  }
  );
  jQuery('.c-flex__functions-list5').hover(function(){
    jQuery('.u-js-modal5').addClass('u-js-modal');
    jQuery('.u-js-modal1').css('display','none');
  },function(){
    jQuery('.u-js-modal5').removeClass('u-js-modal');
    jQuery('.u-js-modal1').css('display','block');
  }
  );
  jQuery('.c-flex__functions-list6').hover(function(){
    jQuery('.u-js-modal6').addClass('u-js-modal');
    jQuery('.u-js-modal1').css('display','none');
  },function(){
    jQuery('.u-js-modal6').removeClass('u-js-modal');
    jQuery('.u-js-modal1').css('display','block');
  }
  );
  jQuery('.c-flex__functions-list7').hover(function(){
    jQuery('.u-js-modal7').addClass('u-js-modal');
    jQuery('.u-js-modal1').css('display','none');
  },function(){
    jQuery('.u-js-modal7').removeClass('u-js-modal');
    jQuery('.u-js-modal1').css('display','block');
  }
  );
  jQuery('.c-flex__functions-list8').hover(function(){
    jQuery('.u-js-modal8').addClass('u-js-modal');
    jQuery('.u-js-modal1').css('display','none');
  },function(){
    jQuery('.u-js-modal8').removeClass('u-js-modal');
    jQuery('.u-js-modal1').css('display','block');
  }
  );
  jQuery('.c-flex__functions-list9').hover(function(){
    jQuery('.u-js-modal9').addClass('u-js-modal');
    jQuery('.u-js-modal1').css('display','none');
  },function(){
    jQuery('.u-js-modal9').removeClass('u-js-modal');
    jQuery('.u-js-modal1').css('display','block');
  }
  );
  jQuery('.c-flex__functions-list10').hover(function(){
    jQuery('.u-js-modal10').addClass('u-js-modal');
    jQuery('.u-js-modal1').css('display','none');
  },function(){
    jQuery('.u-js-modal10').removeClass('u-js-modal');
    jQuery('.u-js-modal1').css('display','block');
  }
  );
  jQuery('.c-flex__functions-list11').hover(function(){
    jQuery('.u-js-modal11').addClass('u-js-modal');
    jQuery('.u-js-modal1').css('display','none');
  },function(){
    jQuery('.u-js-modal11').removeClass('u-js-modal');
    jQuery('.u-js-modal1').css('display','block');
  }
  );
  jQuery('.c-flex__functions-list12').hover(function(){
    jQuery('.u-js-modal12').addClass('u-js-modal');
    jQuery('.u-js-modal1').css('display','none');
  },function(){
    jQuery('.u-js-modal12').removeClass('u-js-modal');
    jQuery('.u-js-modal1').css('display','block');
  }
  );
  jQuery('.c-flex__functions-list13').hover(function(){
    jQuery('.u-js-modal13').addClass('u-js-modal');
    jQuery('.u-js-modal1').css('display','none');
  },function(){
    jQuery('.u-js-modal13').removeClass('u-js-modal');
    jQuery('.u-js-modal1').css('display','block');
  }
  );
  jQuery('.c-flex__functions-list14').hover(function(){
    jQuery('.u-js-modal14').addClass('u-js-modal');
    jQuery('.u-js-modal1').css('display','none');
  },function(){
    jQuery('.u-js-modal14').removeClass('u-js-modal');
    jQuery('.u-js-modal1').css('display','block');
  }
  );
  jQuery('.c-flex__functions-list15').hover(function(){
    jQuery('.u-js-modal15').addClass('u-js-modal');
    jQuery('.u-js-modal1').css('display','none');
  },function(){
    jQuery('.u-js-modal15').removeClass('u-js-modal');
    jQuery('.u-js-modal1').css('display','block');
  }
  );
  jQuery('.c-flex__functions-list16').hover(function(){
    jQuery('.u-js-modal16').addClass('u-js-modal');
    jQuery('.u-js-modal1').css('display','none');
  },function(){
    jQuery('.u-js-modal16').removeClass('u-js-modal');
    jQuery('.u-js-modal1').css('display','block');
  }
  );
});



//slick
jQuery(function(){
  jQuery('.slick').slick({
    autoplay: true, //自動再生
    focusOnSelect: true,
    slidesToShow:6,
    autoplaySpeed: 0,
    cssEase: 'linear',
    speed: 25000,
    // arrows: true,
    slidesToScroll: 6,
    // dots:true

  });
});


//タブの切り替え
jQuery(function(){
  let tabs = jQuery(".u-js-tab");
  let blocks = jQuery(".u-none")
  jQuery(".u-js-tab").on("click",function(){
    jQuery(".u-js-active").removeClass("u-js-active");
    jQuery(this).addClass("u-js-active");
    const index = tabs.index(this);
    jQuery(".u-js-content").removeClass("u-js-show").eq(index).addClass("u-js-show");
    jQuery(".u-none").removeClass("u-show").eq(index).addClass("u-show");
  });
});


//トップページの4つの円グラフの左上
jQuery(function(jQuery){	
	var myLabels = [
		"上場", "未上場"
	];
	var myDatasets = [{
		backgroundColor: [
			"#F8B856","#EB6DA4",
		],
		data: [
			32 , 68
		]
	}];
	var config = {
		type: 'doughnut',
		data: {
			labels: myLabels,
			datasets: myDatasets
		},
    options: {
      maintainAspectRatio: false,     //これでチャートのサイズのしていができるようになる
      title:{
        display:true,
        text:'上場区分' //タイトル
      },
      plugins: {
        labels: {
          render: 'percentage',
          fontColor: 'white',
          fontSize: 19
        }
      },
      tooltips: {
        enabled: true,
        callbacks: {
            label: function(tooltipItem, data){
                return data.labels[tooltipItem.index] + ":" + data.datasets[0].data[tooltipItem.index] + "%";
            }
        }
      },
    }
	};
	function conditional(id){
		var docTop = jQuery(window).scrollTop();
		var docBottom = docTop + jQuery(window).height();
		var elemTop = jQuery(id).offset().top;
		var elemBottom = elemTop + jQuery(id).height();
		return (elemTop <= docBottom) && (docTop <= elemBottom);
	}
	var draw = false;
	jQuery(window).on('scroll', function() {
		if(conditional("#graph-area1")){ 
			if(!draw){ 
				var ctx = document.getElementById("graph-area1");
				var myChart = new Chart(ctx, config);
				draw = true;
			}
		}else{ 
			draw = false;
		}
	});
});


//トップページの4つの円グラフの右上
jQuery(function(jQuery){	
	var myLabels = [
		"東証一部", "東証二部", "JASDAQ"
	];
	var myDatasets = [{
		backgroundColor: [
			"#EB6DA4","#2BB7B3","#2BB7B3"
		],
		data: [
			88, 6, 6
		]
	}];
	var config = {
		type: 'doughnut',
		data: {
			labels: myLabels,
			datasets: myDatasets
		},
    options: {
      maintainAspectRatio: false,     //これでチャートのサイズのしていができるようになる
      //グラフのタイトル
      title:{
        display:true,
        text:'上場区分' //タイトル
      },
      plugins: {
        labels: {
          render: 'percentage',
          fontColor: 'white',
          fontSize: 19
        }
      },
      tooltips: {
        enabled: true,
        callbacks: {
            label: function(tooltipItem, data){
                return data.labels[tooltipItem.index] + ":" + data.datasets[0].data[tooltipItem.index] + "%";
            }
        }
      },
    }
	};
	function conditional(id){
		var docTop = jQuery(window).scrollTop();
		var docBottom = docTop + jQuery(window).height();
		var elemTop = jQuery(id).offset().top;
		var elemBottom = elemTop + jQuery(id).height();
		return (elemTop <= docBottom) && (docTop <= elemBottom);
	}
	var draw = false;
	jQuery(window).on('scroll', function() {
		if(conditional("#graph-area2")){ 
			if(!draw){ 
				var ctx = document.getElementById("graph-area2");
				var myChart = new Chart(ctx, config);
				draw = true;
			}
		}else{ 
			draw = false;
		}
	});
});


//トップページの4つの円グラフの左下
jQuery(function(jQuery){	
	var myLabels = [
		"〜300", "301〜500", "501〜1000","1001〜3000","3001〜5000","5001〜10000","10001〜"
	];
	var myDatasets = [{
		backgroundColor: [
			"#2BB7B3","#02AFEB","#FF338B","#FFAB2E","#00A0E9","#7CCFF5","#7dcff5"
		],
		data: [
			19, 16, 26, 25, 6, 4, 4
		]
	}];
	var config = {
		type: 'doughnut',
		data: {
			labels: myLabels,
			datasets: myDatasets
		},
    options: {
      maintainAspectRatio: false,     //これでチャートのサイズのしていができるようになる
      //グラフのタイトル
      title:{
        display:true,
        text:'従業員数' //タイトル
      },
      plugins: {
        labels: {
          render: 'percentage',
          fontColor: 'white',
          fontSize: 19
        }
      },
      tooltips: {
        enabled: true,
        callbacks: {
            label: function(tooltipItem, data){
                return data.labels[tooltipItem.index] + ":" + data.datasets[0].data[tooltipItem.index] + "%";
            }
        }
      },
    }
	};
	function conditional(id){
		var docTop = jQuery(window).scrollTop();
		var docBottom = docTop + jQuery(window).height();
		var elemTop = jQuery(id).offset().top;
		var elemBottom = elemTop + jQuery(id).height();
		return (elemTop <= docBottom) && (docTop <= elemBottom);
	}
	var draw = false;
	jQuery(window).on('scroll', function() {
		if(conditional("#graph-area3")){ 
			if(!draw){ 
				var ctx = document.getElementById("graph-area3");
				var myChart = new Chart(ctx, config);
				draw = true;
			}
		}else{ 
			draw = false;
		}
	});
});


//トップページの4つの円グラフの右下
jQuery(function(jQuery){	
	var myLabels = [
		"情報通信", "卸売小売", "製造","不動産","インフラ","建設","その他サービス","金融","宿泊，飲食","運輸","医療，福祉"
	];
	var myDatasets = [{
		backgroundColor: [
			"#2BB7B3","#FFAB2E","#FF338B","#7ECEF4","#6bafdb","#2BB7B3","#7ECEF4","#00A0E9","#7ECEF4","#6bafdb","#3563f0"
		],
		data: [
			11, 22, 31, 4, 3, 11, 4, 6, 4, 3, 1
		]
	}];
	var config = {
		type: 'doughnut',
		data: {
			labels: myLabels,
			datasets: myDatasets
		},
    options: {
      maintainAspectRatio: false,     //これでチャートのサイズのしていができるようになる
      //グラフのタイトル
      title:{
        display:true,
        text:'業種' //タイトル
      },
      plugins: {
        labels: {
          render: 'percentage',
          fontColor: 'white',
          fontSize: 19
        }
      },
      tooltips: {
        enabled: true,
        callbacks: {
            label: function(tooltipItem, data){
                return data.labels[tooltipItem.index] + ":" + data.datasets[0].data[tooltipItem.index] + "%";
            }
        }
      },
    }
	};
	function conditional(id){
		var docTop = jQuery(window).scrollTop();
		var docBottom = docTop + jQuery(window).height();
		var elemTop = jQuery(id).offset().top;
		var elemBottom = elemTop + jQuery(id).height();
		return (elemTop <= docBottom) && (docTop <= elemBottom);
	}
	var draw = false;
	jQuery(window).on('scroll', function() {
		if(conditional("#graph-area4")){ 
			if(!draw){ 
				var ctx = document.getElementById("graph-area4");
				var myChart = new Chart(ctx, config);
				draw = true;
			}
		}else{ 
			draw = false;
		}
	});
});


//トップページのスムーススクロール
jQuery(function(){
  jQuery('a[href^="#"]').click(function(){
    var adjust = 0;
    var speed = 400;
    var href= jQuery(this).attr("href");
    var target = jQuery(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    jQuery('.u-js-burger-btn').click();
    // jQuery('.u-js-burger-btn').removeClass('close');
    jQuery('body,html').animate({scrollTop:position}, speed, 'swing');
    // jQuery('.u-js-nav-wrapper').addClass('u-show');
    return false;
  });
});


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

