/*
O que é o DOM
Document Object Model (DOM)
É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.
*/
console.log(window);
const href = window.location.href; 

console.log('Location href: '+href);

/*
window é o objeto global do browser
possui diferentes métodos e propriedades
*/
window.innerHeight; // retorna a altura do browser
console.log(window.innerHeight);

//Ao inspecionar elemento com o Chrome, você está vendo a representação oficial do DOM.

//window.alert('Isso é um alerta');
//alert('Isso é um alerta'); // Funciona
document.body; // Retorna o body
const h1Selecionando = document.querySelector('h1'); // Seleciona o primeiro h1
console.log(h1Selecionando);
//window é o objeto global, por isso não precisamos chamar ele na frente dos seus métodos e propriedades.

h1Selecionando.classList;
const domAtributos = h1Selecionando.classList[0];
console.log(domAtributos);

const titulo = document.querySelector('h1');
titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

// titulo.addEventListener('click', callback);
// ativa a função callback ao click no titulo
h1Selecionando.addEventListener('click', function(){
    //console.log('Clicou em ', h1Selecionando);
    console.log('Clicou em ', h1Selecionando.innerText);

})

function calbackh1(){
    console.log('Clicou em ', h1Selecionando.innerText , 'funcão separada.');
}

h1Selecionando.addEventListener('click', calbackh1);