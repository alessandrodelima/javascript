/*
Tudo é Objeto
Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.
*/
var nome = 'André';

nome.length; // 5
nome.charAt(1); // 'n'
nome.replace('ré', 'rei'); // 'Andrei'
nome; // 'André'
nome.toLowerCase();

console.log(nome.length);
console.log(nome.charAt(1));
console.log(nome.replace('ré', 'rei'));
console.log(nome.toLowerCase());




/*
    Uma string herda propriedades e métodos do construtor String()

Números

var altura = 1.8;

altura.toString(); // '1.8'
altura.toFixed(); // '2'

Copiar

    Por um breve momento o número é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e métodos

Funções

function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado.toString();
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"

areaQuadrado.length; // 1

Copiar
Elementos do DOM

<a class="btn">Clique</a>

Copiar

var btn = document.querySelector('.btn');

btn.classList.add('azul') // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function() {
  console.log('Clicou')
})

Copiar

    Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM.

Objetos revolucionaram a programação

Web API's são métodos e propriedades que permitem a interação JavaScript e Browser.
Exercício

// nomeie 3 propriedades ou métodos de strings

// nomeie 5 propriedades ou métodos de elementos do DOM

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
*/