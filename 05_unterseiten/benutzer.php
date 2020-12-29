<?php
session_start();
require_once('../04_includes/access.php');
require('../04_includes/header_nav.php');
require('../04_includes/mysql_connection.php');

$queryUser = "SELECT * FROM `user`";
$resultatUser = mysqli_query($conn, $queryUser);
$datenUser = array();

if($resultatUser != false){
    $datenUser = mysqli_fetch_all($resultatUser, MYSQLI_ASSOC);
}

// print_r($datenUser);


?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php require_once('../04_includes/meta_tag.php');?>
    <title>Benutzer</title>
    <?php require_once('../04_includes/font_links.php');?>
    <link rel="stylesheet" href="../02_styling/08_benutzer/benutzer_style.css">
</head>
<body>
    <!-- header ------------------------------------------------------------------>
    <?php echo createHeader('../index.php', '#', '../04_includes/logout.php', '#', './visualizer.php', '#', './über.php', './news.php');?>

    <main>

        <div class="title-container">
            <div class="info small"><p>ID</p></div>
            <div class="info"><p>Vorname</p></div>
            <div class="info"><p>Nachname</p></div>
            <div class="info"><p>Adresse</p></div>
            <div class="info small"><p>PLZ</p></div>
            <div class="info"><p>Ort</p></div>
            <div class="info"><p>E-Mail</p></div>
            <div class="info"><p>Registriert</p></div>
        </div>

        <?php

        if(count($datenUser) > 0){
            foreach($datenUser as $user){
        ?>
        <div class="user-container">
            <div class="user-info id-info"><p><?=$user['ID']?></p></div>
            <div class="user-info firstname-info"><p><?=$user['vorname']?></p></div>
            <div class="user-info lastname-info"><p><?=$user['nachname']?></p></div>
            <div class="user-info adresse-info"><p><?=$user['adresse']?></p></div>
            <div class="user-info plz-info"><p><?=$user['plz']?></p></div>
            <div class="user-info ort-info"><p><?=$user['ort']?></p></div>
            <div class="user-info email-info"><p><?=$user['email']?></p></div>
            <div class="user-info time-info"><p><?=$user['registriert']?></p></div>
        </div>  
        <?php    
            }
        }
        ?>
        

    
    </main>

    <!-- footer ------------------------------------------------------------------>
    <?php echo createFooter('#', '#')?>
</body>
</html>