<?php
    $name = $_GET['name'];
    $contact = $_GET['contact'];
    $message = $_GET['message'];
    $from = "noreply@ohzero.kz";
    $to = "ohzero@mail.ru";
    $subject = $name . " " . $contact;
    $headers = "From:" . $from;
    mail($to,$subject,$message, $headers);
    echo "Test email sent";
?>