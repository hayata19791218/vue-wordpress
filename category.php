<?php get_header();?>
    <div class="l-category">
        <main>
            <?php if(function_exists('bcn_display')):?>
                <div class="l-category__breadcrumb">
                    <?php bcn_display();?>
                </div>
            <?php endif;?>
            <p class="l-category__title">
                <?php $cat = get_the_category(); ?>
                <?php $cat = $cat[0]; ?>
                <span class="l-category__span">「<?php echo get_cat_name($cat->term_id); ?>」</span>一覧
            </p>
            <div class="l-category__lists">
                <?php if(have_posts()): while(have_posts()): the_post();?>
                    <a class="l-category__list" href="<?php the_permalink();?>">
                        <?php if(has_post_thumbnail()){
                                the_post_thumbnail('large');
                            }else{
                            echo '<img src="'.esc_url(get_template_directory_uri()).'/images/noimage.jpg" alt="">';
                            }
                        ?>
                        <div class="l-category__wrap">
                            <time class="l-category__date" datetime="<?php the_time('Y-m-d');?>"><?php the_time('Y年m月d日');?></time>
                            <h2 class="l-category__list-title"><?php the_title();?></h2>
                            <div class="l-category__excerpt"><?php the_excerpt();?></div>
                        </div>
                    </a>
                <?php endwhile; endif;?>
            </div>
        </main>
    </div>
<?php get_footer();?>