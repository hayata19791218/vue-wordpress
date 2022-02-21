<?php get_header();?>
    <div class="l-single-main">
        <div  class="l-single-main__wrap">
            <?php if(function_exists('bcn_display')):?>
                <div class="l-single-main__breadcrumb">
                    <?php bcn_display();?>
                </div>
            <?php endif;?>
            <main class="l-single-main__block">
                <h1><?php the_title();?></h1>
                <div class="l-single-main__eyecatch">
                    <?php the_post_thumbnail('large');?>
                </div>
                <div class="l-single-main__field">
                    <?php the_content();?>
                </div>
            </main>
        </div>
        
            
            <?php get_sidebar();?>
       
    </div>
<?php get_footer();?>