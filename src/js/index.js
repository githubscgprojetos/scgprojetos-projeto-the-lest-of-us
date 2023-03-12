// passo 1 - Dar um jeito de pegar o elemento HTML dos botões
const botoesCarrosel = document.querySelectorAll('.botao');

// passo 2 - dar um jeito de identificar o clique do usuario no botão
const botao1 = document.getElementById('botao1')
botao1.addEventListener('click', () => {
    console.log('clicou no botao1')
})