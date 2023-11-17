<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="static/css/header.css">
    <link rel="stylesheet" href="static/css/form.css">
    <title>Form</title>
</head>
<body>
<header>
        <div class="lang">
            <span id="lang_ru">RU</span>
            <span>|</span>
            <span id="lang_en" class="lang_select">ENG</span>
        </div>

        <p><a href="/" class="header__link">
            <span class="header__Orange">Orange</span>
            <span class="header__management">model management</span>
        </a></p>

        <div class="burger_menu">
            <span></span>
        </div>

        <div class="menu">
            <div class="brightness"></div>
            <nav>
                <a class="menu__item lang-women" href="/women.html">women</a>
                <a class="menu__item lang-men" href="/men.html">men</a>
                <a class="menu__item lang-newfaces" href="/newfaces.html">new faces</a>
                <a class="menu__item lang-about" href="/about.html">about us</a>
                <a class="menu__item lang-form" href="/form.html">become a model</a>
            </nav>
        </div>
    </header>



<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';


// Здесь указать адрес получателя
$to = 'orange@gmail.com';



# проверка, что ошибки нет
if (!error_get_last()) {

    // Переменные, которые отправляет пользователь
    $name = $_POST['name'];
    $age = $_POST['age'];
    $city = $_POST['city'];
    $height = $_POST['height'];
    $whatsup = $_POST['whatsup'];
    $email = $_POST['email'];
    // $facebook = $_POST['facebook'];
    $insta = $_POST['insta'];
    // $vk = $_POST['vk'];
    $textarea = $_POST['textarea'];

    // $name = htmlspecialchars($name);
    // $age = htmlspecialchars($age);
    // $town = htmlspecialchars($town);
    // $phone_number = htmlspecialchars($phone_number);
    // $email = htmlspecialchars($email);
    // $facebook = htmlspecialchars($facebook);
    // $insta = htmlspecialchars($insta);
    // $vk = htmlspecialchars($vk);
    // $textarea = htmlspecialchars($textarea);
    
    
    // Формирование самого письма
    $title = "Анкета с сайта";
    $body = "<h2>Привет! Новая анкета</h2>
    <b>Имя: </b>$name<br>
    <b>Возраст: </b>$age<br>
    <b>Рост: </b>$height<br>
    <b>Email: </b>$email<br>
    <b>WhatsUP: </b>$whatsup<br>
    <b>Instagram: </b>$insta<br>
    <p>    $textarea</p>
    ";
    
    // Настройки PHPMailer
    $mail = new PHPMailer\PHPMailer\PHPMailer();
    
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['data']['debug'][] = $str;};
    
    // Настройки вашей почты
    $mail->Host       = 'smtp.timeweb.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'test22@cz77866.tw1.ru'; // Логин на почте
    $mail->Password   = 'NuzQPWq3'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('test22@cz77866.tw1.ru', 'From site'); // Адрес самой почты и имя отправителя
    
    // Получатель письма
    $mail->addAddress($to);  
    // Ещё один, если нужен
    //$mail->addAddress('poluchatel2@gmail.com'); 
    
    // Прикрипление файлов к письму
    if (!empty($file['name'][0])) {
        for ($i = 0; $i < count($file['tmp_name']); $i++) {
            if ($file['error'][$i] === 0) 
                $mail->addAttachment($file['tmp_name'][$i], $file['name'][$i]);
        }
    }
    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    
    
    // Проверяем отправленность сообщения
    if ($mail->send()) {
        $data['result'] = "success";
        $data['info'] = "Сообщение успешно отправлено!";

        echo '<p class="result_send lang-result-true">Форма отправлена, спасибо тебе!</p>';
    } else {
        $data['result'] = "error";
        $data['info'] = "Сообщение не было отправлено. Ошибка при отправке письма";
        $data['desc'] = "Причина ошибки: {$mail->ErrorInfo}";

        echo '<p class="result_send lang-result-false">Произошла ошибка при отправке сообщения. <br> Попробуй связаться с нами другим способом!</p>';
    }
    
} else {
    $data['result'] = "error";
    $data['info'] = "В коде присутствует ошибка";
    $data['desc'] = error_get_last();
}

// Отправка результата
header('Content-Type: application/json');
// echo json_encode($data);

?>






<script src="static/js/burger.js"></script>
<script src="static/js/lang.js"></script>
<script src="static/js/translate.js"></script>  

    
</body>
</html>