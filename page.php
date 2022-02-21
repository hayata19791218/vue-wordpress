<?php get_header();?>
<main>
    <div class="l-paged">
        <?php if(function_exists('bcn_display')):?>
            <div class="l-paged__breadcrumb">
                <?php bcn_display();?>
            </div>
        <?php endif;?>
        <div class="l-paged__field">
            <h1><?php the_title();?></h1>
            <?php the_content();?>
        </div>
    </div>
</main>

<?php get_footer();?>