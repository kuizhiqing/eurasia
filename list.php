<?php
require_once('DB.php');
?>
<div id="content" class="clearfix">
    <div id="main" class="clearfix" role="main">
		<div class="entry-content post-content">
            <div id="grid-wrap" class="clearfix menu-full isotope" style="position: relative; overflow: hidden; height: 1200.59px;">
            <?php foreach (getlist($dbh,$page) as $raw){ ?>
                <div class="grid-box isotope-item mains" style="position: absolute; left: 0px; top: 0px; transform: translate3d(0px, 0px, 0px);">
                    <article id="post-55" class="post-55 menu_item type-menu_item status-publish has-post-thumbnail hentry menu_item_category-mains">
                        <div class="imgthumb">
                        <img width="300" height="300" src="<?php echo '/image/'.$raw['img']; ?>" class="attachment-600x300 size-600x300 wp-post-image" alt="">
                        </div> 
                        <header class="entry-header">
                        <h2 class="entry-title"><?php echo $raw['title']; ?></h2>
                        </header><!-- .entry-header -->
                        <div class="entry-content post-content">
                        <p><?php echo $raw['desc1']; ?></p>
                        </div><!-- .entry-content -->
                        <?php if(!($page=='index')){ ?>
                        <footer class="entry-meta">
                            <span class="cat-links">
                            <span class="meta-eat">In</span> <strong><?php echo $raw['labels']; ?></strong>        
                            </span>
                        </footer><!-- #entry-meta -->
                        <div class="menu-price"><?php echo $raw['price']; ?>€</div>
                        <?php } ?>
                    </article>
                </div>
            <?php } ?>
            </div>
        </div>
    </div> <!-- end #main -->
</div> <!-- end #content -->
