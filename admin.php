<?php
$inadmin=true;
$action= $_POST['action'];
if($action=='login'){
    require_once('loginconfig.php');
    if($user==$_POST['user']&&$passwd==$_POST['passwd']){
        setcookie("login", "valide", time()+3600);
    }else{
        setcookie("login", "", time()-3600);
        header('Location: login.php'); 
        die();
    }
}else if($_COOKIE["login"]!="valide"){
    header('Location: login.php'); 
    die();
}else if($action=='add'){
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
if($action!='login' && $_COOKIE["login"]!="valide"){header('Location: login.php'); die();};
$page= $_GET['page'];
require("header-admin.php");
if($page=='new'){
    require("newitem.php");
}else {
    require("list-admin.php");
}
require("footer.php");

