module = angular.module("Prova", []);

module.controller("DisciplinaController", ["$scope","$http", Disciplinantroller]);


function DisciplinaController($scope,$http) {
    
    $scope.incluir = funcaoIncluir;
    $scope.editar = funcaoSEditar;
    $scope.listar = funcaoListar;
    $scope.excluir = funcaoExcluir;
     $scope.iniciar = funcaoIniciar;
    
    $scope.disciplinas = [];
    $scope.disciplina = {};
    $scope.isNovo = true;
    
    function funcaoEditar(vitima) {
        $scope.disciplina = angular.copy(vitima);
        $scope.isNovo = false;
    }

    
    function funcaoExcluir(vitima) {
    }
    
    function funcaoSalvar() {
    }
    
    function funcaoCarregar() {
        $http.get("/disciplina").success(onSuccess).error(onError);
        
        function onSuccess(data, status) {
            $scope.disciplina = data;       
            console.log(data);
        }
        function onError(data, status) {
            alert("Deu erro: " + data);
        }
    }
    
    function funcaoIniciar() {
        funcaoCarregar();
        console.log(">>> Disciplinas carregadas....");
    }
        
}


