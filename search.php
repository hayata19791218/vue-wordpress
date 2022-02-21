<?php get_header();?>
    <div class="l-search">
        <main>
            <?php if(function_exists('bcn_display')):?>
                <div class="l-search__breadcrumb">
                    <?php bcn_display();?>
                </div>
            <?php endif;?>
            <p class="l-search__title">
                <span class="l-search__span">「<?php echo get_search_query();?>」</span>の検索結果
            </p>
            <div class="l-search__lists">
                <?php if(have_posts()): while(have_posts()): the_post();?>
                    <a class="l-search__list" href="<?php the_permalink();?>">
                        <?php if(has_post_thumbnail()){
                                the_post_thumbnail('large');
                            }else{
                            echo '<img src="'.esc_url(get_template_directory_uri()).'/images/noimage.jpg" alt="">';
                            }
                        ?>
                        <div class="l-search__wrap">
                            <time class="l-search__date" datetime="<?php the_time('Y-m-d');?>"><?php the_time('Y年m月d日');?></time>
                            <h2 class="l-search__list-title"><?php the_title();?></h2><!--/.searchpage-title-->
                            <div class="l-search__excerpt"><?php the_excerpt();?></div>
                        </div>
                    </a>
                <?php endwhile; endif;?>
            </div>
        </main>
    </div>
<?php get_footer();?>