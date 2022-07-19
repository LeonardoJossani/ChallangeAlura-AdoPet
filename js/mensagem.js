const nomeUsuario = document.querySelector('#nomeMensagem');
const telefoneUsuario = document.querySelector('#telefoneMensagem');
const nomePet = document.querySelector('#nomePet');
const mensagemPet = document.querySelector('#mensagemPet');
const formMensagem = document.querySelector('#formMensagem');


window.onload = () => {
    nomeUsuario.value = localStorage.getItem('nome');
    telefoneUsuario.value = localStorage.getItem('telefone');
}

const enviarMensagem = (event) => {
    event.preventDefault();
    localStorage.setItem('pet', nomePet.value);
    localStorage.setItem('mensagem', mensagemPet.value);

    alert("Mensagem enviada!");
    window.location = "home.html";
}

formMensagem.addEventListener('submit', enviarMensagem);
