<?php
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json');

if (isset($_POST['action'])) {

    $name = htmlspecialchars($_POST['username'], ENT_QUOTES, 'UTF-8');
    $from_email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars($_POST['phone'], ENT_QUOTES, 'UTF-8');
    $subject = "Contact from solisgroup website";
    $message = htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8');

    $email_body = "You have Received a message from: " . $name . " <br/>";
    $email_body .= "Subject: " . $subject . " <br/>";
    $email_body .= "Phone: " . $phone . " <br/>";
    $email_body .= "You can contact " . $name . " via email, " . $from_email . "<br/><br/>";
    $email_body .= "Message: <br/>" . $message . " <br/><br/>";

    $mail = new PHPMailer(true);

    try {
        // SMTP settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'rezaul.karim@cosmosgroup.com.bd';
        $mail->Password   = 'hqjd qdzq azpi doac';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // Recipients
        $mail->setFrom('rezaul.karim@cosmosgroup.com.bd', 'Solis Group Website');
        $mail->addAddress('business@solisgroup.ltd');
        $mail->addReplyTo($from_email, $name);

        // Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $email_body;

        $mail->send();

        echo json_encode(array(
            'success' => true,
            'message' => "Message Sent Successfully!"
        ));
    } catch (Exception $e) {
        echo json_encode(array(
            'success' => false,
            'message' => "Message could not be sent. Error: " . $mail->ErrorInfo
        ));
    }
    die;
}
?>