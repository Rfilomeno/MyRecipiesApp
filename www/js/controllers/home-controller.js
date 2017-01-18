angular.module('ReceitasApp').controller('HomeController', ['$scope', 'DbFactory', function ($scope, DbFactory) {


    $scope.pratosList = DbFactory.pratos;
    $scope.docesList = DbFactory.doces;
    window.populalista = function (item) {
        $scope.pratosList.push(item[0]);
    }
    window.populalistadoces = function (item) {
        $scope.docesList.push(item[0]);
    }
}]);
