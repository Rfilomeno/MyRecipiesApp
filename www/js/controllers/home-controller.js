angular.module('ReceitasApp').controller('HomeController', ['$scope', 'DbFactory', function ($scope, DbFactory) {

//    $scope.pratos = [
//        {
//            titulo: 'Pizza Calabresa',
//            ingredientes: 'Mussarela, calabresa, molho e cebola',
//            preparo: 'Coloque o molho sobre a massa, adicione o queijo e espalhe os outros ingredientes por cima do queijo. Leve ao forno por 10 minutos.',
//            img: 'http://www.fundosanimais.com/Minis/leoes.jpg'
//        },
//        {
//            titulo: 'Pizza Mussarela',
//            ingredientes: 'Mussarela e molho',
//            preparo: 'Coloque o molho sobre a massa, adicione o queijo e leve ao forno por 10 minutos.',
//            img: 'http://www.fundosanimais.com/Minis/lobo-branco.jpg'
//        },
//        {
//            titulo: 'Arroz à Portuense',
//            ingredientes: 'Arroz, alho, carne, molho de tomate, extrato de tomate, cerveja, amaciante de carne, calabresa, cebola, parmesão ralado, requeijão e salsinha' ,
//            preparo: 'Refogue o alho e prepare o arroz, coloque a carne na panela de pressão junto com a cerveja, o molho e extrato de tomate e amaciante de carne e deixei cozinhar por 30min, refogue a cebola e frite a calabresa, depois é so juntar tudo e bom apetit.',
//            img: 'http://www.fundosanimais.com/Minis/pantera-negra.jpg'
//        },
//
//    ];

    DbFactory.loadDb();
    $scope.pratosList = DbFactory.pratos;
    console.log($scope.pratosList);





}]);
