<?php 

    namespace mf\model;
    use app\Connection;

    class Container {

        public static function getModel($model) {
            $class = "\\app\\models\\".$model;
            
            $conn = Connection::getDB();
            
            return new $class($conn);
        }
    }

?>