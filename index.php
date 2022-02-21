<?php get_header();?>

<!--ここからアドセンス-->
<div class="ads">
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  <ins class="adsbygoogle" style="display: block;" data-ad-client="ca-pub-9002942796422912" data-ad-slot="5955440275" data-ad-format="auto" data-full-width-responsive="true"></ins>
  <script>
      (adsbygoogle = window.adsbygoogle || []).push({});
  </script>
</div>

<main class="l-top-main">

  <!--トップに戻るボタン-->
  <btn class="u-js-topbtn"><i class="fas fa-chevron-up"></i></btn>

  <div class="l-top-main__wrap">
    <div class="l-top-main__articles">
      <?php if(have_posts()): while(have_posts()): the_post();?>
        <a href="<?php the_permalink();?>" class="l-top-main__article">
          <div class="l-top-main__field">
            <?php $cat = get_the_category();?>
            <?php $cat = $cat[0]; ?>
            <div class="l-top-main__category">
              <?php echo get_cat_name($cat->term_id);?>
            </div>
            <div class="l-top-main__date">
              <time datetime="<?php the_time("Y年m月d日");?>"><?php the_time("Y年m月d日");?></time>
            </div>
          </div>
          <?php the_post_thumbnail('medium');?>
          <h1 class="l-top-main__article-title"><?php the_title();?></h1>
        </a>
      <?php endwhile; endif;?>
      <div class="l-top-main__pagination">
        <?php 
          echo paginate_links(
            array(
              'end_size'=>0,
              'mid_size'=>1,
              'prev_next'=>false,
            )
          );
        ?>
      </div>
    </div>
    <?php get_sidebar();?>
  </div>
</main>
<?php get_footer();?>