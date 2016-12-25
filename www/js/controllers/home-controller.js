angular.module('ReceitasApp').controller('HomeController', function ($scope) {

        $scope.prato = {
        titulo : 'Pizza Calabresa',
        ingredientes : 'Mussarela, calabresa, molho e cebola',
        preparo : 'Coloque o molho sobre a massa, adicione o queijo e espalhe os outros ingredientes por cima do queijo. Leve ao forno por 10 minutos.',
        img : 'http://www.fundosanimais.com/Minis/leoes.jpg'
    };
        $scope.prato2 = {
        titulo : 'Pizza Mussarela',
        ingredientes : 'Mussarela e molho',
        preparo : 'Coloque o molho sobre a massa, adicione o queijo e leve ao forno por 10 minutos.',
        img : 'http://www.fundosanimais.com/Minis/leoes.jpg'
    };

    });
