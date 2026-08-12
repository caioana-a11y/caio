// script.js

// Executa o código após o carregamento completo do HTML
document.addEventListener('DOMContentLoaded', () => {
  console.log('Script carregado com sucesso!');

  // Exemplo 1: Selecionar um elemento e escutar um clique de botão
  const meuBotao = document.querySelector('#meuBotao');
  
  if (meuBotao) {
    meuBotao.addEventListener('click', () => {
      alert('O botão foi clicado!');
    });
  }

  // Exemplo 2: Função simples de cálculo ou manipulação
  function saudarUsuario(nome) {
    return `Olá, ${nome}! Bem-vindo ao site.`;
  }

  // Exemplo de uso da função
  console.log(saudarUsuario('Dev'));
});
