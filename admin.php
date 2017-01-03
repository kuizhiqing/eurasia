<?php
$action= $_POST['action'];
if($action=='add'){
    $img= $_POST['img'];
    $title = $_POST['title'];
    $ordre= $_POST['ordre'];
    $price= $_POST['price'];
    $cat= $_POST['cat'];
    $labels= $_POST['labels'];
    $desc1= $_POST['desc1'];
    $desc2= $_POST['desc2'];
    require_once('DB.php');
    add2list($dbh,$title.'',$ordre.'',$price.'',$cat.'',$img.'',$labels.'',$desc1.'',$desc2.'');
}else if($action=='update'){
    require_once('DB.php');
    $id = $_POST['id'];
    $img= $_POST['img'];
    $visible= $_POST['visible'];
    $title = $_POST['title'];
    $ordre= $_POST['ordre'];
    $price= $_POST['price'];
    $cat= $_POST['cat'];
    $labels= $_POST['labels'];
    $desc1= $_POST['desc1'];
    $desc2= $_POST['desc2'];
    updatelist($dbh,$id,$title.'',$visible.'',$ordre.'',$price.'',$cat.'',$img.'',$labels.'',$desc1.'',$desc2.'');
}

$page= $_GET['page'];
require("header-admin.php");
if($page=='new'){
    require("newitem.php");
}else {
    require("list-admin.php");
}
require("footer.php");

