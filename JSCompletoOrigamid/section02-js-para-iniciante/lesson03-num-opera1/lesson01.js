// Números e Operadores


// Números 

var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000


console.log(idade);

//Operadores Aritméticos 

var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(expoente);
console.log(modulo);

//Operadores Aritméticos (Strings)

var soma = '100' + 50; // 10050 - String
var subtracao = '100' - 50; // 50 - Number
var multiplicacao = '100' * '2'; // 200 
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)

console.log(typeof soma +' ==> '+ soma);
console.log(typeof subtracao +' ==> '+ subtracao);
console.log(typeof multiplicacao +' ==> '+ multiplicacao);
console.log(typeof divisao +' ==> '+ divisao);

var testeNaN = '100' / 2;
console.log(isNaN(testeNaN));

//NaN = Not a Number

var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2 // NaN (Not a Number)

var pesoPorDois = peso / 2 // NaN (Not a Number)
console.log(pesoPorDois);

//A ordem importa
//Começa por multiplicação e divisão, depois por soma e subtração.

var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

console.log(total1);
console.log(total2);
console.log(total3);
console.log(total4);

//Operadores Aritméticos Unários

var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6

var x = 5;
console.log(x++);
console.log(x);

