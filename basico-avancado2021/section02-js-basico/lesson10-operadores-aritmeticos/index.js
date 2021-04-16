/**
 * Aritméticos 
 * + Adição / Concatenação
 *  - / * 
 * ========= Precedência
 *  ()
 *  **
 *  * / %
 *  + - 
 */ 

const num1 = 5;
const num2 = 10;
const num3 = 2
const num4 = 3;
console.log("Adição ==> "+ num1 + num2);  // Adição
console.log("Subtração ==> "+ (num1 - num2));  // Subtração
console.log("Multiplicação ==> " + num1 * num2);  // Multiplicação
console.log("Divisão ==> " + num1 / num2);  // Divisão
console.log("Potenciação ==> " + num3 ** num4); // Potenciação  
console.log("Resto da divisão (módulo) ==> " + num2 % num3); // Resto da divisão  
console.log("Expressão ==> "+ (num1 + num2) * num3);


// Operadores de atribuição.

let contador = 1; 
 
console.log(contador++); // Incremento ==> ++ 
console.log(contador);

console.log(++contador);
console.log(++contador);

console.log(contador--); // Decremento ==> --
console.log(contador);

console.log(--contador);
console.log(contador);

const passo = 2;
let contador2 = 0;
let contador3;
contador3 += 10;

contador2 = contador2 + passo;
console.log(contador2);

contador2 = contador2 + passo;
console.log(contador2);

const num5 = 10;
const num6 = parseInt('5'); // parseInt(inteiro)
const num7 = parseFloat('5.2'); // parseFloat(decimais)
const num8 = Number('5'); // parseFloat(decimais)

console.log(num5 + num6);
console.log(typeof num6);
console.log(typeof num8);