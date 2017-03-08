<?php
if(!$inadmin){
    header('Location: login.php'); 
    die();
}
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
#newitem-div{width: 95%; margin: 20px; border-style: solid; border-width: 1px; border-color: black; } 
#upload-image{vertical-align: top;height: 130px; display: inline-block; width: 230px; margin: 10px;}
.menu-price input{width:56px;}
</style>
<div id="newitem-div">
<div id="upload-image" class="">
     <p>file format : jpg </p>
     <p>max siez: 1m </p>
     <div class="btn">
         <span>ajouter</span>
         <input id="fileupload" type="file" name="mypic">
     </div>
     <div class="progress">
         <span class="bar"></span><span class="percent">0%</span >
     </div>
     <div class="files"></div>
</div>
        <div class="entry-content post-content">
            <div id="grid-wrap" class="clearfix menu-full isotope" style="position: relative; overflow: hidden; height: 1200.59px;">
            <form action="admin.php" method="post">
                <div class="grid-box isotope-item mains" style="position: absolute; left: 0px; top: 0px; transform: translate3d(0px, 0px, 0px);">
                    <article id="post-55" class="post-55 menu_item type-menu_item status-publish has-post-thumbnail hentry menu_item_category-mains">
                        <div class="imgthumb">
                        <div id="showimg"></div>
                        <!-- img width="300" height="300" src="" class="attachment-600x300 size-600x300 wp-post-image" alt=""-->
                        </div> 
                        <header class="entry-header">
                        <h2 class="entry-title">
                            <input type="text" name="title" value="" />
                        </h2>
                        </header><!-- .entry-header -->
                        <div class="entry-content post-content">
                        <p><input type="text" name="desc1" value="" /></p>
                        </div><!-- .entry-content -->
                        <footer class="entry-meta">
                            <span class="cat-links">
                            <span class="meta-eat">In</span> <strong><input type="text" name="labels" value="" /></strong>        
                            </span>
                        </footer><!-- #entry-meta -->
                        <div class="menu-price"><input type="text" name="price" value="" />€</div>
                        <input type="hidden" name="desc2" value="" />
                        <table>
                        <tr><td>ordre</td><td><select name="ordre" value="">
                          <option value="0" >0</option>
                          <option value="1" selected>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                        </select></td></tr>
                        <tr><td>catague</td><td><select name="cat" value="">
                          <option value="" selected>non</option>
                          <option value="index">index</option>
                          <option value="chinois">chinois</option>
                          <option value="sushi">sushi</option>
                          <option value="futomaki" >futomaki</option>
                          <option value="mali" >mali</option>
                          <option value="california">california mali</option>
                          <option value="temaki" >temaki</option>
                          <option value="sashimi" >sashimi</option>
                          <option value="desserts" >desserts</option>
                          <option value="boissons" >boissons</option>
                        </select></td></tr> 
                        <tr><td>description2</td><td><input type="text" name="desc2" /></td></tr>
                        <tr><td></td><td><input type="submit" value="add" /></td><tr>
                        </table>
                        <input id="input-img" type="hidden" name="img" />
                        <input id="input-img" type="hidden" name="action" value="add" />
                    </article>
                </div>
            </form>
            </div>
        </div>
</div>

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
                $('#input-img').val(data.pic);
                btn.html('ajouter');
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
				btn.html("ajouter");
			}else{
				alert(msg);
			}
		});
	});
});
</script>
