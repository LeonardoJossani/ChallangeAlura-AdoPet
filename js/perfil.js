const nomeUsuario = document.querySelector('#usuario');
const telefoneUsuario = document.querySelector('#telefone');
const cidadeUsuario = document.querySelector('#cidade');
const sobreUsuario = document.querySelector('#mensagem');
const botaoSalvar = document.querySelector('#salvar');
const formUsuario = document.querySelector("#formUsuario");


window.onload = () => {
    nomeUsuario.value = localStorage.getItem('nome');
    telefoneUsuario.value = localStorage.getItem('telefone');
    cidadeUsuario.value = localStorage.getItem('cidade');
    sobreUsuario.value = localStorage.getItem('sobre');
}

const alterarUsuario = (event) => {
    event.preventDefault();
    localStorage.setItem('nome', nomeUsuario.value);
    localStorage.setItem('telefone', telefoneUsuario.value);
    localStorage.setItem('cidade', cidadeUsuario.value);
    localStorage.setItem('sobre', sobreUsuario.value);

    alert("Mudanças salvas!");
}

formUsuario.addEventListener('submit', alterarUsuario);

