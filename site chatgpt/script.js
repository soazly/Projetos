// Função para alternar o tema
const themeToggleButton = document.getElementById('themeToggle');
const welcomeButton = document.getElementById('welcomeBtn');

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Função para mostrar a mensagem de boas-vindas
welcomeButton.addEventListener('click', () => {
    alert('Bem-vindo ao Meu Site! Esperamos que você aproveite sua visita.');
});
