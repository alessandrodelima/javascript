//Exercício

// Retorne o url da página atual utilizando o objeto window
const mostrarHref = window.location.href;
console.log(mostrarHref);

// Seleciona o primeiro elemento da página que possua a classe ativo
const elementoAtivo = document.querySelector('.ativo');
console.log('Mostra o elemento ativo ',elementoAtivo);

// Retorne a linguagem do navegador
const linguagem = window.navigator.language; 
console.log(linguagem);

// Retorne a largura da janela 
const windowWidth = window.innerWidth;
console.log(windowWidth);
