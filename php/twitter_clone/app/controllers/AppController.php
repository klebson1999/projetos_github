<?php 

    namespace app\controllers;

    // Recursos framework
    use mf\model\Container;
    use mf\controller\Action;

    class AppController extends Action { 

        public function validaAutentificacao() {
            session_start();

            if(!isset($_SESSION['id']) || $_SESSION['id'] == '' || !isset($_SESSION['nome']) || $_SESSION['nome'] == ''  ) {
                header('location: /?login=erro');
            } 
            
        }

        // Recuperação dos tweets
        public function timeline() {
            
            $this->validaAutentificacao();

            $tweet = Container::getModel('Tweet');
            $tweet->__set('id_usuario', $_SESSION['id']);
            $tweets = $tweet->getAll();
                
            $this->view->tweets = $tweets;

            $usuario = Container::getModel('Usuario');
            $usuario->__set('id', $_SESSION['id']);
            
            $this->view->info_usuario = $usuario->getInfoUsuario();
            $this->view->total_tweets = $usuario->getTotalTweets();
            $this->view->total_seguindo = $usuario->getTotalSeguindo();
            $this->view->total_seguidores = $usuario->getTotalSeguidores();
            
            $this->render('timeline');

        }

        // Novo tweet
        public function tweet() {

            $this->validaAutentificacao();
                
            $tweet = Container::getModel('Tweet');
            $tweet->__set('tweet', $_POST['tweet']);
            $tweet->__set('id_usuario', $_SESSION['id']);

            $tweet->salvar();
            header('location: /timeline');
            
        }

        // Procurando usuários
        public function quemSeguir() {
            
            $this->validaAutentificacao();

            $pesquisarPor = isset($_GET['pesquisarPor']) ? $_GET['pesquisarPor'] : '';
            $usuarios = array();

            if($pesquisarPor != '') {

                $usuario = Container::getModel('Usuario');
                $usuario->__set('nome', $_GET['pesquisarPor']);
                $usuario->__set('id', $_SESSION['id']);
                $usuarios = $usuario->getAll();                
            }
            
            $usuario = Container::getModel('Usuario');
            $usuario->__set('id', $_SESSION['id']);
            
            $this->view->info_usuario = $usuario->getInfoUsuario();
            $this->view->total_tweets = $usuario->getTotalTweets();
            $this->view->total_seguindo = $usuario->getTotalSeguindo();
            $this->view->total_seguidores = $usuario->getTotalSeguidores();
            
            $this->view->usuarios = $usuarios;
            $this->render('quemSeguir');

        }

        // Ação seguir ou deixar de seguir
        public function acao() {
            
            $this->validaAutentificacao();

            $acao = isset($_GET['acao']) ? $_GET['acao'] : '';
            $id_usuario = isset($_GET['id_usuario']) ? $_GET['id_usuario'] : '';

            $usuario = Container::getModel('Usuario');
            $usuario->__set('id', $_SESSION['id']);

            if($acao == 'seguir') {
                $usuario->seguirUsuario($id_usuario);
                


            } else if($acao == 'deixar_seguir') {
                $usuario->deixarSeguirUsuario($id_usuario);
            }

            header('location: /quem_seguir');
        }
    }
