<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <!-- レスポンシブ -->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- スタイル -->
    <link href="<?php echo get_template_directory_uri();?>/css/style.css" rel="stylesheet" type="text/css">

    <!-- fontawesome -->
    <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">

    <!-- jQery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <!-- Googleフォント -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet">

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-146594578-6"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-146594578-6');
    </script>

    <?php wp_head();?>
  </head>
  <body <?php body_class();?>>
    <div class="u-another-all-wrap">
      <header class="l-top-header">
        <div class="l-top-header__header-wrap">
          <a href="/" class="l-top-header__field">
            <h1>
              <img src="<?php echo get_template_directory_uri();?>/images/top/top1.png" alt="" class="l-top-header__logo">
            </h1>
            <p class="l-top-header__description">Vue.jsを愛する人間のブログ</p>
          </a>
          <nav class="l-top-header__nav">
            <ul class="l-top-header__nav-wrap">
              <li>お問合せ</li>
              <li>プライバシー・ポリシー</li>
              <li>当ブログへようこそ</li>
            </ul>
          </nav>

          <!--ハンバーガーメニュー-->
          <nav class="u-js-burger-wrap">
            <ul>
              <li class="u-js-bar u-js-bar__top"></li>
              <li class="u-js-bar u-js-bar__middle"></li>
              <li class="u-js-bar u-js-bar__bottom"></li>
            </ul>
          </nav>
        </div>
          

      </header>