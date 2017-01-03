<?php
require_once('DB.php');
?>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script>
<script type="text/javascript" src="jquery.form.js"></script>
<style type="text/css">
.demo{width:620px; margin:30px auto}
.demo p{line-height:32px}
.btn{position: relative;overflow: hidden;margin-right: 4px;display:inline-block;*display:inline;padding:4px 10px 4px;font-size:14px;line-height:18px;*line-height:20px;color:#fff;text-align:center;vertical-align:middle;cursor:pointer;background-color:#5bb75b;border:1px solid #cccccc;border-color:#e6e6e6 #e6e6e6 #bfbfbf;border-bottom-color:#b3b3b3;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;}
.btn input {position: absolute;top: 0; right: 0;margin: 0;border: solid transparent;opacity: 0;filter:alpha(opacity=0); cursor: pointer;}
.progress { position: relative; margin-left: 0px; margin-top: 4px; width: 100px; padding: 1px; border-radius: 3px;}
.bar {background-color: green; display:block; width:0%; height:20px; border-radius: 3px; }
.percent { position:absolute; height:20px; display:inline-block; top:3px; left:2%; color:#fff }
.files{height:22px; line-height:22px; margin:10px 0}
.delimg{margin-left:20px; color:#090; cursor:pointer}
#newitem-div, #common-area{width: 95%; margin: 20px; border-style: solid; border-width: 1px; border-color: black; } 
#upload-image{vertical-align: top;height: 130px; display: inline-block; width: 230px; margin: 10px;}
.menu-price input{width:56px;}
#showimg{display:inline-block;margin:10px;width: 200px; height: 200px; border-style: solid; border-width: 1px;}
#showimg img{width:100%;heigth:100%;}
</style>

<div id="common-area" class="">
<div id="upload-image" class="">
     <p>file format : jpg </p>
     <p>max siez: 1m </p>
     <div class="btn">
         <span>change pic</span>
         <input id="fileupload" type="file" name="mypic">
     </div>
     <div class="progress">
         <span class="bar"></span><span class="percent">0%</span >
     </div>
     <div class="files"></div>
</div>
<div id="showimg"></div>
</div>
<div id="content" class="clearfix">
    <div id="main" class="clearfix" role="main">
		<div class="entry-content post-content">
            <div id="grid-wrap" class="clearfix menu-full isotope" style="position: relative; overflow: hidden; height: 1200.59px;">
            <?php 
                foreach (getlist($dbh,$page) as $raw){ 
            ?>
            <form action="admin.php" method="post">
                <div class="grid-box isotope-item mains" style="position: absolute; left: 0px; top: 0px; transform: translate3d(0px, 0px, 0px);">
                    <article id="post-55" class="post-55 menu_item type-menu_item status-publish has-post-thumbnail hentry menu_item_category-mains">
                        <div class="imgthumb">
                        <img width="300" height="300" src="<?php echo '/image/'.$raw['img']; ?>" class="attachment-600x300 size-600x300 wp-post-image" alt="">
                        </div> 
                        <header class="entry-header">
                        <h2 class="entry-title">
                            <input type="text" name="title" value="<?php echo $raw['title']; ?>" />
                        </h2>
                        </header><!-- .entry-header -->
                        <div class="entry-content post-content">
                        <p><input type="text" name="desc1" value="<?php echo $raw['desc1']; ?>" /></p>
                        </div><!-- .entry-content -->
                        <footer class="entry-meta">
                            <span class="cat-links">
                            <span class="meta-eat">In</span> <strong><input type="text" name="labels" value="<?php echo $raw['labels']; ?>" /></strong>        
                            </span>
                        </footer><!-- #entry-meta -->
                        <div class="menu-price"><input type="text" name="price" value="<?php echo $raw['price']; ?>" />€</div>
                        <input type="hidden" name="desc2" value="<?php echo $raw['desc2']; ?>" />
                        <table>
                        <tr><td>ordre</td><td><select name="ordre" >
                          <option value="1" <?php if($raw['ordre']==1){echo "selected";} ?>>1</option>
                          <option value="2" <?php if($raw['ordre']==2){echo "selected";} ?>>2</option>
                          <option value="3" <?php if($raw['ordre']==3){echo "selected";} ?>>3</option>
                          <option value="4" <?php if($raw['ordre']==4){echo "selected";} ?>>4</option>
                          <option value="5" <?php if($raw['ordre']==5){echo "selected";} ?>>5</option>
                          <option value="6" <?php if($raw['ordre']==6){echo "selected";} ?>>6</option>
                          <option value="7" <?php if($raw['ordre']==7){echo "selected";} ?>>7</option>
                        </select></td></tr>
                        <tr><td>catague</td><td>
                        <select name="cat" >
                          <option value="">non</option>
                          <option value="index" <?php if($raw['cat']=='index'){echo "selected";} ?>>index</option>
                          <option value="chinois" <?php if($raw['cat']=='chinois'){echo "selected";} ?>>chinois</option>
                          <option value="japonais" <?php if($raw['cat']=='japonais'){echo "selected";} ?>>japonais</option>
                          <option value="desserts" <?php if($raw['cat']=='desserts'){echo "selected";} ?>>desserts</option>
                          <option value="boissons" <?php if($raw['cat']=='boissons'){echo "selected";} ?>>boissons</option>
                        </select></td></tr> 
                        <tr><td>visible</td><td>
                        <select name="visible" >
                          <option value="0" <?php if($raw['visible']=='0'){echo "selected";} ?>>non</option>
                          <option value="1" <?php if($raw['visible']=='1'){echo "selected";} ?>>yes</option>
                        </td></tr>
                        <tr><td></td><td><input type="submit" value="update" /></td></tr>
                        </table>
                        <input class="input-img" type="hidden" name="img" value="<?php echo $raw['img']; ?>"/>
                        <input type="hidden" name="id" value="<?php echo $raw['id']; ?>"/>
                        <input type="hidden" name="action" value="update"/>
                    </article>
                </div>
            </form>
            <?php } ?>
            </div>
        </div>
    </div> <!-- end #main -->
</div> <!-- end #content -->

<script type="text/javascript">
$(function () {
	var bar = $('.bar');
	var percent = $('.percent');
	var showimg = $('#showimg');
	var progress = $(".progress");
	var files = $(".files");
	var btn = $(".btn span");
	$("#fileupload").wrap("<form id='myupload' action='processimage.php' method='post' enctype='multipart/form-data'></form>");
    $("#fileupload").change(function(){
		$("#myupload").ajaxSubmit({
			dataType:  'json',
			beforeSend: function() {
        		showimg.empty();
				progress.show();
        		var percentVal = '0%';
        		bar.width(percentVal);
        		percent.html(percentVal);
				btn.html("uploading ...");
    		},
    		uploadProgress: function(event, position, total, percentComplete) {
        		var percentVal = percentComplete + '%';
        		bar.width(percentVal);
        		percent.html(percentVal);
    		},
			success: function(data) {
				files.html("<span class='delimg' rel='"+data.pic+"'>delete</span> ");
                //<b>"+data.name+"("+data.size+"k)</b> 
				var img = "/image/"+data.pic;
				showimg.html("<img src='"+img+"'>");
                $('.input-img').val(data.pic);
                btn.html('change pic');
			},
			error:function(xhr){
				btn.html("failed");
				bar.width('0')
				files.html(xhr.responseText);
			}
		});
	});
	
	$(".delimg").live('click',function(){
		var pic = $(this).attr("rel");
		$.post("processimage.php?act=delimg",{imagename:pic},function(msg){
			if(msg==1){
				files.html("deleted.");
				showimg.empty();
				progress.hide();
				btn.html("change pic");
			}else{
				alert(msg);
			}
		});
	});
});
</script>
