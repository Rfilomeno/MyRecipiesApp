angular.module("ReceitasApp")
    .factory("DbFactory", ['$timeout', function ($timeout) {
        var response = {};


        response.loadDb = function () {
            response.pratos = [];
            response.doces = [];

            response.db = window.openDatabase(
                'receitas', // short name
                '1.0', // version
                'myRecepiesDb', // display name
                2 * 1024 * 1024 // size in bytes
            );
            response.db.transaction(function (tx) {
                // Insere pratos na tabela
                //                 Só descomenta se precisar apagar a tabela!
                //                tx.executeSql('DROP TABLE IF EXISTS pratos');
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

                // Insere doces na tabela
                // Só descomenta se precisar apagar a tabela!
                //                tx.executeSql('DROP TABLE IF EXISTS doces');
                tx.executeSql('CREATE TABLE IF NOT EXISTS doces (id unique, nome, ingredientes, preparo, img)');
                tx.executeSql('INSERT INTO doces (id, nome, ingredientes, preparo, img) SELECT 1, "Bolo de Limao", "3 ovos, farinha de trigo, fermento, manteiga, limoes", "Coloque tudo na batedeira depois leve ao forno",  "http://www.fundosanimais.com/Minis/leoes.jpg" WHERE NOT EXISTS (SELECT 1 FROM doces WHERE id = 1 AND nome = "Bolo de Limao")');
                tx.executeSql('INSERT INTO doces (id, nome, ingredientes, preparo, img) SELECT 2, "Doce de leite", "Lata de leite condensado", "Coloque a lata numa panela de pressao, cubra com agua, feche e deixe na pressao por 30 min",  "http://www.fundosanimais.com/Minis/lobo-branco.jpg" WHERE NOT EXISTS (SELECT 2 FROM doces WHERE id = 2 AND nome = "Doce de leite")');


                tx.executeSql('SELECT nome, ingredientes, preparo, img FROM doces', [], function (tx, results) {
                    var len = results.rows.length,
                        i;
                    for (i = 0; i < len; i++) {
                        response.doces.push(results.rows.item(i));

                    }
                });
            }, function (err) {
                console.log(err);
            });

        };
        //        window.populaDbPratos = function (tx, results) {
        //            response.db.transaction(function (tx) {
        //                tx.executeSql('SELECT nome, ingredientes, preparo, img FROM pratos', [], function (tx, results) {
        //                    var len = results.rows.length,
        //                        i;
        //                    for (i = 0; i < len; i++) {
        //                        response.pratos.push(results.rows.item(i));
        //                    }
        //                });
        //            });
        //        }

        window.createprato = function (prato) {

            response.db.transaction(function (tx) {
                tx.executeSql('INSERT INTO pratos (nome, ingredientes, preparo, img) VALUES (?, ?, ?, ?)', [prato[0].nome, prato[0].ingredientes, prato[0].preparo, prato[0].img],
                    function (tx, results) {

                    });
            }, function (err) {
                console.log(err);
            });
        };

        window.createdoces = function (prato) {

            response.db.transaction(function (tx) {
                tx.executeSql('INSERT INTO doces (nome, ingredientes, preparo, img) VALUES (?, ?, ?, ?)', [prato[0].nome, prato[0].ingredientes, prato[0].preparo, prato[0].img],
                    function (tx, results) {

                    });
            }, function (err) {
                console.log(err);
            });

        };

        return response;


    }]);
