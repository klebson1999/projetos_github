<?php 

    class ConexaoBD {

        private $dbHost = 'localhost';
        private $dbName = 'php_com_pdo';
        private $dbUser = 'root';
        private $dbPass = 'root';

        public function connectStart() {
            try {

                $connect = new PDO(
                    "mysql:host=$this->dbHost;dbname=$this->dbName",
                    "$this->dbUser",
                    "$this->dbPass"
                );
            
                return $connect; 

            } catch (PDOException $e) {
                echo '<p> $e->getMessege()';

            }
        }

    }






?>