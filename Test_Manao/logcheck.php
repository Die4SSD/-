<?php
session_start();
$file = file_get_contents('BD.json');
$data = json_decode($file, true);

$login = $_POST['LoginName'];
$password = md5(10 . $_POST['LoginPassword']);
if($login === $data["Login"] && $password === $data["Password"]){
    echo "Hello ",$login;
    echo '<form action="index.php">
    <button>Exit</button>
   </form>';
}
else {
    $_SESSION['message'] = "Wrong Login or Password";
    header('Location: index.php');
}