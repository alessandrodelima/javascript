//Exercícios 
// Retorne no console todas as imagens do site
const img = document.querySelectorAll('img');
console.log('Exercício - retornando as imagens do site',img);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log("Exercício - retornando imagens que comecem com a palavra imagem", imagensAnimais );

// Selecione todos os links internos (onde o href começa com #)
const linksInterno = document.querySelectorAll('[href^="#"]');
//const linksInterno = document.querySelectorAll('[href^="#animais"]');
console.log("Exercício - selecionar os links internos onde começa com #", linksInterno);

// Selecione o primeiro h2 dentro de .animais-descricao
const h2Animais = document.querySelector('.animais-descricao h2');
console.log("Exercício ", h2Animais);

// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');
//console.log(paragrafos);
console.log("Exercício - último parágrafo", paragrafos[paragrafos.length - 1]); // ou 
console.log("Exercício - último parágrafo", paragrafos[--paragrafos.length]); 
