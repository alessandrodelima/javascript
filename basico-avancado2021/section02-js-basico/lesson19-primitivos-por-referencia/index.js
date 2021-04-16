/*
Primitivos - string, number, boolean, undefined, null (bigint, symbol). Valores copiados.
Referência (mutável) - array, object, function. Passados por referência.

*/

/*
            0123
let nome = 'Luiz';
nome[0] = 'R';
console.log(nome[0], nome);

let a = 'A';
let b = a; // Cópia. 'a' não depende de 'b' e 'b' não depende de 'a'. Primitivo
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);

let a1 = [1, 2, 3];
let b1 = a1;

console.log(a1, b1);

a1.push(4)
console.log(a);
console.log("Depois do push: ",a1, b1);

b1.pop();

console.log("Depois do pop: ",a1, b1);


let a3 = [1, 2, 3, 4, 5];
let b3 = [...a3];
let c3 = b3;

console.log("Valor de a3==> " +a3 + "\nvalor de b3==> " +b3+ "\nvalor de c3==> "+c3);

====================================================================================
*/

const a = {
    nome: 'luiz',
    sobrenome: 'Farinha' 
};

const b = {...a}; //spread

a.nome = 'João';


console.log(a);
console.log(b);
