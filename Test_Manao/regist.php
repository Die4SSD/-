<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel='stylesheet' href='main.css'>
    <title>Registration</title>
    <noscript>
   <meta http-equiv="refresh" content="0; url=regist.php" />
 </noscript>
</head>
<body>
    <form id="registForm" action="singup.php" method="POST">
        <label>Login</label>
        <input type="text" name="Login" placeholder="Enter Login" required>
        <?php
        if($_SESSION["messageLog"]){
            echo '<p class="msg"> ' .$_SESSION['messageLog'] . ' </p>';
        }
        unset($_SESSION['messageLog']);
        ?>
        <label>Password</label>
        <input type="password" name="Password" placeholder="Enter Password" required>
        <?php
        if($_SESSION["messagePas"]){
            echo '<p class="msg"> ' .$_SESSION['messagePas'] . ' </p>';
        }
        unset($_SESSION['messagePas']);
        ?>
        <label>Confirm password</label>
        <input type="password" class="cfpsw" name="Conf_Password" placeholder="Confirm Password" required>
        <?php
        if($_SESSION['message']){
            echo '<p class="msg"> ' .$_SESSION['message'] . ' </p>';
        }
         unset($_SESSION['message']);
         ?>
        <label>Email</label>
        <input type="email" name="Email" placeholder="Enter Email" required>
        <?php
        if($_SESSION['messageEmail']){
            echo '<p class="msg"> ' .$_SESSION['messageEmail'] . ' </p>';
        }
         unset($_SESSION['messageEmail']);
         ?>
        <label>Name</label>
        <input type="text" name="Name" maxlength="3" minlength="1" placeholder="Enter Name" required>
        <?php
        if($_SESSION['messageNam']){
            echo '<p class="msg"> ' .$_SESSION['messageNam'] . ' </p>';
        }
         unset($_SESSION['messageNam']);
         ?>
        <button type="submit">Enter</button>
    </form>
    <!-- <script src="https://code.jquery.com/jquery-1.11.2.min.js"></script>
    <script src="common.js"></script> -->
</body>
</html>