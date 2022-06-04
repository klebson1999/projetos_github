<?php 

    require 'tarefa_modelo.php';
    require 'tarefa_service.php';
    require 'conect_bd.php';


    $acao = isset($_GET['acao']) ? $_GET['acao'] : $acao;

    if(isset($_GET['acao']) && $_GET['acao'] == 'inserir') {
    $tarefa = new Tarefa();
    $tarefa->__set('tarefa', $_POST['tarefa']);

    $conexao = new ConexaoBD();

    $tarefaService = new TarefaService($conexao, $tarefa);
    $tarefaService->inserir();

    header('location:nova_tarefa.php?inclusao=1');
    } else if($acao == 'recuperar') {

        $tarefa = new Tarefa();
        $conexao = new ConexaoBD();

        $tarefaService = new TarefaService($conexao, $tarefa);
        $tarefas = $tarefaService->recuperar();

    } else if($acao == 'atualizar') {
        
        $tarefa = new Tarefa();
        $tarefa
            ->__set('id', $_POST['id'])
            ->__set('tarefa', $_POST['tarefa']);

        $conexao = new ConexaoBD();
        $tarefaService = new TarefaService($conexao, $tarefa);
        $tarefaService->atualizar();
        if($tarefaService->atualizar()) {

            if(isset($_GET['pag']) && $_GET['pag'] == 'index') {
            header('location: index.php');
        } else {
            header('location: todas_tarefas.php');
        }

        }

    } else if($acao == 'remover') {
        $tarefa = new Tarefa();
        $tarefa->__set('id', $_GET['id']);

        $conexao = new ConexaoBD();
        $tarefaService = new TarefaService($conexao, $tarefa);
        $tarefaService->remover();

         if(isset($_GET['pag']) && $_GET['pag'] == 'index') {
            header('location: index.php');
        } else {
            header('location: todas_tarefas.php');
        }
        
    } else if($acao == 'marcarRealizada') {
        $tarefa = new Tarefa();
        $tarefa
            ->__set('id', $_GET['id'])
            ->__set('id_status', 2);

        $conexao = new ConexaoBD();
        $tarefaService = new TarefaService($conexao, $tarefa);
        $tarefaService->marcarRealizada();

        if(isset($_GET['pag']) && $_GET['pag'] == 'index') {
            header('location: index.php');
        } else {
            header('location: todas_tarefas.php');
        }       

    } else if($acao == 'recuperarTarefasPendentes') {
        $tarefa = new Tarefa();
        $tarefa->__set('id_status', 1);

        $conexao = new ConexaoBD();
        $tarefaService = new TarefaService($conexao, $tarefa);
        $tarefas = $tarefaService->recuperarTarefasPendentes();
    }
?>