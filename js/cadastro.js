const email = document.querySelector('#email');
const nome = document.querySelector('#nomeCompleto');
const senha = document.querySelector('#senha');
const confirmaSenha = document.querySelector('#confirmaSenha');
const botaoCadastro = document.querySelector('#botaoCadastro');
const form = document.querySelector('.cadastro');
const revelar = document.querySelector('.revelar');


const validarEmail = ({ target }) => {
    if (target.value.length > 2) {
        console.log(email.value);
        return true;
    }
}

const validarNome = ({ target }) => {
    if (target.value.length >= 6) { 
        console.log(nome.value);
        return true;
    }
}

const validarSenha = ({ target }) => { 
    if (target.value.lenght >= 7) { 
        console.log(senha.value);
        return true;
    }
}

const validarConfirmaSenha = () => {
    if (confirmaSenha.value == senha.value) {
        const enviarForm = (event) => {
            event.preventDefault();
            localStorage.setItem('email', email.value);
            localStorage.setItem('nome', nome.value);
            localStorage.setItem('senha', senha.value);
        
            alert("Cadastro concluído!");
            console.log(`Senha correta: ${senha.value}`);
            window.location = '../inicio.html';
        }

        form.addEventListener('submit', enviarForm);
    }
    else alert("As senhas devem ser iguais!");
}

//validarConfirmaSenha();
botaoCadastro.addEventListener('click', validarConfirmaSenha);

email.addEventListener('focusout', validarEmail);
nome.addEventListener('focusout', validarNome);
senha.addEventListener('focusout', validarSenha);


revelar.addEventListener('click', function() {
    if(senha.getAttribute('type') == 'password') {
        senha.setAttribute('type', 'text');
        revelar.textContent = "Esconder";
    } else {
        senha.setAttribute('type', 'password');
        revelar.textContent = "Revelar";
    }
});

