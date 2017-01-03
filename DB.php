<?php
require('dbconfig.php');
$dbh = null;
try {
    $dbh = new PDO('mysql:host='.$dbhost.';dbname='.$dbname, $dbuser, $dbpwd);
} catch (PDOException $e) {
    echo "database errer";
    die();
}

function testcon($dbh){
    $str = "select * from wp_users";
    $re = $dbh->query($str);
    foreach($re as $row){
        echo $row['user_login'];
    }
}
//testcon();

function creatTable($dbh){
    $stmt = "
            CREATE TABLE EURA_LIST(
            id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(100) NOT NULL,
            ordre INT(6) NOT NULL DEFAULT 0,
            visible  INT(1) NOT NULL DEFAULT 1,
            price FLOAT,
            cat VARCHAR(100) KEY,
            img VARCHAR(255),
            labels VARCHAR(255),
            desc1 VARCHAR(255),
            desc2 VARCHAR(255)
            )
            ";
    try { return $dbh->exec($stmt); } catch (PDOException $e) { echo "exec faild".$stmt; die(); }
}
function delTable($dbh){
    $stmt = "DROP TABLE EURA_LIST";
    try { return $dbh->exec($stmt); } catch (PDOException $e) { echo "exec faild".$stmt; die(); }
}

function add2list($dbh,$title,$ordre,$price,$cat,$img,$labels,$desc1,$desc2){
    $stmt = "INSERT INTO EURA_LIST (title,ordre,price,cat,img,labels,desc1,desc2) VALUES (\"$title\",\"$ordre\",\"$price\",\"$cat\",\"$img\",\"$labels\",\"$desc1\",\"$desc2\")";
    try { return $dbh->exec($stmt); } catch (PDOException $e) { echo "exec faild".$stmt; die(); }
}
function updatelist($dbh,$id,$title,$visible,$ordre,$price,$cat,$img,$labels,$desc1,$desc2){
    $stmt = "UPDATE EURA_LIST SET 
        title=\"$title\",
        visible=\"$visible\",
        ordre=\"$ordre\",
        price=\"$price\",
        cat=\"$cat\",
        img=\"$img\",
        labels=\"$labels\",
        desc1=\"$desc1\",
        desc2=\"$desc2\"
        WHERE id = $id
    ";
    try { return $dbh->exec($stmt); } catch (PDOException $e) { echo "exec faild".$stmt; die(); }
}
function dellist($dbh,$id){
    $stmt = "UPDATE EURA_LIST SET visible = 0 WHERE id = $id";
    try { return $dbh->exec($stmt); } catch (PDOException $e) { echo "exec faild".$stmt; die(); }
}
function getlist($dbh,$cat){
    if($cat=='unvisible'){return unvisiblelist($dbh);};
    $stmt = "SELECT * FROM EURA_LIST WHERE cat = \"$cat\" and visible = 1 ORDER BY ordre ASC";
    try { return $dbh->query($stmt); } catch (PDOException $e) { echo "query faild".$stmt; die(); }
}
function unvisiblelist($dbh){
    $stmt = "SELECT * FROM EURA_LIST WHERE visible = 0 ORDER BY ordre ASC";
    try { return $dbh->query($stmt); } catch (PDOException $e) { echo "query faild".$stmt; die(); }
}

