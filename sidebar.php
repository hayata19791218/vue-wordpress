<div class="l-top-sidebar">
    <div class="l-top-sidebar__profile-wrap">
        <h2 class="l-top-sidebar__profile-title">プロフィール</h2>
        <img src="<?php echo get_template_directory_uri();?>/images/top/top2.jpg" alt="" class="l-top-sidebar__profile-img">
        <p class="l-top-sidebar__profile-content">サイト運営者のjonioです。<br>とある会社で実務をしています。<br>Vue.jsをネットの記事のみで勉強を始めて大好きになったのでブログサイトを作りました。<br>このサイトはVue.jsとNuxt.jsを解説しています。</p>
    </div>
    <?php get_search_form();?>
    <div class="l-top-sidebar__new-article">
        <h2 class="l-top-sidebar__new-article-title">新着記事</h2>
        <?php
            $args = array(
                'posts_per_page' => 3
            );
            $postslist = get_posts( $args );
            foreach ( $postslist as $post ) : 
            setup_postdata( $post ); 
        ?> 
            <a class="l-top-sidebar__new-article-wrap" href="<?php the_permalink();?>">
             
                <?php if(has_post_thumbnail()){
                    the_post_thumbnail('large');
                }else{
                echo '<img src="'.esc_url(get_template_directory_uri()).'/images/noimage.jpg" alt="">';
                }
                ?>
                <p class="l-top-sidebar__article"><?php the_title();?></p>
            </a>
        <?php
        endforeach; 
        wp_reset_postdata(); 
        ?>
    </div>
    <div class="l-top-sidebar__archive">
        <h2 class="l-top-sidebar__archive-title">月刊アーカイブ</h2>
        <ul>
            <?php
                $args = array(
                    'type' => 'monthly',
                    'show_post_count' => false,
                );
                wp_get_archives( $args );
            ?>  
        </ul>
    </div>
    <div class="l-top-sidebar__category">
        <h2 class="l-top-sidebar__category-title">カテゴリー</h2>
        <ul>
            <?php 
                $args = array(
                    'title_li' => '',
                    'show_count' => false,
                );
                wp_list_categories($args);
            ?>
        </ul>
    </div>
</div>