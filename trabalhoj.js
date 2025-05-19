const botao = document.getElementById('botaomensagem');
const mensagem = document.getElementById('Obrigada por visitar este trabalho!');

botao.addEventListener('click', function() {
  mensagem.textContent = "Obrigada por visitar este trabalho!";
});
