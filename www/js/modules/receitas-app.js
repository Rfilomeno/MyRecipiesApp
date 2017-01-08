angular.module('ReceitasApp', ['ngRoute', 'minhasDiretivas'])
    .config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'home.html',
            reloadOnSearch: false
        });
        $routeProvider.when('/adicionar', {
            templateUrl: 'adicionar.html',
            reloadOnSearch: false
        });
    })
    .run(['DbFactory', function (DbFactory) {
        DbFactory.loadDb();
    }]);
