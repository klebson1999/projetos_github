<?php 

    if(!empty($_POST['usuario']) && !empty($_POST['senha'])) {
    $dsn = 'mysql:host=localhost;dbname=php_com_pdo';
    $user = 'root';
    $pass = 'root';

    try {
        $conectionBD = new PDO($dsn, $user, $pass);

        $query = "select * from tb_usuarios where
            email  = :usuario AND senha = :senha";

        $stmt = $conectionBD->prepare($query);
        $stmt->bindValue(':usuario', $_POST['usuario']);
        $stmt->bindValue(':senha', $_POST['senha']);

        $stmt->execute();
        $usuario = $stmt->fetch();
        echo '<pre>';
        print_r($usuario);
        echo '</pre>';


    } catch(PDOException $e) {
        echo 'Erro: ' .$e->getCode(). ' Mensagem: ' .$e->getMessage();
    }
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <form method="POST" action="index.php">
        <input name="usuario" type="text" placeholder="usuario">
        <br>
        <br>
        <input name="senha" type="password" placeholder="senha">
        <br>
        <br>
        <button type="submit">Entrar</button>
    </form>
</body>
</html>