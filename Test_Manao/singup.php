<?php

session_start();
$file = file_get_contents('BD.json');
$data = json_decode($file, true);

class Registratin{

    function hash(){
        $salt = 10;
       return $_POST["Password"] =md5($salt . $_POST["Password"]);
    }

}

if($_POST['Password'] === $_POST['Conf_Password']){
}
else {
    $_SESSION['message'] = "Password not confirm";
    header('Location: regist.php');
}
if(strlen($_POST['Login']) < 6){
    $_SESSION['messageLog'] = "Login must contains 6 chars";
    header('Location: regist.php');
}
if(strlen($_POST['Password']) < 6 || preg_match("/[^(\w)|(\x7F-\xFF)|(\s)]/", $_POST['Password']) ){
    $_SESSION['messagePas'] = "Unacceptable chars or password less to 6";
    header('Location: regist.php');
}
if(strlen($_POST['Name']) != 2  && preg_match('/^[a-zA-Z]+$/', $_POST['Name'])){
    $_SESSION['messageNam'] = "Name must contains 2 chars";
    header('Location: regist.php');
}

$Class1 = new Registratin();
$Class1->hash();
$data["Login"] = $_POST['Login'];
$data["Password"] = $_POST['Password'];
$data["Email"] = $_POST['Email'];
$data["Name"] = $_POST['Name'];
$jsonData = json_encode($data);
file_put_contents('BD.json', $jsonData);
echo '<a href="index.php">Autorization</a>';
// print_r($data);
