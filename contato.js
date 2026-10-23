
"use strict";

function contatoPage() {
    const root = document.getElementById("root");

    root.className = "contato";

    const titulo = document.createElement("h2");
    titulo.classList.add("titulo");
    titulo.textContent = "Entre em contato";

    const texto = document.createElement("p");
    texto.textContent =
        "Preencha o formulário abaixo para entrar em contato com nossa equipe.";

    const formulario = document.createElement("form");
    formulario.id = "formulario-contato";

    const labelNome = document.createElement("label");
    labelNome.htmlFor = "nome";
    labelNome.textContent = "Nome completo:";

    const inputNome = document.createElement("input");
    inputNome.type = "text";
    inputNome.id = "nome";
    inputNome.name = "nome";
    inputNome.placeholder = "Digite seu nome completo";
    inputNome.required = true;

    const labelEmail = document.createElement("label");
    labelEmail.htmlFor = "email";
    labelEmail.textContent = "E-mail:";

    const inputEmail = document.createElement("input");
    inputEmail.type = "email";
    inputEmail.id = "email";
    inputEmail.name = "email";
    inputEmail.placeholder = "Digite seu e-mail";
    inputEmail.required = true;

    const labelAssunto = document.createElement("label");
    labelAssunto.htmlFor = "assunto";
    labelAssunto.textContent = "Assunto:";

    const inputAssunto = document.createElement("input");
    inputAssunto.type = "text";
    inputAssunto.id = "assunto";
    inputAssunto.name = "assunto";
    inputAssunto.placeholder = "Qual é o assunto?";
    inputAssunto.required = true;

    const labelMensagem = document.createElement("label");
    labelMensagem.htmlFor = "mensagem";
    labelMensagem.textContent = "Mensagem:";

    const textareaMensagem = document.createElement("textarea");
    textareaMensagem.id = "mensagem";
    textareaMensagem.name = "mensagem";
    textareaMensagem.placeholder = "Escreva sua mensagem";
    textareaMensagem.rows = 5;
    textareaMensagem.required = true;

    const botao = document.createElement("button");
    botao.type = "submit";
    botao.textContent = "Enviar mensagem";

    const resultado = document.createElement("p");
    resultado.id = "resultado";
    resultado.setAttribute("aria-live", "polite");

    formulario.append(
        labelNome,
        inputNome,
        labelEmail,
        inputEmail,
        labelAssunto,
        inputAssunto,
        labelMensagem,
        textareaMensagem,
        botao,
        resultado
    );

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        resultado.textContent =
            "Mensagem enviada com sucesso! Obrigado por entrar em contato.";

        formulario.reset();
    });

    root.replaceChildren(titulo, texto, formulario);
}

contatoPage();
