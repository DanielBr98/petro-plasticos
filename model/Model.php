<?php
require '../mysql/Connect.php';

class Model extends Connect
{

    static function registerNewMessage($a, $b, $c, $d, $e)
    {
        try {

            $insert = self::conn()->prepare("INSERT INTO petroplasticos (name, email, message, subscription, dateTime) VALUES (:a, :b, :c, :d, :e)");
            $insert->bindParam(':a', $a);
            $insert->bindParam(':b', $b);
            $insert->bindParam(':c', $c);
            $insert->bindParam(':d', $d);
            $insert->bindParam(':e', $e);
            $insert->execute();
            return $insert;
        } catch (PDOException $e) {

            echo $e->getMessage();
        }
    }
}
