<?php

if (isset($_POST['submit']) {
    $name = $_POST['name'];
    $subject = "Web Portfolio Email";
    $from = $_POST['email'];
    $message = $_POST['message'];

    $to = "bryce@brycepalm.com";
    $headers = "From: ".$from;
    $txt = "You have received an e-mail from ".$name.".\n".$message;

    mail($to, $subject, $txt, $headers);
})

?>