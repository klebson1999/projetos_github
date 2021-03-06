<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


//Load Composer's autoloader
require './vendor/autoload.php';


class Mensagem
{
    private $para = null;
    private $assunto = null;
    private $mensagem = null;
    public $status = array('codigo_status' => null, 'descricao_status' => '');

    public function __get($atributo)
    {
        return $this->$atributo;
    }

    public function __set($name, $value)
    {
        $this->$name = $value;
    }

    public function mensagemValida()
    {
        if (empty($this->para) || empty($this->assunto) || empty($this->mensagem)) {
            return false;
        }
        return true;
    }
}

$mensagem = new Mensagem();

$mensagem->__set('para', $_POST['para']);
$mensagem->__set('assunto', $_POST['assunto']);
$mensagem->__set('mensagem', $_POST['mensagem']);

if (!$mensagem->mensagemValida()) {
    echo 'Mensagem é válida';
    header('location: index.php');
}
//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = false;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = '';                     //SMTP username
    $mail->Password   = '';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('', '');
    $mail->addAddress($mensagem->__get('para'));     //Add a recipient          //Name is optional
    //$mail->addReplyTo('info@example.com', 'Information');
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    //Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $mensagem->__get('assunto');
    $mail->Body    = $mensagem->__get('mensagem');
    $mail->AltBody = 'Seu cliente de e-mail não suporta HTML.';

    //Erros
    $mail->setLanguage('pt');
    $mail->CharSet = 'UTF-8';
    $mail->Encoding = 'base64';
    
    $mail->send();

    $mensagem->status['codigo_status'] = 1;
    $mensagem->status['decricao_status'] = 'E-mail enviado com sucesso!';
} catch (Exception $e) {

    $mensagem->status['codigo_status'] = 2;
    $mensagem->status['decricao_status'] = 'Não foi possível enviar essa e-mail. Tente novamente mais tarde. ' . $mail->ErrorInfo;

}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Document</title>
</head>

<body>
    <div class="container">
        <div class="py-3 text-center">
            <img class="d-block mx-auto mb-2" src="logo.png" alt="" width="72" height="72">
            <h2>Send Mail</h2>
            <p class="lead">Seu app de envio de e-mails particular!</p>
        </div>
        <div class="row">
            <div class="col-md-12">
                <?php if($mensagem->status['codigo_status'] == 1) { ?>
                    <div class="container">
                        <h1 class="display-4 text-success">Sucesso</h1>
                        <p><?php echo $mensagem->status['decricao_status']; ?></p>
                        <a href="index.php" class="btn btn-success btn-lg mt-5 text-white">Voltar</a>
                    </div> 
                    <?php } ?>

                    <?php if($mensagem->status['codigo_status'] == 2) { ?>
                    <div class="container">
                        <h1 class="display-4 text-danger">Ops!</h1>
                        <p><?php echo $mensagem->status['decricao_status']; ?></p>
                        <a href="index.php" class="btn btn-danger btn-lg mt-5 text-white">Voltar</a>
                    </div> 
                    <?php } ?>

            </div>
        </div>
    </div>

</body>

</html>