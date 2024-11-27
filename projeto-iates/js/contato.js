$(document).ready(function () {
    $("#formContato").submit(function (e) {
        e.preventDefault();

        var mensagem = {
            nome: $("#nome").val(),
            email: $("#email").val(),
            mensagem: $("#msg").val(),
        };

        try {
            inserirMensagem(mensagem);
            $("#resultado").text("Mensagem enviada com sucesso!").css("color", "green");
            $("#formContato")[0].reset();
        } catch (error) {
            $("#resultado").text("Erro ao enviar a mensagem. Tente novamente.").css("color", "red");
        }
    });
});
