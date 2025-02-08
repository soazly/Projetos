// Seleciona o botão e a mensagem escondida
const botaoSurpresa = document.getElementById('surpresaBtn');
const mensagemEscondida = document.getElementById('mensagemEscondida');
const foguete = document.getElementById('foguete');

// Adiciona um evento de clique ao botão
botaoSurpresa.addEventListener('click', () => {
  // Mostra a mensagem escondida
  mensagemEscondida.classList.remove('hidden');
  foguete.classList.remove('hidden');

  // Toca um som de surpresa (opcional)
  const audio = new Audio('surprise.mp3'); // Adicione um arquivo de som na pasta do projeto
  audio.play();

  // Altera o texto do botão
  botaoSurpresa.textContent = 'HaHa ';
});