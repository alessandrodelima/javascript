//Arrays e Loops
//É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.

var videoGames = ['Switch', 'PS4', 'XBox'];

// Acesse um elemento da array utilizando [n]
videoGames[0] // Switch
videoGames[2] // Xbox

console.log(videoGames[0]);
console.log(videoGames[2]);
console.log(videoGames);


// Métodos e Propriedades de uma Array

var videoGames = ['Switch', 'PS4', 'XBox'];

videoGames.pop(); // Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona ao final da array
videoGames.length; // 3

var ultimoGame = videoGames.pop();

console.log(ultimoGame);
/*
    Existem diversos outros métodos, como map, reduce, forEach e mais que veremos mais à frente
    Existem diversos outros métodos, como map, reduce, forEach e mais que veremos mais à frente

    For Loop

Fazem algo repetidamente até que uma condição seja atingida.
*/

for (var numero = 0; numero < 10; numero++) {
  console.log("For - "+numero);
}

// O for loop possui 3 partes, início, condição e incremento

//While Loop

var i = 0;
while (i < 10) {
  console.log("While - "+ i);
  i++;
}
// Retorna de 0 a 9 no console
//O for loop é o mais comum

//Arrays e Loops

var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
  console.log("Video Games: "+videoGames[i]);
}

/*
Break
O loop irá parar caso encontro e palavra break
*/

var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if(videoGames[i] === 'PS4') {
    break;
  }
}




/*

Copiar

    



Copiar

    O for loop é o mais comum


Copiar
forEach

forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)

var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
videoGames.forEach(function(item) {
  console.log(item);
});
// O argumento item será atribuído dinamicamente

Copiar

    Podemos passar os seguintes parâmetros item, index e array

Não se confunda com a sintaxe

var numero = 0;
var maximo = 50;
for(;numero < maximo;) {
  console.log(numero);
  numero++;
}

Copiar

    Não aconselho escrever da forma acima, mas funciona normalmente.

Exercício

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
*/