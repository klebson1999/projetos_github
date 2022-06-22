<?php 

    namespace app\controllers;

    // Recursos framework
    use mf\model\Container;
    use mf\controller\Action;

    class AuthController extends Action { 

        public function autenticar() {
            
            $usuario = Container::getModel('Usuario');

            $usuario->__set('email', $_POST['email']);
            $usuario->__set('senha', md5($_POST['senha']));

            $usuario->autenticar();

            if(!empty($usuario->__get('id')) && !empty($usuario->__get('nome'))) {
                
                session_start();

                $_SESSION['id'] = $usuario->__get('id');
                $_SESSION['nome'] = $usuario->__get('nome');

                header('location: /timeline');
                
            } else {
                header('location: /?login=erro');
            }
        }

        public function sair() {
        
            session_start();
            session_destroy();

            header('location: /');

        }
    }

?>