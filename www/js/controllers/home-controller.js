angular.module('ReceitasApp').controller('HomeController', ['$scope', 'DbFactory', function ($scope, DbFactory) {


    $scope.pratosList = DbFactory.pratos;
    $scope.docesList = DbFactory.doces;

}]);
