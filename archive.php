<?php get_header();?>
    <div class="l-archive">
        <main>
            <?php if(function_exists('bcn_display')):?>
                <div class="l-archive__breadcrumb">
                    <?php bcn_display();?>
                </div>
            <?php endif;?>
            <p class="l-archive__title">
                <span class="l-archive__span">「<?php the_time('Y年m月');?>」</span>月のアーカイブ
            </p>
            <div class="l-archive__lists">
                <?php if(have_posts()): while(have_posts()): the_post();?>
                    <a class="l-archive__list" href="<?php the_permalink();?>">
                        <?php if(has_post_thumbnail()){
                                the_post_thumbnail('large');
                            }else{
                            echo '<img src="'.esc_url(get_template_directory_uri()).'/images/noimage.jpg" alt="">';
                            }
                        ?>
                        <div class="l-archive__wrap">
                            <time class="l-archive__date" datetime="<?php the_time('Y-m-d');?>"><?php the_time('Y年m月d日');?></time>
                            <h2 class="l-archive__list-title"><?php the_title();?></h2>
                            <div class="l-archive__excerpt"><?php the_excerpt();?></div>
                        </div>
                    </a>
                <?php endwhile; endif;?>
            </div>
        </main>
    </div>
<?php get_footer();?>