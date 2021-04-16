let num1 = prompt('Digite um número: ');
let num2 = prompt('Digite outro número: ');

/*
num1 = parseInt(num1);
num2 = parseInt(num2);
ou 
*/
num1 = Number(num1);
num2 = Number(num2);
const resultado = num1 + num2;


console.log(typeof num1, typeof num2);
console.log(num1, num2);
console.log(resultado);
alert('O resultado da soma foi: '+resultado);
//alert(`O resultado da soma foi: ${resultado}`); // ou 
//alert(`O resultado da soma foi: ${num1 + num2}`);