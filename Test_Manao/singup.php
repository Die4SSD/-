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
if(strpos($_POST['Login'], " ") !== false){
    $_SESSION['messageLog'] = "Login must contains 6 chars and no space";
    header('Location: regist.php');
}

if(strlen($_POST['Password']) < 6 ){
    $_SESSION['messagePas'] = "Password less to 6";
    header('Location: regist.php');
}
if(preg_match("/([0-9]+[a-z]+)|([a-z]+[0-9]+)/i", $_POST['Password']) != true){
    $_SESSION['messagePas'] = "Unacceptable chars";
    header('Location: regist.php');
}
if(strpos($_POST['Password'], " ") !== false){
    $_SESSION['messagePas'] = "Login contain space";
    header('Location: regist.php');
}
if(strlen($_POST['Email']) === 0){
    $_SESSION['messageEmail'] = "Enter Email";
    header('Location: regist.php');
}
if(filter_var($_POST['Email'], FILTER_VALIDATE_EMAIL) != true){
    $_SESSION['messageEmail'] = "Email not correct";
    header('Location: regist.php');
}
if(preg_match("/^[a-z A-Z]+$/u",$_POST['Name']) != true){
    $_SESSION['messageNam'] = "Name must contains only letters";
    header('Location: regist.php');
}
if(strlen($_POST['Name']) != 2){
    $_SESSION['messageNam'] = "Name must contains 2 letters";
    header('Location: regist.php');
}
if($_POST['Login'] === $data["Login"]){
    $_SESSION['messageLog'] = "Account already registred";
    header('Location: regist.php');
}
if($_POST['Email'] === $data["Email"]){
    $_SESSION['messageEmail'] = "Account already registred";
    header('Location: regist.php');
}
if(strpos($_POST['Name'], " ") !== false){
    $_SESSION['messageNam'] = "Name contain space";
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
// print_r($data);
