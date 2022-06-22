<?php 

    namespace app\controllers;

    // Recursos framework
    use mf\model\Container;
    use mf\controller\Action;

    class IndexController extends Action {

        public function index() {

            $this->view->login = isset($_GET['login']) ? $_GET['login'] : '';
            $this->render('index');

        }

        public function inscreverse() {

            $this->view->usuario = array(
                'nome' => '',
                'email' => '',
                'senha' => '',
            );

            $this->view->erroCadastro = false;
            $this->render('inscreverse'); 
            
        }

        public function registrar() {

        // Receber dados do formulário
        $usuario = Container::getModel('usuario');
        $usuario->__set('nome', $_POST['nome']);
        $usuario->__set('email', $_POST['email']);
        $usuario->__set('senha', md5($_POST['senha']));

        if($usuario->validarCadastro() && count($usuario->getUsuarioPorEmail()) == 0) {
            // Sucesso
            $usuario->salvar();
            $this->render('cadastro');
        } else {
            // Error
            $this->view->usuario = array(
                'nome' => $_POST['nome'],
                'email' => $_POST['email'],
                'senha' => $_POST['senha']
            );

            $this->view->erroCadastro = true;
            $this->render('inscreverse');
        } 
    }          

    }

?>