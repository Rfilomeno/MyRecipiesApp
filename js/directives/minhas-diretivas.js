angular.module('minhasDiretivas', [])
    .directive('lista', function() {
    var ddo = {};
    ddo.restrict = "AE";
    ddo.transclude = true;

    ddo.scope = {
        titulo: '@'
    };
    ddo.templateUrl = "js/directives/templates/lista.html"
    return ddo;

    })
