<?php
$action = $_GET['act'];
if($action=='delimg'){
	$filename = $_POST['imagename'];
	if(!empty($filename)){
		unlink('image/'.$filename);
		echo '1';
	}else{
		echo 'delete failed.';
	}
}else{
	$picname = $_FILES['mypic']['name'];
	$picsize = $_FILES['mypic']['size'];
	if ($picname != "") {
		if ($picsize > 1024000) {
			echo 'too large';
			exit;
		}
		$type = strtolower(strstr($picname, '.'));
		if ($type != ".gif" && $type != ".jpg") {
			echo 'formate error';
			exit;
		}
		$rand = rand(100, 999);
		$pics = date("YmdHis") . $rand . $type;
		$pic_path = "image/". $pics;
		move_uploaded_file($_FILES['mypic']['tmp_name'], $pic_path);
	}
	$size = round($picsize/1024,2);
	$arr = array(
		'name'=>$picname,
		'pic'=>$pics,
		'size'=>$size
	);
	echo json_encode($arr);
}
?>
