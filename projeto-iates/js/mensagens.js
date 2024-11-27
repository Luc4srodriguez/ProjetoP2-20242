document.addEventListener("DOMContentLoaded", function () {
    var mensagens = obterMensagens();
    var tabelaMensagensBody = document.querySelector("#tabelaMensagens tbody");

    mensagens.forEach(function (mensagem) {
        var linha = document.createElement("tr");

        var tdNome = document.createElement("td");
        tdNome.textContent = mensagem.nome;
        linha.appendChild(tdNome);

        var tdEmail = document.createElement("td");
        tdEmail.textContent = mensagem.email;
        linha.appendChild(tdEmail);

        var tdMensagem = document.createElement("td");
        tdMensagem.textContent = mensagem.mensagem;
        linha.appendChild(tdMensagem);

        tabelaMensagensBody.appendChild(linha);
    });
});
