<?php get_header('another2');?>
<div class="l-not-found">
        <main>
            <div class="l-not-found__wrap">
                <h2>404 Not Found</h2>
                <p>お探しのページが見つかりませんでした。<br>申し訳ございませんが<a href="<?php echo esc_url(home_url('/'));?>">こちらのリンク</a>からトップページにお戻りください。</p>
            </div>
        </main>
</div>
<?php get_footer('another');?>