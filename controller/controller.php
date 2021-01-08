<?php
extract($_POST);

if (isset($form)) {

    require '../model/Model.php';
    date_default_timezone_set('America/Sao_Paulo');

    switch ($type) {
        case 1:

            if ($subscription != 1) {
                $subscription = 0;
            }
            $dateTime = date('Y-m-d H:i:s');
            $insert = Model::registerNewMessage($name, $email, $message, $subscription, $dateTime);
            if ($insert == true) {
                $msg = "Nome: $name\nEmail: $email\nMensagem: $message";
                $msg = wordwrap($msg, 70);
                mail("email@email.com", "Fale Conosco", $msg);

                echo 1;
            }
            break;

        default:
            header('Location: ../index.php');
    }
} else {
    header('Location: ../index.php');
}
