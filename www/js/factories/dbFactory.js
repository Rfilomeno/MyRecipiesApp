angular.module("ReceitasApp")
    .factory("DbFactory", ['$timeout', function ($timeout) {
        var response = {};


            response.loadDb = function () {
            response.pratos = [];
            response.bebidas = [];
            response.doces = [];

            response.db = window.openDatabase(
                'receitas', // short name
                '1.0', // version
                'myRecepiesDb', // display name
                2 * 1024 * 1024 // size in bytes
            );
            response.db.transaction(function (tx) {
                // Insere pratos na tabela
                // Só descomenta se precisar apagar a tabela!
                //                                                 tx.executeSql('DROP TABLE IF EXISTS pizzas');
                tx.executeSql('CREATE TABLE IF NOT EXISTS pratos (id unique, nome, ingredientes, preparo, img)');
                tx.executeSql('INSERT INTO pratos (id, nome, ingredientes, preparo, img) SELECT 1, "Calabresa", "Mussarela, cebola, molho e orégano", "Coloque o molho sobre a massa, adicione o queijo e espalhe os outros ingredientes por cima do queijo. Leve ao forno por 10 minutos.",  "http://www.fundosanimais.com/Minis/leoes.jpg" WHERE NOT EXISTS (SELECT 1 FROM pratos WHERE id = 1 AND nome = "Calabresa")');
                tx.executeSql('INSERT INTO pratos (id, nome, ingredientes, preparo, img) SELECT 2, "Pizza Mussarela", "Mussarela e molho.", "Coloque o molho sobre a massa, adicione o queijo e leve ao forno por 10 minutos.",  "http://www.fundosanimais.com/Minis/lobo-branco.jpg" WHERE NOT EXISTS (SELECT 2 FROM pratos WHERE id = 2 AND nome = "Pizza Mussarela")');
                tx.executeSql('INSERT INTO pratos (id, nome, ingredientes, preparo, img) SELECT 3, "Arroz a Portuense", "Arroz, alho, carne, molho de tomate, extrato de tomate, cerveja, amaciante de carne, calabresa, cebola, parmesão ralado, requeijão e salsinha", "Refogue o alho e prepare o arroz, coloque a carne na panela de pressão junto com a cerveja, o molho e extrato de tomate e amaciante de carne e deixei cozinhar por 30min, refogue a cebola e frite a calabresa, depois é so juntar tudo e bom apetit.",  "http://www.fundosanimais.com/Minis/pantera-negra.jpg" WHERE NOT EXISTS (SELECT 3 FROM pratos WHERE id = 3 AND nome = "Arroz a Portuense")');


                tx.executeSql('SELECT nome, ingredientes, preparo, img FROM pratos', [], function (tx, results) {
                    var len = results.rows.length,
                        i;
                    for (i = 0; i < len; i++) {
                        response.pratos.push(results.rows.item(i));

                    }
                });

//                // Insere bebidas na tabela
//                // Só descomenta se precisar apagar a tabela!
//                //                 tx.executeSql('DROP TABLE IF EXISTS bebidas');
//                tx.executeSql('CREATE TABLE IF NOT EXISTS bebidas (id unique, nome, descricao, img, preco)');
//                tx.executeSql('INSERT INTO bebidas (id, nome, descricao, img, preco) SELECT 1, "Coca-cola", "Refrigerante 2 litros", "img/bebidas/coca-cola.png", 5.90 WHERE NOT EXISTS (SELECT 1 FROM bebidas WHERE id = 1 AND nome = "Coca-cola")');
//                tx.executeSql('INSERT INTO bebidas (id, nome, descricao, img, preco) SELECT 2, "Coca-Zero", "Refrigerante 2 litros", "img/bebidas/coca-zero.png", 5.90 WHERE NOT EXISTS (SELECT 1 FROM bebidas WHERE id = 2 AND nome = "Coca-Zero")');
//                tx.executeSql('INSERT INTO bebidas (id, nome, descricao, img, preco) SELECT 3, "Guaraná", "Refrigerante 2 litros", "img/bebidas/guarana.png", 5.90 WHERE NOT EXISTS (SELECT 1 FROM bebidas WHERE id = 3 AND nome = "Guaraná")');
//                tx.executeSql('INSERT INTO bebidas (id, nome, descricao, img, preco) SELECT 4, "Guaraná Zero", "Refrigerante 2 litros", "img/bebidas/guarana-zero.png", 5.90 WHERE NOT EXISTS (SELECT 1 FROM bebidas WHERE id = 4 AND nome = "Guaraná Zero")');
//                tx.executeSql('INSERT INTO bebidas (id, nome, descricao, img, preco) SELECT 5, "Sprite", "Refrigerante 2 litros", "img/bebidas/sprite.png", 5.90 WHERE NOT EXISTS (SELECT 1 FROM bebidas WHERE id = 5 AND nome = "Sprite")');
//                tx.executeSql('SELECT nome, descricao, img, preco FROM bebidas', [], function (tx, results) {
//                    var len = results.rows.length,
//                        i;
//                    for (i = 0; i < len; i++) {
//                        response.bebidas.push(results.rows.item(i));
//                    }
//                });
//
//                // Insere sobremesas na tabela
//                // Só descomenta se precisar apagar a tabela!
//                //                 tx.executeSql('DROP TABLE IF EXISTS sobremesas');
//                tx.executeSql('CREATE TABLE IF NOT EXISTS sobremesas (id unique, nome, descricao, img, preco)');
//                tx.executeSql('INSERT INTO sobremesas (id, nome, descricao, img, preco) SELECT 1, "Dipp\'s de Canela", "A nossa deliciosa massa coberta de açúcar e canela, acompanhada de doce de leite.", "img/sobremesas/dipps.png", 8.99 WHERE NOT EXISTS (SELECT 1 FROM sobremesas WHERE id = 1 AND nome = "Dipp\'s de Canela")');
//                tx.executeSql('INSERT INTO sobremesas (id, nome, descricao, img, preco) SELECT 2, "Chocobread", "Massa finíssima recheada de muito chocolate e cobertura de creme de baunilha com granulado.", "img/sobremesas/chocobread.png", 7.95 WHERE NOT EXISTS (SELECT 1 FROM sobremesas WHERE id = 2 AND nome = "Chocobread")');
//                tx.executeSql('SELECT nome, descricao, img, preco FROM sobremesas', [], function (tx, results) {
//                    var len = results.rows.length,
//                        i;
//                    for (i = 0; i < len; i++) {
//                        response.sobremesas.push(results.rows.item(i));
//                    }
//                });
//
//                // Insere usuários na tabela
//                // Só descomenta se precisar apagar a tabela!
////                                                tx.executeSql('DROP TABLE IF EXISTS usuarios');
//                tx.executeSql('CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, nome, email unique, tel1, tel2, rua, compl, bairro, cep, senha, isLoged BIT, fbId)');
//                tx.executeSql('INSERT INTO usuarios (nome, email, tel1, tel2, rua, compl, bairro, cep, senha, isLoged) SELECT "admin", "admin@pizzaria.com.br", "2524-4225", "98753-6007", "Av. Rio Branco", "156 sl.3018", "centro", "20040-901", "P@ssw0rd", 0 WHERE NOT EXISTS (SELECT 1 FROM usuarios WHERE email = "admin@pizzaria.com.br")');
//                tx.executeSql('SELECT nome, email, tel1, tel2, rua, compl, bairro, cep, senha, isLoged FROM usuarios', [], function (tx, results) {
//                    var len = results.rows.length,
//                        i;
//                    for (i = 0; i < len; i++) {
//                        console.log('at  users');
//                        console.log(results.rows.item(i));
//                        response.usuarios.push(results.rows.item(i));
//                    }
//                });

            }, function (err) {
                console.log(err);
            });

        };
//        window.populaDb = function (tx, results) {
//            response.db.transaction(function (tx) {
//                tx.executeSql('SELECT nome, email, tel1, tel2, rua, compl, bairro, cep, senha, isLoged FROM usuarios', [], function (tx, results) {
//                    var len = results.rows.length,
//                        i;
//                    for (i = 0; i < len; i++) {
//                        console.log('at  users');
//                        console.log(results.rows.item(i));
//                        response.usuarios.push(results.rows.item(i));
//                    }
//                });
//            });
//        }

//        window.createuser = function (user) {
//
//            response.db.transaction(function (tx) {
//                tx.executeSql('INSERT INTO usuarios (nome, email, tel1, tel2, rua, compl, bairro, cep, senha, isLoged, fbId) SELECT ?, ?, ?, ?, ?, ?, ?, ?, ?, 0, ? WHERE NOT EXISTS (SELECT 1 FROM usuarios WHERE email = ?)', [user.nome, user.email, user.tel1, user.tel2, user.rua, user.compl, user.bairro, user.cep, user.password, user.fbId, user.email],
//                    function (tx, results) {
//
//                    });
//            }, function (err) {
//                console.log(err);
//            });
//        };

        return response;


    }]);
