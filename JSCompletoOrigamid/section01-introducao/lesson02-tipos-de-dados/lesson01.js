var nome = 'André'; // String
var idade = 28; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object

//Primitivos são dados imutáveis.
//VERIFICAR TIPO DE DADO

var nome = 'André';
console.log(typeof nome);
// retorna string
var idade = 28;
console.log(typeof idade);

var simbolo = Symbol();
console.log(typeof simbolo);

var nome = 'Alessandro'; 
var sobrenone = 'Lima'; 
var nomeCompleto = nome + ' ' + sobrenone;

console.log(nomeCompleto);

var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';
console.log(typeof frase);
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String

var ano = '2018';
var mes = 8;
console.log(ano + mes); //concatenou 

//EXERCÍCIO

// Declare uma variável contendo uma string
var nome = "Alessandro";
console.log(typeof nome);

// Declare uma variável contendo um número dentro de uma string
var idade = 28; 
console.log(typeof idade);
// Declare uma variável com a sua idade
var idade = 28;

// Declare duas variáveis, uma com seu nome e outra com seu sobrenome e some as mesmas
var nome = 'Hermenegildo';
var sobrenome = 'Sauro';
var nomeCompleto = `${nome} ${sobrenome}`;
console.log(nomeCompleto);

// Coloque a seguinte frase em uma variável: It's time
var frase = "It\'s time";

console.log(frase);

// Verifique o tipo da variável que contém o seu nome
var verificarTipoNome = typeof nome;
console.log(typeof nome);