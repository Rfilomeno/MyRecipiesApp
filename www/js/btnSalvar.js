function limpaForm() {
    $("#first_name2").val("");
    $("#textarea1").val('');
    $("#textarea2").val('');

}


$("#salvar").click(function () {
    var item = [{
        nome: $("#first_name2").val(),
        ingredientes: $("#textarea1").val(),
        preparo: $("#textarea2").val(),
        img: ""

    }];
    if ($("#tipoReceita").val() == "1") {
        createprato(item);
        populalista(item);
        Materialize.toast("Prato adicionado com sucesso!", 1000);
        limpaForm();
    } else if ($("#tipoReceita").val() == "2") {
        createdoces(item);
        populalistadoces(item);
        Materialize.toast("Doce adicionado com sucesso!", 1000);
        limpaForm();
    } else {
        Materialize.toast("Escolha o tipo de receita!", 2000, 'rounded');
    }


})
