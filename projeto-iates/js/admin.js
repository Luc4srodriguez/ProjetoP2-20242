document.addEventListener("DOMContentLoaded", function () {
    var formLogin = document.getElementById("formLogin");
    var emailInput = document.getElementById("email");
    var senhaInput = document.getElementById("senha");
    var resultado = document.getElementById("loginResultado");

    formLogin.addEventListener("submit", function (e) {
        e.preventDefault();

        var email = emailInput.value;
        var senha = senhaInput.value;

        if (email == "admin@admin.com" && senha == "1234") {
            window.location.href = "mensagens.html";
        } else {
            resultado.textContent = "E-mail ou Senha incorretos.";
        }
    });
});
