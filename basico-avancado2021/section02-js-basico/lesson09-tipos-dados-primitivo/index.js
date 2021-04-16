// String, number, undefined, nulll, boolean
const nome = 'Astrogildo'; // string 
const nome1 = "Astrogildo"; // string 
const nome2 = `Astrogildo`; // string 
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // undefined -> não aponta para local nenhum na memória.
const sobrenomeAluno = null; // Nulo -> não aponta para local nenhum na memória.
const aprovado = true; // Boolean = true or false (lógico). 


console.log(typeof nome, nome);
console.log(typeof num1);
console.log(typeof sobrenomeAluno);
console.log(typeof sobrenomeAluno);
console.log(typeof aprovado);

let a = 2; 
let b = a;
console.log(a, b); // 2, 2

a = 3;
console.log(a, b); // 3, 2 

