angular.module('ReceitasApp', ['ngRoute', 'minhasDiretivas'])
    .config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'home.html',

        });
        $routeProvider.when('/adicionar', {
            templateUrl: 'adicionar.html',

        });
    })
    .run(['DbFactory', function (DbFactory) {
        DbFactory.loadDb();
    }]);
