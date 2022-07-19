const email = document.querySelector('#emailLogin');
const senha = document.querySelector('#senhaLogin');
const form = document.querySelector('.cadastro');

const usuarioEmail = localStorage.getItem('email');
const usuarioSenha = localStorage.getItem('senha');


form.addEventListener("submit", function(validarLogin) {
    if (email.value == usuarioEmail && senha.value == usuarioSenha) {
        validarLogin.preventDefault();
        alert("Login realizado!");
        window.location = 'home.html';
    }
    else if (email.value != usuarioEmail && senha.value != usuarioSenha) {
        validarLogin.preventDefault();
        alert("Email e senha incorretos!");
        email.classList.add("errado");
        senha.classList.add("errado");
    }

    else if (email.value != usuarioEmail && senha.value == usuarioSenha) {
        validarLogin.preventDefault();
        alert("Email incorreto!");
        email.classList.add("errado");
        senha.classList.remove("errado");
    }

    else if (email.value == usuarioEmail && senha.value != usuarioSenha) {
        validarLogin.preventDefault();
        alert("Senha incorreta!");
        email.classList.remove("errado");
        senha.classList.add("errado");
    }
});