angular.module('ReceitasApp', ['ngRoute', 'minhasDiretivas'])

.config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'home.html',
            reloadOnSearch: false
        });
    })
