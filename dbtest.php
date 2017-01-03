<?php
require_once('DB.php');
add2list($dbh,'mytile',1,'12.1','chinois','bg.jpg','','this is a test desc1','this is another test desc2');
//foreach (getlist($dbh,'chinese') as $raw){
//    echo $raw['desc1'].'<br/>';
//}
//updatelist($dbh,1,'mytile',1,12.1,'chinese','bg.jpg','','this is a test desc1 updated','this is another test desc2');
foreach (getlist($dbh,'chinese') as $raw){
    echo $raw['desc1'].'<br/>';
}
//dellist($dbh,1);
