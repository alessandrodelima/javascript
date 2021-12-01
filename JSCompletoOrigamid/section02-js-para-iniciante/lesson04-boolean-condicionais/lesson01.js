//Boolean e Codicionais

var possuiGraduacao = true;
var possuiDoutorado = true;

if(possuiGraduacao) {
    console.log('É verdadeiro.');
    var x = 10;
}else if(possuiDoutorado) {
    console.log('É falso.');
    console.log('Possui doutorado.');
}
console.log(x);

var nome = 'Alessandro';
var nome = '';
if(nome) {
    console.log(nome);
} else {
    console.log('Nome não existe.');
}

// RUTHY E FALSY
 //Existem valores que retornam true e outros que retornam false quando verificados em uma expressão booleana.

// Falsy
if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') // ou "" ou ``

//TRUTHY
if(true)
if(1)
if(' ')
if('andre')
if(-5)
if({});

if(!!possuiGraduacao) {
    console.log('Não possui graduação.');
}

//OPERADORES DE COMPARAÇÃO

10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10 // true
10 >= 11 // false

//OPERADORES DE COMPARAÇÃO

//O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===

10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true

var x = 10;
console.log(x === 10);

var y = 'Gato'; 
console.log('comparação: ', y !== 'Gato');

//OPERADORES LÓGICOS && && Compara se uma expressão e a outra é verdadeira

true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true

if((5 - 5) && (5 + 5)) {
    console.log('Verdadeiro');
}else {
    console.log('False');
}


var condicional = (5 - 10) && (5 + 5);

if(condicional) {
    console.log('Verdadeiro', condicional);
}else {
    console.log('False');
}


//OPERADORES LÓGICOS || 
//Compara se uma expressão ou outra é verdadeira

true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true

var condicional2 = (5 - 5) || (5 + 5) || (10 - 2);
console.log(condicional2);


var corFavorita = 'Azul';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Vermelho':
    console.log('Olhe para rosas.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.');
    break;
  default:
    console.log('Feche os olhos');
}
