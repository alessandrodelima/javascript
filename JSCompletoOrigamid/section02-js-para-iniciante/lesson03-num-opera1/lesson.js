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

//*OPERADORES ARITMÉTICOS UNÁRIOS
//O + e - tenta transformar o valor seguinte em número

var frase = 'Isso é um teste';
//+frase; // NaN
//-frase; // NaN

var idade = '28';
//+idade; // 28 (número)
//-idade; // -28 (número)
console.log(+idade + 5); // 33 

var idade = '28'; 
var somaIdade = 5;
console.log(idade + somaIdade);
console.log(+idade + somaIdade);


var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

//O - antes de um número torna ele negativo

// ==============================================================

// EXERCÍCIOS 

// Qual o resultado da seguinte expressão?
    
var total = 10 + 5 * 2 / 2 + 20;
console.log("Exercício - resultado: "+total);

// Crie duas expressões que retornem NaN
var  expressao1 = 'Teste' / 2; 
console.log("expressao1 = "+ expressao1);

var expressao2 = 'Teste' - 2;
console.log("expressao2 = "+ expressao2);

// Somar a string '200' com o número 50 e retornar 250

var soma = +'200' + 50;
console.log('Exercício soma = '+soma);

// Incremente o número 5 e retorne o seu valor incrementado

var numeroIncremento = 5;
console.log('numeroIncremento = '+  ++numeroIncremento);

// Como dividir o peso por 2?
var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
// var pesoPorDois = peso / 2; // NaN (Not a Number)
console.log('pesoPorDois = '+numero);
