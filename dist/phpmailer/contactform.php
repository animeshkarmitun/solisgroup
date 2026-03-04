<?php
$msg = '';
if (array_key_exists('email', $_POST)) {
    $to = 'business@solisgroup.ltd';
    $subject = 'Contact from solisgroup website';
    $name = strip_tags($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = strip_tags($_POST['message']);

    $headers = "From: Solis Group Website <website@solisgroup.ltd>\r\n";
    $headers .= "Reply-To: $name <$email>\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    $body = "Email: $email\nName: $name\nMessage:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        $msg = 'Message sent! Thanks for contacting us.';
    } else {
        $msg = 'Sorry, something went wrong. Please try again later.';
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Contact form</title>
</head>
<body>
<h1>Contact us</h1>
<?php if (!empty($msg)) {
    echo "<h2>$msg</h2>";
} ?>
<form method="POST">
    <label for="name">Name: <input type="text" name="name" id="name"></label><br>
    <label for="email">Email address: <input type="email" name="email" id="email"></label><br>
    <label for="message">Message: <textarea name="message" id="message" rows="8" cols="20"></textarea></label><br>
    <input type="submit" value="Send">
</form>
</body>
</html>