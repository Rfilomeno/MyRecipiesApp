angular.module('minhasDiretivas', [])
    .directive('lista', function () {
        var ddo = {};
        ddo.restrict = "AE";
        ddo.transclude = true;
        ddo.templateUrl = "js/directives/templates/listadepratos.html"
        return ddo;
    })
    .directive('listadedoces', function () {
        var ddo = {};
        ddo.restrict = "AE";
        ddo.transclude = true;
        ddo.templateUrl = "js/directives/templates/listadedoces.html"
        return ddo;
    })

