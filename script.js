const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login__button');

const handleFocus = ({ target }) => {
  const span = target.previousElementSibling;

  span.classList.add('span-active');
}

const handleFocusOut = ({ target }) => {
  if (target.value === '') {
    const span = target.previousElementSibling;
    span.classList.remove('span-active');
  }
}

const handleChange = () => {
  const [username, password] = inputs;

  if (username.value && password.value.length >= 6) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', '');
  }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));

function mostrarImagem() {
  document.getElementById("check").style.display = "block";
}

window.onclick = function (event) {
  if (event.target != document.getElementById("password")) {
    document.getElementById("check").style.display = "none";
  }
}




const inputSenha = document.getElementById('password');
const btnMostrarSenha = document.getElementById('check');

btnMostrarSenha.addEventListener('click', function () {
  if (inputSenha.type === 'password') {
    inputSenha.type = 'text';
    btnMostrarSenha.textContent = 'Ocultar Senha';
  } else {
    inputSenha.type = 'password';
    btnMostrarSenha.textContent = 'Mostrar Senha';

  }
});


const imagem = document.getElementById('check');

imagem.addEventListener('click', function () {
  if (imagem.src.endsWith('unview-password.png')) {
    imagem.src = './images/view-password.png';
  } else {
    imagem.src = './images/unview-password.png';
  }
});


const modal = document.getElementById('modal');

function mostrarModalAberto() {
  modal.style.display = 'block';
}

function fecharModal() {
  modal.style.display = 'none';
}



const myButton = document.getElementById("active__button");

myButton.addEventListener("click", function() {
  alert("Não achou que iria entrar no jogo né? hahahahaha... Mas Relaxa campeão, suas informações não foram guardadas pois esse projeto não tem tratamento de dados (quem sabe em um futuro próximo não é mesmo?), e convenhamos né? você apenas apertou varios botões do seu teclado aleatoriamente também \u{1F600} ");
});