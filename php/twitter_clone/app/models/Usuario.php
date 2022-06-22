<?php 

    namespace app\models;

    use mf\model\Model;

    class Usuario extends Model {

        private $id;
        private $nome;
        private $email;
        private $senha;

        public function __get($atributo) {
            return $this->$atributo;
        }

        public function __set($atributo, $valor) {
            $this->$atributo = $valor;
        }

        // Salvar novos usuários
        public function salvar() {
            
            $query = "insert into usuarios(nome, email, senha) values(:nome, :email, :senha)";
            
            $stmt = $this->db->prepare($query);
            $stmt->bindValue(':nome', $this->__get('nome'));
            $stmt->bindValue(':email', $this->__get('email'));
            $stmt->bindValue(':senha', $this->__get('senha'));
            $stmt->execute();

            return $this;
        }

        // Validar novos cadastros
        public function validarCadastro() { 
            $valido = true;

            if(strlen($this->__get('nome')) < 3) {
                $valido = false;
            }
            if(strlen($this->__get('email')) < 3) {
                $valido = false;
            }
            if(strlen($this->__get('senha')) < 3) {
                $valido = false;
            }

            return $valido;
        }
        
        // Verificando se uruário existe
        public function getUsuarioPorEmail() {
            
            $query = "select nome, email from usuarios where email = :email;";

            $stmt = $this->db->prepare($query);
            $stmt->bindValue(':email', $this->__get('email'));
            $stmt->execute();

            return $stmt->fetchAll(\PDO::FETCH_ASSOC);
        }

        // Autenticano usuario
        public function autenticar() {
            
            $query = "select id, nome, email from usuarios where email = :email and senha = :senha;";

            $stmt= $this->db->prepare($query);
            $stmt->bindValue(':email', $this->__get('email'));
            $stmt->bindValue(':senha', $this->__get('senha'));
            $stmt->execute();

            $usuario = $stmt->fetch(\PDO::FETCH_ASSOC);

            if(!empty($usuario['id']) && !empty($usuario['nome'])) {
                $this->__set('id', $usuario['id']);
                $this->__set('nome', $usuario['nome']);
            }
            
            return $this;
        }

        // Buscando usuários
        public function getAll() {

            $query = "
                select 
                    u.id, 
                    u.nome, 
                    u.email, 
                    (
                        select
                            count(*)
                        from
                            usuarios_seguidores as us
                        where
                            us.id_usuario = :id and us.id_seguidores = u.id 
                    ) as seguidores_sn 
                from 
                    usuarios as u
                where 
                    u.nome like :nome and u.id != :id;";
            $stmt= $this->db->prepare($query);
            $stmt->bindValue(':nome', '%'.$this->__get('nome').'%');
            $stmt->bindValue(':id', $this->__get('id'));
            $stmt->execute();

            return $stmt->fetchAll(\PDO::FETCH_ASSOC);

        }

        // Seguindo usuários
        public function seguirUsuario($id_usuario) {
            
            $query = "insert into usuarios_seguidores(id_usuario, id_seguidores) values(:id, :id_usuario);";

            $stmt= $this->db->prepare($query);
            $stmt->bindValue(':id', $this->__get('id'));
            $stmt->bindValue(':id_usuario', $id_usuario);
            $stmt->execute();

            return true;
        }

        // Deixando de seguir usuários
        public function deixarSeguirUsuario($id_usuario) {
            
            $query = "delete from usuarios_seguidores where id_usuario = :id and id_seguidores = :id_usuario ";
            
            $stmt= $this->db->prepare($query);
            $stmt->bindValue(':id', $this->__get('id'));
            $stmt->bindValue(':id_usuario', $id_usuario);
            $stmt->execute();

            return true;

        }

        // Informações do usuários
        public function getInfoUsuario() {

            $query = "select nome from usuarios where id = :id_usuario";
            
            $stmt= $this->db->prepare($query);
            $stmt->bindValue(':id_usuario', $this->__get('id'));
            $stmt->execute();

            return $stmt->fetch(\PDO::FETCH_ASSOC);
        }

        // Total de twwets
        public function getTotalTweets() {

            $query = "select count(*) as total_tweet from tweets where id_usuario = :id_usuario";
            
            $stmt= $this->db->prepare($query);
            $stmt->bindValue(':id_usuario', $this->__get('id'));
            $stmt->execute();

            return $stmt->fetch(\PDO::FETCH_ASSOC);
        }

        // Total de seguindo
        public function getTotalSeguindo() {

            $query = "select count(*) as total_seguindo from usuarios_seguidores where id_usuario = :id_usuario";
            
            $stmt= $this->db->prepare($query);
            $stmt->bindValue(':id_usuario', $this->__get('id'));
            $stmt->execute();

            return $stmt->fetch(\PDO::FETCH_ASSOC);
        }

        // Total de seguidores
        public function getTotalSeguidores() {

            $query = "select count(*) as total_seguidores from usuarios_seguidores where id_seguidores = :id_usuario;";
            
            $stmt= $this->db->prepare($query);
            $stmt->bindValue(':id_usuario', $this->__get('id'));
            $stmt->execute();

            return $stmt->fetch(\PDO::FETCH_ASSOC);
        }

    }


?>