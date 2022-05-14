<?php
   
   session_start();

    // Tratamento do texto
    $titulo = str_replace('#', '-', $_POST['titulo']);
    $categoria = str_replace('#', '-', $_POST['categoria']);
    $descricao = str_replace('#', '-', $_POST['descricao']);
    // Organização do Texto
    $texto = $_SESSION['id'] . "#" . $titulo . "#" . $categoria . "#" . $descricao . PHP_EOL;
    // Abertura do arquivo
    $arquivo = fopen('bd-arquivo.txt', 'a'); 
    // Gravação do texto no arquivo
    fwrite($arquivo, $texto);
    // Fechando o arquivo de texto
    fclose($arquivo);
    // Redirecionando página após chamado
    header('location: abrir_chamado.php');

?>