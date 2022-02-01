<?php
session_start();

$file = file_get_contents('BD.json');
$data = json_decode($file, true);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel='stylesheet' href='main.css'>
    <title>Registration</title>
</head>
<body>
    <form action="logcheck.php" method="POST">
        <label>Login</label>
        <input type="text" name="LoginName" placeholder="Input Login">
        <label>Password</label>
        <input type="password" name="LoginPassword" placeholder="Input Password">
        <?php
        if($_SESSION['message']){
            echo '<p class="msg"> ' .$_SESSION['message'] . ' </p>';
        }
         unset($_SESSION['message']);
         ?>
        <button type="submit">Enter</button>
        <a href = "regist.php">Reg</a>
    </form>


</body>
</html>