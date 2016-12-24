angular.module('ReceitasApp', ['ngRoute'])

.config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'home.html',
            reloadOnSearch: false
        });
    })
