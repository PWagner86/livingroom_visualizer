<?php

require('./04_includes/header_nav.php');


?>


<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Livingroom Visualizer</title>
    <?php require_once('./04_includes/font_links.php');?>
    <link rel="stylesheet" href="./02_styling/02_startseite/start-style.css">
    <script src="./03_code//01_startseite/code.js" defer></script>
</head>
<body>

    <!-- header mit Titel ------------------------------------------------------------------------------------------------------------>
    <header>
        <div class="fade">

            <!-- navigation ---------------------------------------------------------------------------------------------------------->      
            <?php echo createNav('./05_unterseiten/login.php', './05_unterseiten/registrieren.php', '#', '#');?>

            <!-- Titel-Container ----------------------------------------------------------------------------------------------------->
            <div class="titel-wrapper">
                <h1>Livingroom Viszalizer</h1>
            </div>
        </div>
    </header>

    <!-- main ------------------------------------------------------------------------------------------------------------------------>
    <main>

        <!-- Logo-Container ---------------------------------------------------------------------------------------------------------->
        <div class="logo-wrapper">
            <img src="./01_pics_&_logo/logo_new.png" alt="Logo der Seite">
        </div>

        <!-- Text-Container ---------------------------------------------------------------------------------------------------------->
        <div class="intro-text-wrapper">
            <h5>
                Wir sind Livingroom Visualizer. Mit unserer App können Sie Ihr Wohnzimmer in einer 3D Umgebung 
                gestallten und einrichten. Der Fantasie sind keine Grenzen gesetzt. Ihre Vision wird auf Ihrem Profil 
                gespeichert und Sie können genau bestimmen, wie Sie Ihr künftiges Wohnzimmer einrichten wollen. Melden Sie sich noch heute an.
            </h5>
        </div>
    </main>

    <!-- Impressionen ----------------------------------------------------------------------------------------------------------------->
    <section class="impressions-wrapper">

        <!-- Titel-Container von Impressionen ----------------------------------------------------------------------------------------->
        <div class="imp-titel-wrapper">
            <h2>Impressionen</h2>
        </div>

        <!-- Bilder-Gallerie-Container ----------------------------------------------------------------------------------------------->
        <div class="carousel-container">

            <div id="carousel-controlle-mobile">
                <div class="mobile-left left">
                    <i class="fas fa-caret-left"></i>
                </div>
                <div class="mobile-right right">
                    <i class="fas fa-caret-right"></i>
                </div>
            </div>

            <div class="carousel-left">
                <div class="left"><i class="fas fa-caret-left"></i></div>
            </div>

            <div class="carousel-wrapper">
                <img class="preview" src="./01_pics_&_logo/01_impressionen/imp1.jpg" alt="Bild von Wohnzimmereinrichtung">
            </div>

            <div class="carousel-right">
                <div class="right"><i class="fas fa-caret-right"></i></div>
            </div>

        </div>

    </section>


    <!-- footer ---------------------------------------------------------------------------------------------------------------------->
    <?php echo createFooter('#', '#');?>
</body>
</html>