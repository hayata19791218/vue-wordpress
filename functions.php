<?php
//初期設定
function my_setup(){
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag'); 
    add_theme_support('html5',array(  
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
}
add_action('after_setup_theme','my_setup');


//検索した時固定ページを除く
function SearchFilter($query) {
    if (!is_admin() && $query->is_search()) {
    $query->set('post_type', 'post');
    }
    return $query;
    }
    add_action( 'pre_get_posts','SearchFilter' );



//画像の画質を上げる
add_filter('jpeg_quality', function($arg){return 100;});


// 検索ページのテキストの文字数の制限
function twpp_change_excerpt_length( $length ) {
    return 30; 
  }
  add_filter( 'excerpt_length', 'twpp_change_excerpt_length', 999 );